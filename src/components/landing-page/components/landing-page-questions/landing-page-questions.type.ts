import type { LandingPageAccordionProps } from '../landing-page-accordion/landing-page-accordion.type';
import type { LandingPageAdvantagesProps } from '../landing-page-advantages/landing-page-advantages.type';
import type { LandingPageButtonProps } from '../landing-page-button/landing-page-button.types';
import type { LandingPageHowToProps } from '../landing-page-how-to/landing-page-how-to.type';
import type { LandingPageLogoBoardProps } from '../landing-page-logo-board/landing-page-logo-board.type';
import type { LandingPagePlayerProps } from '../landing-page-player/landing-page-player.types';
import type { LandingPageReviewProps } from '../landing-page-review/landing-page-review.type';

type QuestionType =
  | '###Accordion###'
  | '###AdvantageList###'
  | '###Button###'
  | '###HowToGoNext###'
  | '###LogoCloud###'
  | '###Player###'
  | '###Review###'
  | '###Question###';

type QuestionBody<T extends QuestionType, P> = {
  type: T;
  content: string;
  props: P;
};

export type Question = {
  id: number;
  type: QuestionType;
  hideTop: boolean;
  hideBottom: boolean;
  title: string;
  body: (
    | QuestionBody<'###Accordion###', LandingPageAccordionProps>
    | QuestionBody<'###AdvantageList###', LandingPageAdvantagesProps>
    | QuestionBody<'###Button###', LandingPageButtonProps>
    | QuestionBody<'###HowToGoNext###', LandingPageHowToProps>
    | QuestionBody<'###LogoCloud###', LandingPageLogoBoardProps>
    | QuestionBody<'###Player###', LandingPagePlayerProps>
    | QuestionBody<'###Review###', LandingPageReviewProps>
    | QuestionBody<'###Question###', null>
  )[];
};

export interface LandingPageQuestionsProps {
  list: Question[];
}
