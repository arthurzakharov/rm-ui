import type { LandingPageProps } from '../landing-page.types';
import { useEffect, useState } from 'react';
import defaultProps from '../utils/default-props';
import { merge } from '../../../utils/functions';

export default function useGetDataFromConfig(props: LandingPageProps, width: number) {
  const { answers, config, loaded, submitted, tuvSrc, tlsSrc, overrides } = props;
  const [ctaButton, setCtaButton] = useState<string>('');

  const show = config?.certificateLogos || ['tuv', 'tls'];
  const enableStickyMobileHead = config?.header?.enableStickyMobileHead || false;
  const logos = {
    show,
    tuvSrc,
    tlsSrc,
  };
  const calculatedProps = {
    advantageList: { button: ctaButton },
    advantageListNoButton: { button: ctaButton },
    button: { text: ctaButton },
    contact: { submitted },
    howTo: { logos },
    logos,
  };

  useEffect(() => {
    const showPriceModalInsuranceCondition = config?.showPriceModalInsuranceCondition || {};
    if (showPriceModalInsuranceCondition) {
      const legalInsurance = answers['legal_insurance'] ? answers['legal_insurance'].value : '';
      const legalInsuranceValues = Object.keys(showPriceModalInsuranceCondition);
      setCtaButton(legalInsuranceValues.includes(legalInsurance) ? 'Preis ansehen' : 'Vollmacht ansehen');
    }
  }, [answers, config]);

  return {
    isSidebarSticky: loaded && enableStickyMobileHead && width < 768,
    blocksProp: merge(defaultProps, calculatedProps, overrides),
  };
}
