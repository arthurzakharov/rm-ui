import type { LandingPageFooterProps, LandingPageItem } from './landing-page-footer.types';
import LandingPageAdvantages from '../landing-page-advantages/landing-page-advantages.component';
import LandingPageContact from '../landing-page-contact/landing-page-contact.component';
import css from './landing-page-footer.module.css';

export default function LandingPageFooter(props: LandingPageFooterProps) {
  const { items } = props;

  return (
    <ul className={css.LandingPageFooter}>
      {items.map((item: LandingPageItem) => (
        <li key={item.id} data-testid={item.id} className={css.LandingPageFooterItem}>
          {item.type === '###AdvantageList###' && (
            <LandingPageAdvantages
              head={item.head}
              list={item.list}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              button={item.button}
              onButtonClick={item.onClick}
            />
          )}
          {item.type === '###AdvantageListNoButton###' && (
            <LandingPageAdvantages
              head={item.head}
              list={item.list}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            />
          )}
          {item.type === '###ContactUs###' && (
            <LandingPageContact
              className={css.LandingPageFooterContactUs}
              submitted={item.submitted}
              onClick={item.onClick}
              head={item.head}
              main={item.main}
              button={item.button}
              success={item.success}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

LandingPageFooter.displayName = 'LandingPageFooter';
