import type { MouseEvent } from 'react';
import type { CtaButtonProps } from './cta-button.types';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import css from './cta-button.module.css';

export default function CtaButton(props: CtaButtonProps) {
  const {
    text = '',
    className = '',
    optimizely = 'landing-cta',
    disabled = false,
    fullWidth = false,
    onClick = () => {},
  } = props;

  return (
    <button
      type="button"
      data-opti={optimizely}
      data-testid="cta-button"
      disabled={disabled}
      className={clsx(css.CtaButton, className, { [css.LandingPageButtonFullWidth]: fullWidth })}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.currentTarget.blur();
        onClick();
      }}
    >
      <span>{text}</span>
      <ChevronRight strokeWidth={3} className={css.LandingPageButtonIcon} />
    </button>
  );
}

CtaButton.displayName = 'CtaButton';
