import type { LandingPageSidebarProps } from './landing-page-sidebar.types';
import LandingPageButton from '../landing-page-button/landing-page-button.component';
import LandingPageContact from '../landing-page-contact/landing-page-contact.component';
import OrderedList from '../../../ordered-list/ordered-list.component';
import Logos from '../../../logos/logos.component';
import css from './landing-page-sidebar.module.css';

export default function LandingPageSidebar(props: LandingPageSidebarProps) {
  const { items } = props;

  const nonContactItems = items.filter((item) => item.type !== '###ContactUs###');
  const contactItems = items.filter((item) => item.type === '###ContactUs###');

  return (
    <aside className={css.LandingPageSidebar}>
      <div className={css.LandingPageSidebarBox}>
        {nonContactItems.map((item, i) => (
          <div key={i} className={css.LandingPageSidebarItem}>
            {item.type === '###OrderedList###' && <OrderedList head={item.head} list={item.list} />}
            {item.type === '###Button###' && <LandingPageButton fullWidth text={item.text} onClick={item.onClick} />}
            {item.type === '###Logos###' && <Logos show={item.show} tlsSrc={item.tlsSrc} tuvSrc={item.tuvSrc} />}
          </div>
        ))}
      </div>
      {contactItems.map((item, i) => (
        <LandingPageContact
          key={i}
          sidebar
          submitted={item.submitted}
          onClick={item.onClick}
          head={item.head}
          main={item.main}
          button={item.button}
          success={item.success}
        />
      ))}
    </aside>
  );
}

LandingPageSidebar.displayName = 'LandingPageSidebar';
