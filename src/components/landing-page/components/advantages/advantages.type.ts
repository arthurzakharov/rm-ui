import type { InferInput } from 'valibot';
import { AdvantagesPropsSchema } from './advantages.schemas';

export type AdvantagesProps = InferInput<typeof AdvantagesPropsSchema>;
