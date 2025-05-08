import { array, number, object, optional, string } from 'valibot';

const LogoSchema = object({
  name: string(),
  priority: optional(number()),
});

export const LogoBoardPropsSchema = object({
  logos: array(LogoSchema),
});
