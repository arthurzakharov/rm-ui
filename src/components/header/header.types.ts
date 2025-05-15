import type { Header } from '../../utils/types';

export type HeaderProps = {
  config: Header;
  isLongReadShown: boolean;
  selectedKeyword: string;
  logoSrc: string;
  logoMobileSrc: string;
  onClick: () => void;
};
