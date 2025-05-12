import type { RefObject } from 'react';
import type { Props } from './utils/types/prio';
import type { LeadfunnelConfig } from '../../utils/types';
import type { LogosProps } from '../logos';

export type Answer = {
  value: string;
  label: string;
};

export type Answers = Record<string, Answer>;

export type FormAnswers = Record<string, string>;

export type ShowPriceModalInsuranceCondition = Record<string, string>;

export interface LandingPageProps {
  config: LeadfunnelConfig;
  loaded: boolean;
  prio: unknown;
  data: FormAnswers;
  answers: Answers;
  appHeaderRef: RefObject<HTMLDivElement> | null;
  isContactFormSubmitted: boolean;
  logos: Pick<LogosProps, 'tlsSrc' | 'tuvSrc'>;
  overrideBlockProps: Partial<Props>;
}
