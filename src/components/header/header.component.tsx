import type { HeaderProps } from './header.types';
import { useTranslation } from 'react-i18next';
import { HeaderContext } from './header.context';
import Alert from './components/alert';
import Content from './components/content';
import Hints from './components/hints';
import Logo from './components/logo';
import Panel from './components/panel';
import Phone from './components/phone';
import css from './header.module.css';

export default function Header(props: HeaderProps) {
  const { t } = useTranslation();

  return (
    <HeaderContext.Provider
      value={{
        ...props,
        config: {
          ...props.config,
          alertMessage: t(props.config.alertMessage),
          info: t(props.config.info),
          openingTimes: t(props.config.openingTimes),
        },
      }}
    >
      <div className={css.Header}>
        <Alert />
        <Content>
          <Logo />
          <Panel>
            <>
              <Phone />
              <Hints />
            </>
          </Panel>
        </Content>
      </div>
    </HeaderContext.Provider>
  );
}

Header.displayName = 'Header';

/**
 * --logo-height --> --header-logo-height
 * --text-accent-primary --> --header-text-primary
 * --accent-primary --> --header-accent-primary
 * --header-alert-background --> --header-alert-background
 * --header-vertical-padding --> --header-vertical-padding
 * --header-horizontal-padding --> --header-horizontal-padding
 */
