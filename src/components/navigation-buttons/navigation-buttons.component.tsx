import type { MouseEvent } from 'react';
import type { NavigationButtonsProps } from './navigation-buttons.types';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import css from './navigation-buttons.module.css';

export default function NavigationButtons(props: NavigationButtonsProps) {
  const { next = 'Weiter', previous = 'Zurück', showNext, showPrevious, onPrevious, onNext } = props;

  return (
    <div className={css.NavigationButtons}>
      <button
        data-testid="navigation-button-previous"
        type="button"
        className={clsx(
          css.NavigationButton,
          css.NavigationButtonPrev,
          showPrevious ? css.NavigationButtonVisible : css.NavigationButtonHidden,
        )}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          e.currentTarget.blur();
          onPrevious();
        }}
      >
        {previous}
      </button>
      <button
        data-testid="navigation-button-next"
        type="button"
        className={clsx(
          css.NavigationButton,
          css.NavigationButtonNext,
          showNext ? css.NavigationButtonVisible : css.NavigationButtonHidden,
        )}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          e.currentTarget.blur();
          onNext();
        }}
      >
        <span>{next}</span>
        <ChevronRight height={26} width={26} strokeWidth={4} className={css.NavigationButtonNextArrow} />
      </button>
    </div>
  );
}
NavigationButtons.displayName = 'NavigationButtons';
