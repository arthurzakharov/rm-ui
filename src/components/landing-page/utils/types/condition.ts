import type { InferInput } from 'valibot';
import {
  ExtraConditionSchema,
  ScreenSchema,
  FormSchema,
  FormKeyConditionSchema,
  ConditionSchema,
} from '../schemas/condition';

export type ExtraCondition = InferInput<typeof ExtraConditionSchema>;
export type Screen = InferInput<typeof ScreenSchema>;
export type Form = InferInput<typeof FormSchema>;
export type FormKeyCondition = InferInput<typeof FormKeyConditionSchema>;
export type Condition = InferInput<typeof ConditionSchema>;
