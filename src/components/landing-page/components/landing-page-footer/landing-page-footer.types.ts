import type {
  LandingPageAdvantageList,
  LandingPageAdvantageListNoButton,
  LandingPageContactUs,
} from '../../landing-page.types';

export interface LandingPageFooterProps {
  items: (LandingPageAdvantageList | LandingPageAdvantageListNoButton | LandingPageContactUs)[];
}
