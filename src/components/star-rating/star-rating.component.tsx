import type { StartRatingProps } from './start-rating.types';
import { Star } from 'lucide-react';
import css from './star-rating.module.css';
import clsx from 'clsx';

export default function StarRating(props: StartRatingProps) {
  const { rate = 5, size = 16, color } = props;
  return (
    <div className={css.StarRating}>
      {Array(Math.round(rate))
        .fill(null)
        .map((_, index) => (
          <Star
            key={`star-${index}`}
            data-testid="star"
            className={clsx(css.Star, { [css.StarCustomColor]: !color })}
            width={size}
            height={size}
            stroke={color}
            fill={color}
          />
        ))}
    </div>
  );
}

StarRating.displayName = 'StarRating';
