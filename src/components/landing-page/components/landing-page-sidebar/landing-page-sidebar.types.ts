import type { Question } from '../landing-page-questions/landing-page-questions.type';

export interface LandingPageSidebarProps {
  list: Question[];
  className?: string;
}
