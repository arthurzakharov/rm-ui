import type { InferInput } from 'valibot';
import { OrderedListPropsSchema } from './ordered-list.schemas';

export type OrderedListProps = InferInput<typeof OrderedListPropsSchema>;
