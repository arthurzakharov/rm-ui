export interface LandingPageItemBase {
  id: string;
  condition?: {
    screenMoreThan?: number;
  };
}

export interface LandingPageAdvantageList extends LandingPageItemBase {
  type: '###AdvantageList###';
  head: string;
  list: string[];
  imageSrc: string;
  imageAlt: string;
  button: string;
  onClick: () => void;
}

export interface LandingPageAdvantageListNoButton extends LandingPageItemBase {
  type: '###AdvantageListNoButton###';
  head: string;
  list: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface LandingPageContactUs extends LandingPageItemBase {
  type: '###ContactUs###';
  submitted: boolean;
  onClick: () => void;
  head: string;
  main: string;
  button: string;
  success: string;
}

export type LandingPageItem = LandingPageAdvantageList | LandingPageAdvantageListNoButton | LandingPageContactUs;

export interface LandingPageFooterProps {
  items: LandingPageItem[];
}
