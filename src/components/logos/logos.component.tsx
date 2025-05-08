import type { LogosProps } from './logos.type';
import clsx from 'clsx';
import tlsFallbackSrc from './assets/tls.png';
import tuvFallbackSrc from './assets/tuv.jpeg';
import css from './logos.module.css';

export default function Logos(props: LogosProps) {
  const { show = ['tuv', 'tls'], tlsSrc = tlsFallbackSrc, tuvSrc = tuvFallbackSrc, className = '' } = props;

  return (
    <div className={clsx(css.Logos, className)}>
      {show.map((logo) => {
        switch (logo) {
          case 'tuv':
            return <img key={logo} data-testid="tuv" alt="tuv-icon" src={tuvSrc} className={css.LogosTuv} />;
          case 'tls':
            return (
              <div key={logo} data-testid="tls" className={css.LogosTls}>
                <img alt="tls-icon" src={tlsSrc} className={css.LogosIcon} />
                <span className={css.LogosText}>Höchste</span>
                <span className={css.LogosText}>Datensicherheit.</span>
              </div>
            );
        }
      })}
    </div>
  );
}

Logos.displayName = 'Logos';
