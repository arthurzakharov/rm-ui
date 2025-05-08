import { array, boolean, function_, object, optional, string } from 'valibot';

export const AdvantagesPropsSchema = object({
  title: optional(string()),
  list: optional(array(string())),
  button: optional(string()),
  withImage: optional(boolean()),
  withoutButton: optional(boolean()),
  onButtonClick: optional(function_()),
});
