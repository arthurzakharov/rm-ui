import type { Prio, Variation, SuccessBoxItem } from '../types/prio';
import type { Answers, FormAnswers } from '../../landing-page.types';
import type { AccordionProps } from '../../components/accordion';
import type { AdvantagesProps } from '../../components/advantages';
import type { HowToProps } from '../../components/how-to';
import type { ContactProps } from '../../components/contact';
import type { OrderedListProps } from '../../components/ordered-list';
import type { CtaButtonProps } from '../../components/cta-button';
import type { LogosProps } from '../../../logos';
import type { PlayerProps } from '../../components/player';
import type { LogoBoardProps } from '../../components/logo-board';
import type { ReviewProps } from '../../components/review';
import type { SuccessBoxProps } from '../../components/success-box';
import type { Group } from '../../components/group';
import { getFallback, safeParse } from 'valibot';
import { GroupSchema, PrioSchema, SuccessBoxSchema, VariationSchema } from '../schemas/prio';
import Replacer from '../replacer';
import Resolver from '../resolver';
import { BLOCK, type Block } from '../../components/block';
import SYMBOL from '../symbol';
import fallback from '../fallback';

export default class Parser {
  private readonly prio: Prio;
  private readonly replacer: Replacer;
  private readonly resolver: Resolver;
  private readonly variation: Variation;
  public readonly page: {
    successBox: SuccessBoxProps;
    question: Array<Group>;
    sidebar: Array<Group>;
    footer: Array<Group>;
  };

  constructor(prio: unknown, data: FormAnswers, answers: Answers, width: number) {
    const { success, output } = safeParse(PrioSchema, prio);
    const safePrio = success ? output : getFallback(PrioSchema);
    this.prio = safePrio;
    this.replacer = new Replacer(answers);
    this.resolver = new Resolver(data, width);
    this.variation = this.getVariation(safePrio);
    this.page = this.deepMapStrings({
      successBox: this.getSuccessBoxProps(),
      question: this.getLandingPageGroups(safePrio.question),
      sidebar: this.getLandingPageGroups(safePrio.sidebar),
      footer: this.getLandingPageGroups(safePrio.footer),
    });
  }

  private isValidBlock(value: string): value is BLOCK {
    return Object.values(BLOCK).includes(value as BLOCK);
  }

  private getKey<T>(obj: Record<string, unknown> | null, path: string, fb: T): T {
    return !!obj && !!obj[path] ? { ...fb, ...obj[path] } : fb;
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
  private getSuccessBoxItem<L extends SuccessBoxItem>(list: Array<L>, variation: number | null): L | undefined {
    return list.find(({ variationId, condition }) => {
      const variationIdMatched = variationId === variation;
      return condition ? variationIdMatched && this.resolver.check(condition) : variationIdMatched;
    });
  }

  /**
   * Get ready to use blueprint for Sidebar with all elements are checked for condition selected according to variation.
   * List items are sorted according to priority that is provided.
   */
  private getSuccessBoxProps(): SuccessBoxProps {
    const { success, output } = safeParse(SuccessBoxSchema, this.prio.successBox);
    const successBox = success ? output : getFallback(SuccessBoxSchema);
    const head = this.getSuccessBoxItem(successBox.head, this.variation.head);
    const title = this.getSuccessBoxItem(successBox.body.title, this.variation.title);
    const html = this.getSuccessBoxItem(successBox.body.html, this.variation.html);
    const list = this.getSuccessBoxItem(successBox.body.list, this.variation.list);
    const { content, priority } = list ? list.content : { priority: [], content: [] };
    return {
      color: this.variation.color,
      head: {
        primary: head ? head.content.primary : '',
        secondary: head ? head.content.secondary : '',
      },
      body: this.variation.order.map((type) => {
        switch (type) {
          case 'list':
            return {
              type,
              data: content
                .filter(({ condition }) => !condition || this.resolver.check(condition))
                .sort((a, b) => {
                  const aIndex = priority.indexOf(a.type);
                  const bIndex = priority.indexOf(b.type);
                  const safeAIndex = aIndex === -1 ? priority.length : aIndex;
                  const safeBIndex = bIndex === -1 ? priority.length : bIndex;
                  return safeAIndex - safeBIndex;
                }),
            };
          case 'title':
            return {
              type,
              data: title ? title.content : '',
            };
          case 'html':
            return {
              type,
              data: html ? html.content : '',
            };
        }
      }),
    };
  }

  /**
   * Get ready to use blueprint for Sidebar, Footer or Question with all elements are checked for condition.
   */
  private getLandingPageGroups(data: unknown): Array<Group> {
    const groups = Array.isArray(data)
      ? data
          .map((d) => {
            const { success, output } = safeParse(GroupSchema, d);
            return success ? output : null;
          })
          .filter((d) => !!d)
      : [];
    return groups
      .filter(({ content, condition }) => !!content && (!condition || this.resolver.check(condition)))
      .map(({ content, props }) => ({ content, props }))
      .map(({ content, props }): Group => {
        return {
          id: Math.ceil(Math.random() * 1000000),
          type: this.isValidBlock(content.body) ? content.body : BLOCK.QUESTION,
          title: content.head,
          blocks: content.body
            .split(SYMBOL.COMPONENT)
            .reduce<Block[]>((elements, chunk, idx) => {
              const component = SYMBOL.COMPONENT + chunk + SYMBOL.COMPONENT;
              const type = this.isValidBlock(component) ? component : BLOCK.QUESTION;
              return [
                ...elements,
                {
                  type,
                  content: idx % 2 === 1 ? '' : chunk,
                  props: ((type) => {
                    switch (type) {
                      case BLOCK.ACCORDION:
                        return this.getKey<AccordionProps>(props, 'accordion', fallback.accordion);
                      case BLOCK.ADVANTAGE_LIST:
                        return this.getKey<AdvantagesProps>(props, 'advantageList', fallback.advantages);
                      case BLOCK.ADVANTAGE_LIST_NO_BUTTON:
                        return this.getKey<AdvantagesProps>(props, 'advantageListNoButton', fallback.advantages);
                      case BLOCK.CONTACT_US:
                        return this.getKey<ContactProps>(props, 'contact', fallback.contact);
                      case BLOCK.BUTTON:
                        return this.getKey<CtaButtonProps>(props, 'button', fallback.ctaButtons);
                      case BLOCK.HOW_TO_GO_NEXT:
                        return this.getKey<HowToProps>(props, 'howTo', fallback.howTo);
                      case BLOCK.LOGO_CLOUD:
                        return this.getKey<LogoBoardProps>(props, 'logoBoard', fallback.logoBoard);
                      case BLOCK.PLAYER:
                        return this.getKey<PlayerProps>(props, 'player', fallback.player);
                      case BLOCK.REVIEW:
                        return this.getKey<ReviewProps>(props, 'review', fallback.review);
                      case BLOCK.ORDERED_LIST:
                        return this.getKey<OrderedListProps>(props, 'orderedList', fallback.orderedList);
                      case BLOCK.LOGOS:
                        return this.getKey<LogosProps>(props, 'logos', fallback.logos);
                      case BLOCK.QUESTION:
                        return null;
                    }
                  })(type),
                } as Block,
              ];
            }, [])
            .filter(({ type, content }) => !(type === BLOCK.QUESTION && !content)),
          hideTop: false,
          hideBottom: false,
        };
      });
  }
}
