import type { RefObject } from 'react';
import type { LogoName } from '../logos/logos.type';
import type { Question } from './components/landing-page-questions/landing-page-questions.type';
import type { LandingPageSuccessBoxProps } from './components/landing-page-success-box/landing-page-success-box.type';
import { object, string, number, optional, union, array, record, literal, InferInput } from 'valibot';

export type FormAnswers = Record<string, string>;
export type Answer = {
  value: string;
  label: string;
};
export type Answers = Record<string, Answer>;

export const ModeSchema = union([literal('some'), literal('every')]);
export const ExtraConditionSchema = record(string(), string());
export const ExtraSchema = object({
  mode: optional(ModeSchema, 'some'),
  condition: array(ExtraConditionSchema),
});
export const ScreenSchema = object({
  lessThan: optional(number(), -1),
  moreThan: optional(number(), -1),
});
export const FormKeyConditionSchema = object({
  value: string(),
  extra: optional(ExtraSchema),
});
export const FormSchema = record(string(), array(FormKeyConditionSchema));
export const ConditionSchema = object({
  mode: optional(ModeSchema, 'some'),
  screen: optional(ScreenSchema, {
    lessThan: -1,
    moreThan: -1,
  }),
  form: optional(FormSchema, {}),
});

// Optional: Output types
export type Mode = InferInput<typeof ModeSchema>;
export type ExtraCondition = InferInput<typeof ExtraConditionSchema>;
export type Screen = InferInput<typeof ScreenSchema>;
export type Form = InferInput<typeof FormSchema>;
export type Extra = InferInput<typeof ExtraSchema>;
export type FormKeyCondition = InferInput<typeof FormKeyConditionSchema>;
export type Condition = InferInput<typeof ConditionSchema>;

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
