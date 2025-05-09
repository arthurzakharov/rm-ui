import type { LandingPageProps } from './landing-page.types';
import { useEffect } from 'react';
import Loader from './components/loader';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Main from './components/main';
import useViewportSize from '../../hooks/useViewportSize';
import useStickySuccessBox from './hooks/useStickySuccessBox';
import Parser from './utils/parser';
import { useStore } from './store/zustand';
import css from './landing-page.module.css';

export default function LandingPage(props: LandingPageProps) {
  const { loaded, prio, data, answers, appHeaderRef, enableStickyMobileHead } = props;
  const { width } = useViewportSize();
  const setAppHeaderElement = useStore((s) => s.setAppHeaderElement);

  useStickySuccessBox(loaded && enableStickyMobileHead && width < 768);

  const {
    page: { successBox, question, sidebar, footer },
  } = new Parser(prio, data, answers, width);

  useEffect(() => {
    if (appHeaderRef && appHeaderRef.current) setAppHeaderElement(appHeaderRef.current);
  }, [appHeaderRef, setAppHeaderElement]);

  return (
    <div className={css.Landing}>
      {loaded ? (
        <>
          <div className={css.Container}>
            <Main successBox={successBox} groups={question} />
            <Sidebar groups={sidebar} />
          </div>
          <Footer groups={footer} />
        </>
      ) : (
        <Loader className={css.Loader} />
      )}
    </div>
  );
}

LandingPage.displayName = 'LandingPage';
