import type { LandingPageLoaderProps } from './landing-page-loader.type';
import css from './landing-page-loader.module.css';

export default function LandingPageLoader(props: LandingPageLoaderProps) {
  const {
    text = '<strong>Vielen Dank.</strong> Bitte haben Sie einen Augenblick Geduld, wir analysieren gerade Ihre Angaben...',
  } = props;

  return (
    <div className={css.LandingPageLoader}>
      <div className={css.LandingPageLoaderContent}>
        <div className={css.LandingPageLoaderImage}>
          <div className={css.LandingPageLoaderLine} />
          <div className={css.LandingPageLoaderImagePoint} />
        </div>
        <div
          data-testid="landing-page-loader"
          className={css.LandingPageLoaderText}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
}

LandingPageLoader.displayName = 'LandingPageLoader';
