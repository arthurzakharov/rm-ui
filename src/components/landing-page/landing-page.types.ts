import type { RefObject } from 'react';
import type { LogoName } from '../logos/logos.type';
import type { Question } from './components/landing-page-questions/landing-page-questions.type';
import type { LandingPageSuccessBoxProps } from './components/landing-page-success-box/landing-page-success-box.type';

export type Answer = { label: string; value: string };

export type Answers = Record<string, Answer>;

export type KeyToReplace = 'content' | 'subContent';

export type ExtraMode = 'some' | 'every';

export type ExtraCondition = Record<string, string>;

export type Condition = {
  value: string;
  extra: {
    mode: ExtraMode;
    condition: ExtraCondition[];
  };
};

export type PrioElement = {
  type: string;
  id: number;
  condition: Record<string, Condition[]>;
  content?: string;
  subContent?: string;
};

export type LandingPageAdvantageList = {
  type: '###AdvantageList###';
  title: string;
  list: string[];
  imageSrc: string;
  imageAlt: string;
  button: string;
  onClick: () => void;
};

export type LandingPageAdvantageListNoButton = {
  type: '###AdvantageListNoButton###';
  title: string;
  list: string[];
  imageSrc: string;
  imageAlt: string;
};

export type LandingPageContactUs = {
  type: '###ContactUs###';
  submitted: boolean;
  onClick: () => void;
  title: string;
  main: string;
  button: string;
  success: string;
};

export type LandingPageOrderedList = {
  type: '###OrderedList###';
  title: string;
  list: string[];
};

export type LandingPageButton = {
  type: '###Button###';
  text: string;
  onClick: () => void;
};

export type LandingPageLogos = {
  type: '###Logos###';
  show: LogoName[];
  tlsSrc: string;
  tuvSrc: string;
};

export interface LandingPageProps {
  loaded: boolean;
  refs: {
    container: RefObject<HTMLDivElement>;
    successBox: RefObject<HTMLDivElement>;
  };
  successBox: Omit<LandingPageSuccessBoxProps, 'refs'>;
  questions: Question[];
  sidebar: Question[];
  footer: Question[];
}
