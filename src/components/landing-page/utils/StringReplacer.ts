type Answer = { label: string; value: string };
type Answers = Record<string, Answer>;
type KeyToReplace = 'content' | 'subContent';
type ExtraMode = 'some' | 'every';
type ExtraCondition = Record<string, string>;
type Condition = {
  value: string;
  extra: {
    mode: ExtraMode;
    condition: ExtraCondition[];
  };
};
export type PrioElement = {
  type: string;
  id: number;
  condition: Record<string, Condition[]>;
  content?: string;
  subContent?: string;
};

const SYMBOL = {
  PLACEHOLDER: '###',
  ACTION: '>>>',
  SEPARATOR: '|',
};

function isObject(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

function isString(str: unknown): str is string {
  return typeof str === 'string';
}

function isNumber(num: unknown): num is number {
  return typeof num === 'number';
}

function isUndefined(undef: unknown): undef is undefined {
  return typeof undef === 'undefined';
}

function isArray(arr: unknown): arr is [] {
  return Array.isArray(arr);
}

function isExtraMode(str: unknown): str is ExtraMode {
  return str === 'some' || str === 'every';
}

function isExtraCondition(obj: unknown): obj is ExtraCondition {
  if (!isObject(obj)) return false;
  return Object.values(obj).every((value) => isString(value));
}

function isCondition(obj: unknown): obj is Condition {
  if (!isObject(obj)) return false;
  if (!isString(obj.value)) return false;
  if (!isObject(obj.extra)) return false;
  if (!isExtraMode(obj.extra.mode)) return false;
  if (!isArray(obj.extra.condition)) return false;
  return obj.extra.condition.every(isExtraCondition);
}

function isPrioElement(obj: unknown): obj is PrioElement {
  if (!isObject(obj)) return false;
  if (!isString(obj.type)) return false;
  if (!isNumber(obj.id)) return false;
  if (!isObject(obj.condition)) return false;
  if (!isString(obj.content) && !isUndefined(obj.content)) return false;
  if (!isString(obj.subContent) && !isUndefined(obj.subContent)) return false;
  return Object.values(obj.condition).every((condition) => isArray(condition) && condition.every(isCondition));
}

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
    if (!isPrioElement(prioElement) || !Array.isArray(keysToReplace)) return prioElement;
    if (keysToReplace.includes('content') && !!prioElement.content) {
      prioElement.content = this.parse(prioElement.content);
    }
    if (keysToReplace.includes('subContent') && !!prioElement.subContent) {
      prioElement.subContent = this.parse(prioElement.subContent);
    }
    return prioElement;
  }
}
