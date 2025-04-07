import type { LandingPageProps } from './landing-page.types';
import { Fragment } from 'react';
import LandingPageSuccessBox from './components/landing-page-success-box/landing-page-success-box.component';
import LandingPageQuestions from './components/landing-page-questions/landing-page-questions.component';
import LandingPageSidebar from './components/landing-page-sidebar/landing-page-sidebar.component';
import LandingPageFooter from './components/landing-page-footer/landing-page-footer.component';
import LandingPageLoader from './components/landing-page-loader/landing-page-loader.component';
import css from './landing-page.module.css';

export default function LandingPage(props: LandingPageProps) {
  const { loaded, refs, successBox, questions, sidebar, footer } = props;

  return (
    <div className={css.Landing}>
      {loaded ? (
        <Fragment>
          <div ref={refs.container} className={css.Container}>
            <main className={css.Main}>
              <LandingPageSuccessBox {...successBox} refs={{ head: refs.successBox }} className={css.SuccessBox} />
              <LandingPageQuestions list={questions} className={css.Questions} />
            </main>
            <LandingPageSidebar list={sidebar} className={css.Sidebar} />
          </div>
          <LandingPageFooter list={footer} />
        </Fragment>
      ) : (
        <LandingPageLoader className={css.Loader} />
      )}
    </div>
  );
}

LandingPage.displayName = 'LandingPage';
