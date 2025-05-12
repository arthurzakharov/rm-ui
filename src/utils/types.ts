import type { LogoName } from '../components/logos';
import { Condition } from '../components/landing-page/utils/types/condition.ts';

type LeadIdPrefix = 'SOS' | 'SBE' | 'ARE' | 'H4W' | 'PEX' | 'SWE';
type SwitchSlidesMode = 'on-card' | 'on-next' | 'mixed';
type IconPosition = 'none' | 'before' | 'after';
type HeaderAlertCss = {
  background: string;
  color: string;
};
type Header = {
  showAlert: boolean;
  alertMessage: string;
  alertCss: Partial<HeaderAlertCss>;
  info: string;
  phone: string;
  openingTimes: string;
  enableStickyMobileHead: boolean;
};
type CertificationsInfo = {
  hints: Array<string>;
  withTuv: boolean;
};
type ConditionalData<C> = {
  condition: Condition | null;
  value: C;
};
type Title = {
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};
type Choice = {
  label: string;
  value: string;
  isDefault: boolean;
};
type Row = {
  key: string;
  type: string;
  label: string;
  required: boolean;
  placeholder: string;
  placeholder_short: string;
};
type SubmitForm = {
  key: string;
  type: string;
  label: string;
  required: boolean;
  choices: Partial<Choice>[];
  row: Partial<Row>[];
  placeholder: string;
  togglesAdditionalTerms: boolean;
  valueMapping: Record<string, string>;
  requirement: Record<string, string | number[]>;
  renderInForm: boolean;
};
type QuestionChoice = {
  value: string;
  label: string;
  isPreselected: boolean;
  path: string[];
  iconClass: string;
};
type Question = {
  message: string;
  title: string;
  key: string;
  type: string;
  isRoot: boolean;
  label: string;
  overwrites: string;
  tracking: Record<string, string>;
  choices: Partial<QuestionChoice>[];
};
type Config = {
  leadIdPrefix: LeadIdPrefix;
  switchSlidesMode: SwitchSlidesMode;
  iconPosition: IconPosition;
  googleLogin: boolean;
  submitButton: ConditionalData<string>[];
  header: Partial<Header>;
  certificateLogos: LogoName[];
  certificationsInfo: Partial<CertificationsInfo>;
  isInternationalizationOn: boolean;
  usePrioCalculatorV3: number;
  usePrioCalculatorV2: number;
  useDynamicLandingPage: boolean;
  dynamicLandingPageVersion: number;
  percentDynamicLandingPageOnPrioInsideOfficeHours: [number, number, number, number];
  percentDynamicLandingPageOnPrioOutSideOfficeHours: [number, number, number, number];
  openHours: [string, string, string, string, string, string, string];
  callDelayMinutes: number;
  useAlternateSuccessPage: boolean;
  alternateSuccessPageVersion: number;
  appendPoaToCTA: boolean;
  formV2Variation: number;
  usePhoneFormatterE164: boolean;
  showPriceModal: number;
  showPriceModalInsuranceCondition: Record<string, string>;
  debugging: boolean;
  title: ConditionalData<Title>[];
  subTitle: ConditionalData<string>[];
  domainName: string;
  selectedKeywordTitle: string;
  via: string;
  statics: Record<string, string>;
  additionalTermsLabel: string;
  successText: string;
  failureText: string;
  submitForm: Partial<SubmitForm>[];
  questions: Partial<Question>[];
  keywordWhiteList: string[];
  displayLandingPage: boolean;
  landingPageVariation: number;
};

export type LeadfunnelConfig = Partial<Config>;
