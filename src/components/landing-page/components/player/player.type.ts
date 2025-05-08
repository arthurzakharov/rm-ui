import type { InferInput } from 'valibot';
import { PlayerPropsSchema } from './player.schemas';

export type PlayerProps = InferInput<typeof PlayerPropsSchema>;
