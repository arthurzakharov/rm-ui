import type { LandingPageHowToProps } from './landing-page-how-to.type';
import Logos from '../../../logos/logos.component';
import OrderedList from '../../../ordered-list/ordered-list.component';
import css from './landing-page-how-to.module.css';

export default function LandingPageHowTo(props: LandingPageHowToProps) {
  const { orderedList, logos, hideTopSeparator = false, hideBottomSeparator = false } = props;

  return (
    <div className={css.HowTo}>
      {!hideTopSeparator && <hr data-testid="landing-page-how-to-top-line" className={css.Line} />}
      <OrderedList {...orderedList} className={css.OrderedList} />
      <Logos {...logos} className={css.Logos} />
      {!hideBottomSeparator && <hr data-testid="landing-page-how-to-bottom-line" className={css.Line} />}
    </div>
  );
}

LandingPageHowTo.displayName = 'LandingPageHowTo';
