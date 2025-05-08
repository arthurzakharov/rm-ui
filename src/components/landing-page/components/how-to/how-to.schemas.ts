import { object, optional } from 'valibot';
import { OrderedListPropsSchema } from '../ordered-list';
import { LogosPropsSchema } from '../../../logos';

export const HowToPropsSchemas = object({
  orderedList: optional(OrderedListPropsSchema),
  logos: optional(LogosPropsSchema),
});
