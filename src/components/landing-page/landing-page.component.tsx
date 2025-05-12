import type { LandingPageProps } from './landing-page.types';
import Loader from './components/loader';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Main from './components/main';
import useViewportSize from '../../hooks/useViewportSize';
import useGetDataFromConfig from './hooks/useGetDataFromConfig';
import useStickySuccessBox from './hooks/useStickySuccessBox';
import Parser from './utils/parser';
import css from './landing-page.module.css';

export default function LandingPage(props: LandingPageProps) {
  const { loaded, prio, data, answers, appHeaderRef } = props;
  const { width } = useViewportSize(100);
  const { blocksProp, isSidebarSticky } = useGetDataFromConfig(props, width);
  useStickySuccessBox(appHeaderRef, isSidebarSticky);

  const { page } = new Parser(prio, data, answers, width, blocksProp);

  return (
    <div className={css.Landing}>
      {loaded ? (
        <>
          <div className={css.Container}>
            <Main successBox={page.successBox} groups={page.question} />
            <Sidebar groups={page.sidebar} />
          </div>
          <Footer groups={page.footer} />
        </>
      ) : (
        <Loader className={css.Loader} />
      )}
    </div>
  );
}

LandingPage.displayName = 'LandingPage';
