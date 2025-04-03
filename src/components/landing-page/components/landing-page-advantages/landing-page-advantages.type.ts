export interface LandingPageAdvantagesProps {
  title: string;
  list: string[];
  imageSrc?: string;
  imageAlt?: string;
  button?: string;
  className?: string;
  onButtonClick?: () => void;
}
