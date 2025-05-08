import { array, nullable, object, string } from 'valibot';
import { ConditionSchema } from '../../utils/schemas/condition';

const AccordionBlockSchema = object({
  title: string(),
  content: string(),
  condition: nullable(ConditionSchema),
});

export const AccordionPropsSchema = object({
  title: string(),
  blocks: array(AccordionBlockSchema),
});
