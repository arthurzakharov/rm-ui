import type { LogoName } from '../logos/logos.type';

export type LandingPageAdvantageList = {
  type: '###AdvantageList###';
  head: string;
  list: string[];
  imageSrc: string;
  imageAlt: string;
  button: string;
  onClick: () => void;
};

export type LandingPageAdvantageListNoButton = {
  type: '###AdvantageListNoButton###';
  head: string;
  list: string[];
  imageSrc: string;
  imageAlt: string;
};

export type LandingPageContactUs = {
  type: '###ContactUs###';
  submitted: boolean;
  onClick: () => void;
  head: string;
  main: string;
  button: string;
  success: string;
};

export type LandingPageOrderedList = {
  type: '###OrderedList###';
  head: string;
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

export type LandingPageItem =
  | LandingPageAdvantageList
  | LandingPageAdvantageListNoButton
  | LandingPageContactUs
  | LandingPageOrderedList
  | LandingPageButton
  | LandingPageLogos;
