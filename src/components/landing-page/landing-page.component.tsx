import type { LandingPageProps } from './landing-page.types';
import Loader from './components/loader';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Main from './components/main';
import useViewportSize from '../../hooks/useViewportSize';
import Parser from './utils/parser';
import css from './landing-page.module.css';

export default function LandingPage(props: LandingPageProps) {
  const { loaded, prio, data, answers } = props;
  const { width } = useViewportSize();

  const {
    page: { successBox, question, sidebar, footer },
  } = new Parser(prio, data, answers, width);

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
