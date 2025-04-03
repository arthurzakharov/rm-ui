type Review = {
  message: string;
  name: string;
  link: {
    href: string;
    text: string;
  };
};

export interface LandingPageReviewProps {
  title?: string;
  reviews: Review[];
}
