import type { InferInput } from 'valibot';
import { CtaButtonPropsSchemas } from './cta-button.schemas';

export type CtaButtonProps = InferInput<typeof CtaButtonPropsSchemas>;
