import type { HeaderProps } from './header.types';
import { HeaderContext } from './header.context';
import Alert from './components/alert';
import Content from './components/content';
import Hints from './components/hints';
import Logo from './components/logo';
import Panel from './components/panel';
import Phone from './components/phone';
import css from './header.module.css';

export default function Header(props: HeaderProps) {
  return (
    <HeaderContext.Provider value={props}>
      <div className={css.Header}>
        <Alert />
        <Content>
          <Logo />
          <Panel>
            <>
              <Phone />
              <Hints />
            </>
            {props.children}
          </Panel>
        </Content>
      </div>
    </HeaderContext.Provider>
  );
}

Header.displayName = 'Header';
