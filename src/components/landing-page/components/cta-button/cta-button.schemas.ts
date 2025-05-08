import { boolean, function_, object, optional, string, union } from 'valibot';

export const CtaButtonPropsSchemas = object({
  text: string(),
  optimizely: optional(string()),
  className: optional(string()),
  disabled: optional(boolean()),
  fullWidth: optional(boolean()),
  onClick: optional(union([function_(), string()])),
});
