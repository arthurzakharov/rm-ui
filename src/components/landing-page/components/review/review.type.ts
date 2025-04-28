type Review = {
  message: string;
  name: string;
  link: {
    href: string;
    text: string;
  };
};

export interface ReviewProps {
  title?: string;
  reviews: Review[];
}
