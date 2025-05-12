import type { Answers, ShowPriceModalInsuranceCondition } from '../landing-page.types';
import { useEffect, useState } from 'react';

export default function useCtaButtonText(
  answers: Answers,
  showPriceModalInsuranceCondition: ShowPriceModalInsuranceCondition,
) {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (showPriceModalInsuranceCondition) {
      const legalInsurance = answers['legal_insurance'] ? answers['legal_insurance'].value : '';
      const legalInsuranceValues = Object.keys(showPriceModalInsuranceCondition);
      setText(legalInsuranceValues.includes(legalInsurance) ? 'Preis ansehen' : 'Vollmacht ansehen');
    }
  }, [answers, showPriceModalInsuranceCondition]);

  return text;
}
