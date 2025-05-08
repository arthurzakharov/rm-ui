import type { InferInput } from 'valibot';
import { LogoNameSchema, LogosPropsSchema } from './logos.schemas';

export type LogoName = InferInput<typeof LogoNameSchema>;

export type LogosProps = InferInput<typeof LogosPropsSchema>;
