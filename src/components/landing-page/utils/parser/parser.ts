import type {
  Answers,
  FormAnswers,
  Prio,
  Variation,
  SuccessBoxBlueprint,
  SuccessBoxItem,
  LandingPageBlueprint,
  Condition,
  Schema,
  QuestionBlueprint,
  SidebarBlueprint,
  FooterBlueprint,
} from '../types';
import { getFallback, safeParse } from 'valibot';
import { FooterSchema, QuestionSchema, SidebarSchema, SuccessBoxSchema, VariationSchema } from '../schemas';
import Replacer from '../replacer';
import Resolver from '../resolver';

export default class Parser {
  private readonly prio: Prio;
  private readonly replacer: Replacer;
  private readonly resolver: Resolver;
  private readonly variation: Variation;
  public readonly blueprint: LandingPageBlueprint;

  constructor(prio: Prio, data: FormAnswers, answers: Answers, width: number) {
    this.prio = prio;
    this.replacer = new Replacer(answers);
    this.resolver = new Resolver(data, width);
    this.variation = this.getVariation(prio);
    this.blueprint = this.getBlueprint();
  }

  /**
   * Go through all nested levels of record's keys and look to every value of type string or array that contains string.
   * Pass this string to Replacer and replace value with function output, values that are class constructor calls are
   * passed as they are, without any change, e.x. new Date(), new Map(), new Set()
   */
  private deepMapStrings<T extends Record<string, unknown>>(record: T): T {
    const traverse = (value: unknown): unknown => {
      if (typeof value === 'string') {
        return this.replacer.replace(value);
      } else if (Array.isArray(value)) {
        return value.map(traverse);
      } else if (value instanceof Date) {
        return value;
      } else if (value && typeof value === 'object' && value.constructor === Object) {
        return Object.entries(value).reduce(
          (acc, [key, val]) => {
            acc[key] = traverse(val);
            return acc;
          },
          {} as Record<string, unknown>,
        );
      }
      return value;
    };
    return traverse(record) as T;
  }

  /**
   * Returns the first item in the list that satisfies the condition, or the first item without a condition if none do.
   * Returns null if no suitable item is found.
   */
  private getLastResolvedItem(list: Variation[] | null): Variation | null {
    if (!list) return null;
    const resolved = list.filter((item) => item.condition && this.resolver.check(item.condition)).at(0);
    return resolved ?? list.filter((item) => !item.condition).at(0) ?? null;
  }

  /**
   * Determines the appropriate variation based on the provided prio. Attempts to resolve the first matching variation
   * with a satisfied condition. Falls back to the default variation schema if none match or parsing fails.
   */
  private getVariation(prio: Prio): Variation {
    const { success, output } = safeParse(VariationSchema, this.getLastResolvedItem(prio.variation));
    return success ? output : getFallback(VariationSchema);
  }

  /**
   * Retrieves a specific item from a list based on variationId and optional condition.
   * Searches through the provided list and returns the first item where:
   * - variationId matches the provided variation, and
   * - if item has condition, it must pass the resolver.check() test.
   */
  private getSuccessBoxItem<L extends SuccessBoxItem>(list: L[], variation: number | null): L | undefined {
    return list.find(({ variationId, condition }) => {
      const variationIdMatched = variationId === variation;
      return condition ? variationIdMatched && this.resolver.check(condition) : variationIdMatched;
    });
  }

  /**
   * Get ready to use blueprint for Sidebar with all elements are checked for condition selected according to variation.
   * List items are sorted according to priority that is provided.
   */
  private getSuccessBoxBlueprint(): SuccessBoxBlueprint {
    const { success, output } = safeParse(SuccessBoxSchema, this.prio.successBox);
    const successBox = success ? output : getFallback(SuccessBoxSchema);
    const head = this.getSuccessBoxItem(successBox.head, this.variation.head);
    const title = this.getSuccessBoxItem(successBox.body.title, this.variation.title);
    const html = this.getSuccessBoxItem(successBox.body.html, this.variation.html);
    const list = this.getSuccessBoxItem(successBox.body.list, this.variation.list);
    const { content, priority } = list ? list.content : { priority: [], content: [] };
    return {
      head: {
        primary: head ? head.content.primary : '',
        secondary: head ? head.content.secondary : '',
      },
      body: {
        title: title ? title.content : '',
        html: html ? html.content : '',
        list: content
          .filter(({ condition }) => !condition || this.resolver.check(condition))
          .sort((a, b) => {
            const aIndex = priority.indexOf(a.type);
            const bIndex = priority.indexOf(b.type);
            const safeAIndex = aIndex === -1 ? priority.length : aIndex;
            const safeBIndex = bIndex === -1 ? priority.length : bIndex;
            return safeAIndex - safeBIndex;
          }),
      },
    };
  }

  /**
   * Get ready to use blueprint for Sidebar, Footer or Question with all elements are checked for condition.
   */
  private getSimpleBlueprint<O>(schema: Schema, data: unknown): O {
    const { success, output } = safeParse(schema, data);
    return success
      ? ((output as Array<{ content: unknown; props: Record<string, unknown> | null; condition: Condition | null }>)
          .filter(({ content, condition }) => !!content && (!condition || this.resolver.check(condition)))
          .map(({ content, props }) => ({ content, props })) as O)
      : (getFallback(schema) as O);
  }

  /**
   * Get ready to use blueprint for LandingPage with all elements are checked for condition.
   * Before dispatching blueprint, all nested string values are passed through Replacer to check for placeholders.
   */
  private getBlueprint(): LandingPageBlueprint {
    return this.deepMapStrings({
      successBox: this.getSuccessBoxBlueprint(),
      question: this.getSimpleBlueprint<QuestionBlueprint>(QuestionSchema, this.prio.question),
      sidebar: this.getSimpleBlueprint<SidebarBlueprint>(SidebarSchema, this.prio.sidebar),
      footer: this.getSimpleBlueprint<FooterBlueprint>(FooterSchema, this.prio.footer),
    });
  }
}
