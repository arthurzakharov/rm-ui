import { array, fallback, literal, nullable, number, object, record, string, union } from 'valibot';

const ModeTypeSchema = union([literal('some'), literal('every')]);

const ForceResultSchema = union([literal('success'), literal('fail'), literal('none')]);

export const ScreenSchema = object({
  lessThan: nullable(number()),
  moreThan: nullable(number()),
});

export const ExtraConditionSchema = record(string(), string());

export const ExtraSchema = object({
  mode: ModeTypeSchema,
  condition: array(ExtraConditionSchema),
});

export const FormKeyConditionSchema = object({
  value: string(),
  extra: nullable(ExtraSchema),
});

export const FormSchema = record(string(), array(FormKeyConditionSchema));

export const ConditionSchema = fallback(
  object({
    forceResult: ForceResultSchema,
    mode: ModeTypeSchema,
    screen: nullable(ScreenSchema),
    form: nullable(FormSchema),
  }),
  {
    forceResult: 'none',
    mode: 'some',
    screen: null,
    form: null,
  },
);
