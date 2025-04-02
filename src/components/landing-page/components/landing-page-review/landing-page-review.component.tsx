import type { LandingPageReviewProps } from './landing-page-review.type';
import css from './landing-page-review.module.css';

export default function LandingPageReview(props: LandingPageReviewProps) {
  const { reviews = [], hideTopSeparator = false, hideBottomSeparator = false } = props;

  return (
    <div className={css.Reviews}>
      {!hideTopSeparator && <hr data-testid="landing-page-review-top-line" className={css.Line} />}
      <h2 className={css.Title}>
        <b>Erfahrungen:</b> Das sagen unsere Mandanten
      </h2>
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
      {!hideBottomSeparator && <hr data-testid="landing-page-review-bottom-line" className={css.Line} />}
    </div>
  );
}

LandingPageReview.displayName = 'LandingPageReview';
