import type { HeaderProps } from './header.types';
import { createContext, useContext } from 'react';

export const HeaderContext = createContext<HeaderProps>({
  children: null,
  config: {
    showAlert: false,
    alertMessage: '',
    alertCss: {
      background: '',
      color: '',
    },
    info: '',
    phone: '',
    openingTimes: '',
    enableStickyMobileHead: false,
  },
  isLongReadShown: false,
  selectedKeyword: 'no-keyword',
  logoSrc: '',
  logoMobileSrc: '',
  headerRef: null,
  onClick: () => {},
});

HeaderContext.displayName = 'HeaderContext';

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) throw new Error('Must be used within HeaderContext');
  return context;
};
