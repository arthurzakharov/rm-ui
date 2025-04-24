import { BaseIssue, BaseSchema, InferInput } from 'valibot';
import {
  ModeTypeSchema,
  ExtraConditionSchema,
  ScreenSchema,
  FormSchema,
  FormKeyConditionSchema,
  ConditionSchema,
  ListTypeSchema,
  VariationSchema,
  PrioSchema,
} from './schemas';

export type Answer = {
  value: string;
  label: string;
};
export type Answers = Record<string, Answer>;
export type FormAnswers = Record<string, string>;
export type SuccessBoxBlueprint = {
  head: {
    primary: string;
    secondary: string;
  };
  body: {
    title: string;
    html: string;
    list: {
      type: ListType;
      content: string;
      subContent: string[];
    }[];
  };
};
export type SimpleBlueprint<C> = Array<{
  content: C;
  props: Record<string, unknown> | null;
}>;
export type QuestionBlueprint = SimpleBlueprint<{
  head: string;
  body: string;
}>;
export type FooterBlueprint = SimpleBlueprint<string>;
export type SidebarBlueprint = SimpleBlueprint<string>;
export type LandingPageBlueprint = {
  successBox: SuccessBoxBlueprint;
  question: QuestionBlueprint;
  sidebar: SidebarBlueprint;
  footer: FooterBlueprint;
};
export type SuccessBoxItem = {
  variationId: number;
  content: unknown;
  condition: Condition | null;
};
export type Schema = BaseSchema<unknown, unknown, BaseIssue<unknown>>;
export type ContentGeneric = BaseSchema<unknown, unknown, BaseIssue<unknown>>;

export type Mode = InferInput<typeof ModeTypeSchema>;
export type ExtraCondition = InferInput<typeof ExtraConditionSchema>;
export type Screen = InferInput<typeof ScreenSchema>;
export type Form = InferInput<typeof FormSchema>;
export type FormKeyCondition = InferInput<typeof FormKeyConditionSchema>;
export type Condition = InferInput<typeof ConditionSchema>;
export type Variation = InferInput<typeof VariationSchema>;
export type Prio = InferInput<typeof PrioSchema>;
export type ListType = InferInput<typeof ListTypeSchema>;
