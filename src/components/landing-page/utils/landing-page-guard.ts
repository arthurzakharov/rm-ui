import type { Condition, ExtraCondition, ExtraMode, PrioElement } from '../landing-page.types';
import BaseGuard from '../../../utils/base-guard';

export default class LandingPageGuard {
  static isExtraMode(str: unknown): str is ExtraMode {
    return str === 'some' || str === 'every';
  }

  static isExtraCondition(obj: unknown): obj is ExtraCondition {
    if (!BaseGuard.isObject(obj)) return false;
    return Object.values(obj).every((value) => BaseGuard.isString(value));
  }

  static isCondition(obj: unknown): obj is Condition {
    if (!BaseGuard.isObject(obj)) return false;
    if (!BaseGuard.isString(obj.value)) return false;
    if (!BaseGuard.isObject(obj.extra)) return false;
    if (!BaseGuard.isArray(obj.extra.condition)) return false;
    if (!LandingPageGuard.isExtraMode(obj.extra.mode)) return false;
    return obj.extra.condition.every(LandingPageGuard.isExtraCondition);
  }

  static isPrioElement(obj: unknown): obj is PrioElement {
    if (!BaseGuard.isObject(obj)) return false;
    if (!BaseGuard.isString(obj.type)) return false;
    if (!BaseGuard.isNumber(obj.id)) return false;
    if (!BaseGuard.isObject(obj.condition)) return false;
    if (!BaseGuard.isString(obj.content) && !BaseGuard.isUndefined(obj.content)) return false;
    if (!BaseGuard.isString(obj.subContent) && !BaseGuard.isUndefined(obj.subContent)) return false;
    return Object.values(obj.condition).every(
      (condition) => BaseGuard.isArray(condition) && condition.every(LandingPageGuard.isCondition),
    );
  }
}
