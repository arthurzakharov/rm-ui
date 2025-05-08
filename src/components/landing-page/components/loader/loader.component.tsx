import type { LoaderProps } from './loader.type';
import clsx from 'clsx';
import css from './loader.module.css';

export default function Loader(props: LoaderProps) {
  const {
    text = '<strong>Vielen Dank.</strong> Bitte haben Sie einen Augenblick Geduld, wir analysieren gerade Ihre Angaben...',
    className = '',
  } = props;

  return (
    <div className={clsx(css.PageLoader, className)}>
      <div className={css.PageLoaderContent}>
        <div className={css.PageLoaderImage}>
          <div className={css.PageLoaderLine} />
          <div className={css.PageLoaderImagePoint} />
        </div>
        <div
          data-testid="page-loader"
          className={css.LandingPageLoaderText}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
}

Loader.displayName = 'LandingPageLoader';
