import type { InferInput } from 'valibot';
import {
  SuccessBoxHeadSchema,
  SuccessBoxTitleSchema,
  SuccessBoxHtmlSchema,
  SuccessBoxListSchema,
  VariationSchema,
  PrioSchema,
} from '../schemas/prio';

export type SuccessBoxHead = InferInput<typeof SuccessBoxHeadSchema>;
export type SuccessBoxTitle = InferInput<typeof SuccessBoxTitleSchema>;
export type SuccessBoxHtml = InferInput<typeof SuccessBoxHtmlSchema>;
export type SuccessBoxList = InferInput<typeof SuccessBoxListSchema>;
export type SuccessBoxItem = SuccessBoxHead | SuccessBoxTitle | SuccessBoxHtml | SuccessBoxList;
export type Variation = InferInput<typeof VariationSchema>;
export type Prio = InferInput<typeof PrioSchema>;
