import type { InferInput } from 'valibot';
import { HowToPropsSchemas } from './how-to.schemas';

export type HowToProps = InferInput<typeof HowToPropsSchemas>;
