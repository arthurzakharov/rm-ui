import type { LandingPageHowToProps } from './landing-page-how-to.type';
import Logos from '../../../logos/logos.component';
import OrderedList from '../../../ordered-list/ordered-list.component';
import css from './landing-page-how-to.module.css';

export default function LandingPageHowTo(props: LandingPageHowToProps) {
  const { orderedList, logos } = props;

  return (
    <div className={css.HowTo}>
      <OrderedList {...orderedList} />
      <Logos {...logos} />
    </div>
  );
}

LandingPageHowTo.displayName = 'LandingPageHowTo';
