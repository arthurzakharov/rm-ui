import type { LoadingCircleProps } from './loading-circle.types';
import clsx from 'clsx';
import css from './loading-circle.module.css';

export default function LoadingCircle(props: LoadingCircleProps) {
  const { success, fail, className = '' } = props;
  return (
    <div
      data-testid="loading-circle"
      className={clsx(
        css.LoadingCircle,
        {
          [css.Completed]: success || fail,
          [css.Failed]: fail && !success,
        },
        className,
      )}
    >
      <div
        data-testid="loading-draw"
        className={clsx(css.Circle, {
          [css.Show]: success || fail,
          [css.Checkmark]: success && !fail,
          [css.Cross]: fail && !success,
        })}
      />
    </div>
  );
}

LoadingCircle.displayName = 'LoadingCircle';
