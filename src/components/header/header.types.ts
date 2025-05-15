import type { PropsWithChildren, RefObject } from 'react';
import type { Header } from '../../utils/types';

export type HeaderProps = PropsWithChildren<{
  config: Header;
  isLongReadShown: boolean;
  selectedKeyword: string;
  logoSrc: string;
  logoMobileSrc: string;
  headerRef: RefObject<HTMLDivElement> | null;
  onClick: () => void;
}>;
