import {
  LandingPageButton,
  LandingPageContactUs,
  LandingPageLogos,
  LandingPageOrderedList,
} from '../../landing-page.types';

export interface LandingPageSidebarProps {
  items: (LandingPageOrderedList | LandingPageButton | LandingPageLogos | LandingPageContactUs)[];
}
