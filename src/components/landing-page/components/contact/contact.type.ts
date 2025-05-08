import type { InferInput } from 'valibot';
import { ContactPropsSchema } from './contact.schemas';

export type ContactProps = InferInput<typeof ContactPropsSchema>;
