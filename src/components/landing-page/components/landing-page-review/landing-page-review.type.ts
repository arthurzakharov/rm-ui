type Review = {
  message: string;
  name: string;
  link: {
    href: string;
    text: string;
  };
};

export interface LandingPageReviewProps {
  reviews: Review[];
  hideTopSeparator?: boolean;
  hideBottomSeparator?: boolean;
}
