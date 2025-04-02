import type { LogosProps } from './logos.type';
import { cn } from '../../utils/functions';
import css from './logos.module.css';

export default function Logos(props: LogosProps) {
  const { show, tlsSrc = '', tuvSrc = '', className = '' } = props;

  return (
    <div className={cn(css.Logos, className)}>
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

Logos.displaayName = 'Logos';
