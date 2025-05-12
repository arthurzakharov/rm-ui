import type { LandingPageProps } from './landing-page.types';
import Loader from './components/loader';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Main from './components/main';
import useViewportSize from '../../hooks/useViewportSize';
import useStickySuccessBox from './hooks/useStickySuccessBox';
import useCtaButtonText from './hooks/useCtaButtonText';
import Parser from './utils/parser';
import css from './landing-page.module.css';

export default function LandingPage(props: LandingPageProps) {
  const {
    loaded,
    prio,
    data,
    answers,
    appHeaderRef,
    enableStickyMobileHead,
    isContactFormSubmitted,
    showPriceModalInsuranceCondition,
    overrideBlockProps,
    widthMeasureDebounce,
  } = props;
  const { width } = useViewportSize(widthMeasureDebounce);
  const ctaButton = useCtaButtonText(answers, showPriceModalInsuranceCondition);

  const calculateBlockProps = {
    advantageList: {
      button: ctaButton,
    },
    advantageListNoButton: {
      button: ctaButton,
    },
    button: {
      text: ctaButton,
    },
    contact: {
      submitted: isContactFormSubmitted,
    },
  };

  const {
    page: { successBox, question, sidebar, footer },
  } = new Parser(prio, data, answers, width, calculateBlockProps, overrideBlockProps);

  useStickySuccessBox(appHeaderRef, loaded && enableStickyMobileHead && width < 768);

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
