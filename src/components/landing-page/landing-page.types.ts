import type { RefObject } from 'react';
import type { LogoName } from '../logos/logos.type';
import type { Question } from './components/landing-page-questions/landing-page-questions.type';
import type { LandingPageSuccessBoxProps } from './components/landing-page-success-box/landing-page-success-box.type';
import { z } from 'zod';

const PrioElement = z.object({
  type: z.string(),
  id: z.number(),
  condition: z.record(
    z.array(
      z.object({
        value: z.string(),
        extra: z.object({
          mode: z.union([z.literal('some'), z.literal('every')]),
          condition: z.array(z.record(z.string())),
        }),
      }),
    ),
  ),
  content: z.string(),
  subContent: z.string(),
});

export const getSafePrioElement = (obj: unknown): PrioElement | null => {
  const { data, success } = PrioElement.safeParse(obj);
  return success ? data : null;
};

export type Answer = {
  value: string;
  label: string;
};
export type Answers = Record<string, Answer>;
export type KeyToReplace = 'content' | 'subContent';
export type PrioElement = z.infer<typeof PrioElement>;

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
