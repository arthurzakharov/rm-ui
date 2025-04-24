import {
  object,
  string,
  number,
  optional,
  union,
  array,
  record,
  literal,
  unknown,
  fallback,
  pipe,
  hexColor,
  nullable,
} from 'valibot';
import { ContentGeneric } from './types.ts';

// Schema factories
function prioElement<T extends ContentGeneric>(content: T) {
  return fallback(
    array(
      object({
        content,
        props: nullable(record(string(), unknown())),
        condition: nullable(ConditionSchema),
      }),
    ),
    [],
  );
}
function successBoxElement<T extends ContentGeneric>(content: T) {
  return object({
    variationId: number(),
    content,
    condition: nullable(ConditionSchema),
  });
}
// Union types
export const ModeTypeSchema = union([literal('some'), literal('every')]);
export const ListTypeSchema = union([literal('check'), literal('question'), literal('exclamation'), literal('cross')]);
// Condition
export const ExtraConditionSchema = record(string(), string());
export const ExtraSchema = object({
  mode: optional(ModeTypeSchema, 'some'),
  condition: array(ExtraConditionSchema),
});
export const ScreenSchema = object({
  lessThan: optional(number(), -1),
  moreThan: optional(number(), -1),
});
export const FormKeyConditionSchema = object({
  value: string(),
  extra: optional(ExtraSchema),
});
export const FormSchema = record(string(), array(FormKeyConditionSchema));
export const ConditionSchema = object({
  mode: optional(ModeTypeSchema, 'some'),
  screen: optional(ScreenSchema, {
    lessThan: -1,
    moreThan: -1,
  }),
  form: optional(FormSchema, {}),
});
// Prio fil
export const SuccessBoxSchema = fallback(
  object({
    head: array(
      successBoxElement(
        object({
          primary: string(),
          secondary: string(),
        }),
      ),
    ),
    body: object({
      title: array(successBoxElement(string())),
      html: array(successBoxElement(string())),
      list: array(
        successBoxElement(
          object({
            priority: array(ListTypeSchema),
            content: array(
              object({
                type: ListTypeSchema,
                content: string(),
                subContent: array(string()),
                condition: nullable(ConditionSchema),
              }),
            ),
          }),
        ),
      ),
    }),
  }),
  {
    head: [],
    body: {
      title: [],
      html: [],
      list: [],
    },
  },
);
export const VariationSchema = fallback(
  object({
    color: nullable(pipe(string(), hexColor())),
    head: nullable(number()),
    title: nullable(number()),
    html: nullable(number()),
    list: nullable(number()),
    condition: nullable(ConditionSchema),
  }),
  {
    color: '#333',
    head: 1,
    title: 1,
    html: 1,
    list: 1,
    condition: null,
  },
);
export const QuestionSchema = prioElement(
  object({
    head: string(),
    body: string(),
  }),
);
export const SidebarSchema = prioElement(string());
export const FooterSchema = prioElement(string());
export const PrioSchema = fallback(
  object({
    variation: nullable(array(VariationSchema)),
    successBox: nullable(SuccessBoxSchema),
    question: nullable(QuestionSchema),
    sidebar: nullable(SidebarSchema),
    footer: nullable(FooterSchema),
  }),
  {
    variation: null,
    successBox: null,
    question: null,
    sidebar: null,
    footer: null,
  },
);
