import type { LandingPageReviewProps } from './landing-page-review.type';
import css from './landing-page-review.module.css';

export default function LandingPageReview(props: LandingPageReviewProps) {
  const { title = '', reviews } = props;

  return (
    <div className={css.Reviews}>
      {title && (
        <h2 data-testid="landing-page-review-title" className={css.Title} dangerouslySetInnerHTML={{ __html: title }} />
      )}
      <ul className={css.List}>
        {reviews.map((item, i) => (
          <li key={i} data-testid="landing-page-review-item" className={css.Review}>
            <div data-testid="landing-page-review-message" className={css.Text}>
              {item.message}
            </div>
            <div className={css.Info}>
              <b data-testid="landing-page-review-name" className={css.User}>
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

LandingPageReview.displayName = 'LandingPageReview';
