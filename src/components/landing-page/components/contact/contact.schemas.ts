import { boolean, function_, object, optional, string } from 'valibot';

export const ContactPropsSchema = object({
  submitted: optional(boolean()),
  sidebar: optional(boolean()),
  title: optional(string()),
  main: optional(string()),
  button: optional(string()),
  success: optional(string()),
  onClick: optional(function_()),
});
