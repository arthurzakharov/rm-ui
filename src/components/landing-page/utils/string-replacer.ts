import type { Answer, Answers, KeyToReplace, PrioElement } from '../landing-page.types';
import LandingPageGuard from './landing-page-guard';
import { SYMBOL } from './constants';

export default class StringReplacer {
  private readonly answers: Answers;

  constructor(answers: Answers) {
    this.answers = answers;
  }

  private restoreString(contentStrings: string[], placeholderStrings: string[]): string {
    return contentStrings
      .reduce((result: string[], content: string, idx: number) => {
        result.push(content);
        result.push(placeholderStrings[idx] || '');
        return result;
      }, [])
      .join('');
  }

  private getAnswer(key: string): Answer {
    return this.answers[key] || { label: '', value: '' };
  }

  private parsePlaceholderForCondition(placeholder: string): string {
    const [answerKey = '', actions = ''] = placeholder.split(SYMBOL.ACTION);
    const answer = this.getAnswer(answerKey);
    return actions.split(SYMBOL.SEPARATOR).reduce((result: string, action: string): string => {
      switch (action) {
        case 'lowerCaseFirstLetter':
          return this.lowerCaseFirstLetter(result);
        case 'capitalizeFirstLetter':
          return this.capitalizeFirstLetter(result);
        case 'label':
          return answer.label;
        default:
          return result;
      }
    }, answer.value);
  }

  private lowerCaseFirstLetter(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private parse(str: string): string {
    const contents = str.split(SYMBOL.PLACEHOLDER).filter((_, i) => !(i % 2));
    const placeholders = str
      .split(SYMBOL.PLACEHOLDER)
      .filter((_, i) => i % 2)
      .map((placeholder: string) => this.parsePlaceholderForCondition(placeholder));
    return this.restoreString(contents, placeholders);
  }

  public replace(prioElement: PrioElement, keysToReplace: KeyToReplace[] = ['content', 'subContent']): PrioElement {
    if (!LandingPageGuard.isPrioElement(prioElement) || !Array.isArray(keysToReplace)) return prioElement;
    if (keysToReplace.includes('content') && !!prioElement.content) {
      prioElement.content = this.parse(prioElement.content);
    }
    if (keysToReplace.includes('subContent') && !!prioElement.subContent) {
      prioElement.subContent = this.parse(prioElement.subContent);
    }
    return prioElement;
  }
}
