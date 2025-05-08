import type { InferInput } from 'valibot';
import { ReviewPropsSchema } from './review.schemas';

export type ReviewProps = InferInput<typeof ReviewPropsSchema>;
