import type { LandingPageSidebarProps } from './landing-page-sidebar.types';
import { Fragment } from 'react';
import LandingPageButton from '../landing-page-button/landing-page-button.component';
import LandingPageContact from '../landing-page-contact/landing-page-contact.component';
import OrderedList from '../../../ordered-list/ordered-list.component';
import Logos from '../../../logos/logos.component';
import { cn } from '../../../../utils/functions';
import css from './landing-page-sidebar.module.css';

export default function LandingPageSidebar(props: LandingPageSidebarProps) {
  const { list, className = '' } = props;

  const main = list.filter((question) => question.type !== '###ContactUs###');
  const footer = list.filter((question) => question.type === '###ContactUs###');

  return (
    <aside className={cn(css.Sidebar, className)}>
      <div className={css.Content}>
        {main.map((question) => (
          <div key={question.id} className={css.Item}>
            {question.body.map(({ type, props }, idx) => (
              <Fragment key={idx}>
                {type === '###OrderedList###' && <OrderedList {...props} />}
                {type === '###Button###' && <LandingPageButton {...props} fullWidth />}
                {type === '###Logos###' && <Logos {...props} />}
              </Fragment>
            ))}
          </div>
        ))}
      </div>
      {footer.map((question) => (
        <Fragment key={question.id}>
          {question.body.map(({ type, props }, idx) => (
            <Fragment key={idx}>{type === '###ContactUs###' && <LandingPageContact {...props} sidebar />}</Fragment>
          ))}
        </Fragment>
      ))}
    </aside>
  );
}

LandingPageSidebar.displayName = 'LandingPageSidebar';
