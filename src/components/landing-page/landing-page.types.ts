import type { AccordionProps } from './components/accordion';
import type { AdvantagesProps } from './components/advantages';
import type { HowToProps } from './components/how-to';
import type { ContactProps } from './components/contact';
import type { CtaButtonProps } from './components/cta-button';
import type { LogoBoardProps } from './components/logo-board';
import type { LogosProps } from '../logos';
import type { PlayerProps } from './components/player';
import type { OrderedListProps } from './components/ordered-list';
import type { ReviewProps } from './components/review';

export type Fallback = {
  accordion: AccordionProps;
  advantages: AdvantagesProps;
  howTo: HowToProps;
  contact: ContactProps;
  ctaButtons: CtaButtonProps;
  logoBoard: LogoBoardProps;
  logos: LogosProps;
  player: PlayerProps;
  orderedList: OrderedListProps;
  review: ReviewProps;
};

export type Answer = {
  value: string;
  label: string;
};

export type Answers = Record<string, Answer>;

export type FormAnswers = Record<string, string>;

export interface LandingPageProps {
  loaded: boolean;
  prio: unknown;
  data: FormAnswers;
  answers: Answers;
}
