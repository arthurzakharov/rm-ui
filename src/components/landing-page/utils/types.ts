import type { InferInput } from 'valibot';
import {
  ModeTypeSchema,
  ExtraConditionSchema,
  ScreenSchema,
  SuccessBoxHeadSchema,
  SuccessBoxTitleSchema,
  SuccessBoxHtmlSchema,
  SuccessBoxListSchema,
  FormSchema,
  FormKeyConditionSchema,
  ConditionSchema,
  VariationSchema,
  PrioSchema,
} from './schemas';

export type Mode = InferInput<typeof ModeTypeSchema>;
export type ExtraCondition = InferInput<typeof ExtraConditionSchema>;
export type Screen = InferInput<typeof ScreenSchema>;
export type SuccessBoxHead = InferInput<typeof SuccessBoxHeadSchema>;
export type SuccessBoxTitle = InferInput<typeof SuccessBoxTitleSchema>;
export type SuccessBoxHtml = InferInput<typeof SuccessBoxHtmlSchema>;
export type SuccessBoxList = InferInput<typeof SuccessBoxListSchema>;
export type SuccessBoxItem = SuccessBoxHead | SuccessBoxTitle | SuccessBoxHtml | SuccessBoxList;
export type Form = InferInput<typeof FormSchema>;
export type FormKeyCondition = InferInput<typeof FormKeyConditionSchema>;
export type Condition = InferInput<typeof ConditionSchema>;
export type Variation = InferInput<typeof VariationSchema>;
export type Prio = InferInput<typeof PrioSchema>;
