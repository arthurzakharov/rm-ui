import { array, object, optional, string } from 'valibot';

export const OrderedListPropsSchema = object({
  title: optional(string()),
  list: optional(array(string())),
  className: optional(string()),
});
