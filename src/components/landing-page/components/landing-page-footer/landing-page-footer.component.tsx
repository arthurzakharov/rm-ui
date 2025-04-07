import type { LandingPageFooterProps } from './landing-page-footer.types';
import LandingPageAdvantages from '../landing-page-advantages/landing-page-advantages.component';
import LandingPageContact from '../landing-page-contact/landing-page-contact.component';
import css from './landing-page-footer.module.css';
import { Fragment } from 'react';

export default function LandingPageFooter(props: LandingPageFooterProps) {
  const { list } = props;

  return (
    <div className={css.Footer}>
      {list.map((question) => (
        <div key={question.id} data-testid={question.type} className={css.Item}>
          {question.body.map(({ type, props }, idx) => (
            <Fragment key={idx}>
              {type === '###AdvantageList###' && <LandingPageAdvantages {...props} />}
              {type === '###AdvantageListNoButton###' && <LandingPageAdvantages {...props} />}
              {type === '###ContactUs###' && <LandingPageContact {...props} className={css.Contact} />}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

LandingPageFooter.displayName = 'LandingPageFooter';
