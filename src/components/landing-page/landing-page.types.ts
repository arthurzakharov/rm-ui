import type { RefObject } from 'react';
import type { Props } from './utils/types/prio';

export type Answer = {
  value: string;
  label: string;
};

export type Answers = Record<string, Answer>;

export type FormAnswers = Record<string, string>;

export type ShowPriceModalInsuranceCondition = Record<string, string>;

export interface LandingPageProps {
  loaded: boolean;
  prio: unknown;
  data: FormAnswers;
  answers: Answers;
  appHeaderRef: RefObject<HTMLDivElement> | null;
  enableStickyMobileHead: boolean;
  isContactFormSubmitted: boolean;
  showPriceModalInsuranceCondition: ShowPriceModalInsuranceCondition;
  overrideBlockProps: Partial<Props>;
  widthMeasureDebounce?: number;
}
