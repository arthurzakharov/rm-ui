import type { FC, MouseEvent } from 'react';
import type { LandingPageButtonTypes } from './landing-page-button.types';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../../../utils/functions';
import css from './landing-page-button.module.css';

const LandingPageButton: FC<LandingPageButtonTypes> = ({ text, onClick, disabled = false, className = '', optimizely = 'landing-cta',  fullWidth = false }) => (
  <button
    type="button"
    data-opti={optimizely}
    data-testid="landing-page-button"
    disabled={disabled}
    className={cn(css.LandingPageButton, className, { [css.LandingPageButtonFullWidth]: fullWidth })}
    onClick={(e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick();
    }}
  >
    <span>{text}</span>
    <ChevronRight strokeWidth={3} className={css.LandingPageButtonIcon} />
  </button>
);

LandingPageButton.displayName = 'LandingPageButton';

export default LandingPageButton;
