export default class BaseGuard {
  static isObject(obj: unknown): obj is Record<string, unknown> {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
  }

  static isString(str: unknown): str is string {
    return typeof str === 'string';
  }

  static isNumber(num: unknown): num is number {
    return typeof num === 'number';
  }

  static isUndefined(undef: unknown): undef is undefined {
    return typeof undef === 'undefined';
  }

  static isArray(arr: unknown): arr is [] {
    return Array.isArray(arr);
  }
}
