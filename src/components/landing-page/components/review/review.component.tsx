import type { ReviewProps } from './review.type';
import css from './review.module.css';

export default function Review(props: ReviewProps) {
  const { title = '', reviews = [] } = props;

  return (
    <div className={css.Reviews}>
      {title && <h2 data-testid="review-title" className={css.Title} dangerouslySetInnerHTML={{ __html: title }} />}
      <ul className={css.List}>
        {reviews.map((item, i) => (
          <li key={i} data-testid="review-item" className={css.Review}>
            <div data-testid="review-message" className={css.Text}>
              {item.message}
            </div>
            <div className={css.Info}>
              <b data-testid="review-name" className={css.User}>
                {item.name}
              </b>
              <span className={css.Link}>
                mehr auf
                <span>&nbsp;</span>
                <a href={item.link.href} target="_blank" rel="noreferrer">
                  <b>{item.link.text}</b>
                </a>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Review.displayName = 'LandingPageReview';
