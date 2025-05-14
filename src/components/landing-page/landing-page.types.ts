import type { RefObject } from 'react';
import type { Props } from './utils/types/prio';
import type { LeadfunnelConfig } from '../../utils/types';

export type Answer = {
  value: string;
  label: string;
};

export type Answers = Record<string, Answer>;

export interface LandingPageProps {
  config: LeadfunnelConfig;
  loaded: boolean;
  prio: unknown;
  answers: Answers;
  appHeaderRef: RefObject<HTMLDivElement> | null;
  submitted: boolean;
  tlsSrc: string;
  tuvSrc: string;
  overrides: Partial<Props>;
}
