import type { LandingPageProps } from './landing-page.types';
import Loader from './components/loader';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Main from './components/main';
import useViewportSize from '../../hooks/useViewportSize';
import useCtaButtonText from './hooks/useCtaButtonText';
import useGetDataFromConfig from './hooks/useGetDataFromConfig';
import useStickySuccessBox from './hooks/useStickySuccessBox';
import Parser from './utils/parser';
import { Props } from './utils/types/prio';
import css from './landing-page.module.css';

export default function LandingPage(props: LandingPageProps) {
  const { config, loaded, prio, data, answers, appHeaderRef, isContactFormSubmitted, logos, overrideBlockProps } =
    props;
  const { width } = useViewportSize(100);
  const { showPriceModalInsuranceCondition, logoShow, enableStickyMobileHead } = useGetDataFromConfig(config);
  const ctaButton = useCtaButtonText(answers, showPriceModalInsuranceCondition);

  const calculateBlockProps: Props = {
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
    howTo: {
      logos: {
        show: logoShow,
        tuvSrc: logos.tuvSrc,
        tlsSrc: logos.tlsSrc,
      },
    },
    logos: {
      show: logoShow,
      tuvSrc: logos.tuvSrc,
      tlsSrc: logos.tlsSrc,
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
