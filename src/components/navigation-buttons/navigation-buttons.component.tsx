import type { FC } from 'react';
import type { NavigationButtonsProps } from './navigation-buttons.types';
import { cn } from '../../utils/functions';
import css from './navigation-buttons.module.css';

const NavigationButtons: FC<NavigationButtonsProps> = ({
  next = 'Weiter',
  previous = 'Zurück',
  showNext = false,
  showPrevious = false,
  onPrevious,
  onNext,
}) => {
  return (
    <div className={css.NavigationButtons}>
      <button
        type="button"
        className={cn(
          css.NavigationButton,
          css.NavigationButtonPrev,
          showPrevious ? css.NavigationButtonVisible : css.NavigationButtonHidden,
        )}
        onClick={() => onPrevious()}
      >
        {previous}
      </button>
      <button
        type="button"
        className={cn(
          css.NavigationButton,
          css.NavigationButtonNext,
          showNext ? css.NavigationButtonVisible : css.NavigationButtonHidden,
        )}
        onClick={() => onNext()}
      >
        {next}
      </button>
    </div>
  );
};

NavigationButtons.displayName = 'NavigationButtons';

export default NavigationButtons;
