import type { ExtraCondition, Condition, Screen, Form, FormKeyCondition } from '../types/condition';
import type { FormAnswers } from '../../landing-page.types';
import { ConditionSchema, ScreenSchema } from '../schemas/condition';
import SYMBOL from '../symbol';
import { getDefaults, getFallback, safeParse } from 'valibot';

export default class Resolver {
  private readonly formAnswers: FormAnswers;
  private readonly width: number;

  constructor(data: FormAnswers, width: number) {
    this.formAnswers = data;
    this.width = width;
  }

  // Get form answers key in a secure way

  private getFormAnswer(key: string): string {
    return this.formAnswers[key] || '';
  }

  // Methods to parse string with value for special symbols

  private parseOr(str: string): string[] {
    return str.split(SYMBOL.OR).filter(Boolean);
  }

  private hasOr(str: string): boolean {
    return str.includes(SYMBOL.OR);
  }

  private checkOr(formAnswerKey: string, str: string): boolean {
    return this.hasOr(str) && this.parseOr(str).some((s) => s === this.getFormAnswer(formAnswerKey));
  }

  private parseNot(str: string): string[] {
    return str.split(SYMBOL.NOT).filter(Boolean);
  }

  private hasNot(str: string): boolean {
    return str.includes(SYMBOL.NOT);
  }

  private checkNot(formAnswerKey: string, str: string): boolean {
    return this.hasNot(str) && this.parseNot(str).every((s) => s !== this.getFormAnswer(formAnswerKey));
  }

  private parseFromTo(str: string): [number, number] {
    const fromMatch = str.match(/>>>FROM>>>(-?\d+(\.\d+)?)/);
    const toMatch = str.match(/>>>TO>>>(-?\d+(\.\d+)?)/);
    const from = fromMatch ? parseFloat(fromMatch[1]) : NaN;
    const to = toMatch ? parseFloat(toMatch[1]) : NaN;
    return Number.isNaN(from) || Number.isNaN(to) ? [0, 0] : [from, to];
  }

  private hasFromTo(str: string): boolean {
    return str.includes(SYMBOL.FROM) && str.includes(SYMBOL.TO);
  }

  private checkFromTo(formAnswerKey: string, str: string): boolean {
    return (
      this.hasFromTo(str) &&
      (() => {
        const formAnswer = Number(this.getFormAnswer(formAnswerKey));
        const [from, to] = this.parseFromTo(str);
        return formAnswer >= from && formAnswer <= to;
      })()
    );
  }

  // Summary method. Check value string for all possible values match

  private checkValueString(formAnswerKey: string, str: string): boolean {
    return (
      this.getFormAnswer(formAnswerKey) === str ||
      this.checkOr(formAnswerKey, str) ||
      this.checkNot(formAnswerKey, str) ||
      this.checkFromTo(formAnswerKey, str)
    );
  }

  private checkScreen(screen: Screen | null): boolean {
    if (screen === null) return true;
    return [
      screen.moreThan === null || this.width >= screen.moreThan,
      screen.lessThan === null || this.width < screen.lessThan,
    ].every(Boolean);
  }

  private checkScreenPassed(screen: Screen | null): boolean {
    if (!screen) return true;
    const screenDefaults = getDefaults(ScreenSchema);
    return screen.lessThan !== screenDefaults.lessThan || screen.moreThan !== screenDefaults.moreThan;
  }

  private checkFormPassed(form: Form | null): boolean {
    return !!form && Object.entries(form).length > 0;
  }

  private checkFormKey([formAnswerKey, conditions]: [string, FormKeyCondition[]]) {
    return conditions.some(({ value, extra }) => {
      const valueMatches = this.checkValueString(formAnswerKey, value);
      if (extra) {
        return (
          valueMatches &&
          (extra.mode === 'some'
            ? extra.condition.some((c) => this.checkExtraCondition(c))
            : extra.condition.every((c) => this.checkExtraCondition(c)))
        );
      } else {
        return valueMatches;
      }
    });
  }

  private checkExtraCondition(extraCondition: ExtraCondition): boolean {
    return Object.entries(extraCondition).some(([formAnswerKey, value]) => this.checkValueString(formAnswerKey, value));
  }

  private checkForm(condition: Condition): boolean {
    const { mode, form } = this.getCondition(condition);
    if (form === null) return true;
    return mode === 'some'
      ? Object.entries(form).some((entry) => this.checkFormKey(entry))
      : Object.entries(form).every((entry) => this.checkFormKey(entry));
  }

  // Get secure condition

  private getCondition(condition: Condition): Condition {
    const { success, output } = safeParse(ConditionSchema, condition);
    return success ? output : getFallback(ConditionSchema);
  }

  // Final method to check if condition resolves or not

  public check(condition: Condition): boolean {
    const { forceResult, mode, screen, form } = this.getCondition(condition);
    if (forceResult === 'fail') return false;
    if (forceResult === 'success') return true;
    if (screen === null && form === null) return true;
    const resultCheck = [];
    const screenPassed = this.checkScreenPassed(screen);
    const formPassed = this.checkFormPassed(form);
    if (screenPassed && screen !== null) resultCheck.push(this.checkScreen(screen));
    if (formPassed && form !== null) resultCheck.push(this.checkForm(condition));
    return mode === 'some' ? resultCheck.some(Boolean) : resultCheck.every(Boolean);
  }
}
