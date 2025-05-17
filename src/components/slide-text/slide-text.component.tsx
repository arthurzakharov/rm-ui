import type { ChangeEvent } from 'react';
import type { SlideTextProps } from './slide-text.types';
import clsx from 'clsx';
import css from './slide-text.module.css';

export default function SlideText(props: SlideTextProps) {
  const {
    errorMessage = '',
    isErrorShown = false,
    onChange = () => {},
    large = false,
    type = 'text',
    placeholder = '',
  } = props;
  return (
    <div className={clsx(css.SlideText, large ? css.Large : css.Medium)}>
      <div className={css.Container}>
        <input
          type={type}
          placeholder={placeholder}
          className={css.Input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        />
      </div>
      {isErrorShown ? <div className={css.Error}>{errorMessage}</div> : null}
    </div>
  );
}

SlideText.displayName = 'SlideText';
