export interface LandingPageButtonTypes {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  optimizely?: string;
  fullWidth?: boolean;
}
