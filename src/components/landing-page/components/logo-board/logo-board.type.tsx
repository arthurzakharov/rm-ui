import type { InferInput } from 'valibot';
import { LogoBoardPropsSchema } from './logo-board.schemas';

export type LogoBoardProps = InferInput<typeof LogoBoardPropsSchema>;
