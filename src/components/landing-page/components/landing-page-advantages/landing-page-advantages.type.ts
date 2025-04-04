export interface LandingPageAdvantagesProps {
  head: string;
  list: string[];
  lines?: [boolean, boolean];
  imageSrc?: string;
  imageAlt?: string;
  button?: string;
  className?: string;
  onButtonClick?: () => void;
}
