import useViewportSize from '../../../../hooks/useViewportSize';
import { useHeaderContext } from '../../header.context';
import css from './logo.module.css';

export default function Logo() {
  const { selectedKeyword, logoSrc, logoMobileSrc, onClick } = useHeaderContext();
  const { width } = useViewportSize(100);
  const src = width >= 768 ? logoSrc : logoMobileSrc;
  const alt = width >= 768 ? 'LFLogoImage' : 'LFLogoImageMobile';

  if (!src) return null;

  return <img title={selectedKeyword} className={css.Logo} src={src} alt={alt} onClick={() => onClick()} />;
}

Logo.displayName = 'HeaderLogo';
