import type { InferInput } from 'valibot';
import { AccordionPropsSchema } from './accordion.schemas';

export type AccordionProps = InferInput<typeof AccordionPropsSchema>;
