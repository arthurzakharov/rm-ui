import type { LoaderProps } from './loader.type';
import clsx from 'clsx';
import css from './loader.module.css';

export default function Loader(props: LoaderProps) {
  const {
    text = '<strong>Vielen Dank.</strong> Bitte haben Sie einen Augenblick Geduld, wir analysieren gerade Ihre Angaben...',
    className = '',
  } = props;

  return (
    <div className={clsx(css.Loader, className)}>
      <div className={css.Content}>
        <div className={css.Image}>
          <div className={css.Line} />
          <div className={css.Point} />
        </div>
        <div data-testid="loader" className={css.Text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

Loader.displayName = 'LandingPageLoader';
