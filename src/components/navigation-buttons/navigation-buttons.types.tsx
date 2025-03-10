export interface NavigationButtonsProps {
  showNext: boolean;
  showPrevious: boolean;
  next?: string;
  previous?: string;
  onPrevious: () => void;
  onNext: () => void;
}
