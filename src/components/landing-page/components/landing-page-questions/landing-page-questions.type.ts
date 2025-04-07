import type { LandingPageAccordionProps } from '../landing-page-accordion/landing-page-accordion.type';
import type { LandingPageAdvantagesProps } from '../landing-page-advantages/landing-page-advantages.type';
import type { LandingPageContactProps } from '../landing-page-contact/landing-page-contact.type';
import type { LandingPageButtonProps } from '../landing-page-button/landing-page-button.types';
import type { LandingPageHowToProps } from '../landing-page-how-to/landing-page-how-to.type';
import type { LandingPageLogoBoardProps } from '../landing-page-logo-board/landing-page-logo-board.type';
import type { LandingPagePlayerProps } from '../landing-page-player/landing-page-player.types';
import type { LandingPageReviewProps } from '../landing-page-review/landing-page-review.type';
import type { OrderedListProps } from '../../../ordered-list/ordered-list.type';
import type { LogosProps } from '../../../logos/logos.type';

type QuestionType =
  | '###Accordion###'
  | '###AdvantageList###'
  | '###AdvantageListNoButton###'
  | '###ContactUs###'
  | '###Button###'
  | '###HowToGoNext###'
  | '###LogoCloud###'
  | '###Player###'
  | '###Review###'
  | '###OrderedList###'
  | '###Logos###'
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
    | QuestionBody<'###AdvantageListNoButton###', LandingPageAdvantagesProps>
    | QuestionBody<'###ContactUs###', LandingPageContactProps>
    | QuestionBody<'###Button###', LandingPageButtonProps>
    | QuestionBody<'###HowToGoNext###', LandingPageHowToProps>
    | QuestionBody<'###LogoCloud###', LandingPageLogoBoardProps>
    | QuestionBody<'###Player###', LandingPagePlayerProps>
    | QuestionBody<'###Review###', LandingPageReviewProps>
    | QuestionBody<'###OrderedList###', OrderedListProps>
    | QuestionBody<'###Logos###', LogosProps>
    | QuestionBody<'###Question###', null>
  )[];
};

export interface LandingPageQuestionsProps {
  list: Question[];
  className?: string;
}
