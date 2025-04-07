export interface LandingPageButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  optimizely?: string;
  fullWidth?: boolean;
}
