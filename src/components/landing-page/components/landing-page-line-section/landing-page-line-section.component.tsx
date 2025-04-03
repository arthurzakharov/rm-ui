import type { LandingPageLineSectionProps } from './landing-page-line-section.type';
import css from './landing-page-line-section.module.css';

export default function LandingPageLineSection(props: LandingPageLineSectionProps) {
  const { hideTop, hideBottom, children } = props;
  return (
    <div className={css.Section}>
      {!hideTop && <hr data-testid="landing-page-top-line" className={css.Line} />}
      {children}
      {!hideBottom && <hr data-testid="landing-page-top-line" className={css.Line} />}
    </div>
  );
}

LandingPageLineSection.displayName = 'LandingPageLineSection';
