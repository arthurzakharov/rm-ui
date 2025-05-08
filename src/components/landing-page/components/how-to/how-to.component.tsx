import type { HowToProps } from './how-to.type';
import Logos from '../../../logos';
import OrderedList from '../ordered-list';
import css from './how-to.module.css';

export default function HowTo(props: HowToProps) {
  const { orderedList, logos } = props;

  return (
    <div className={css.HowTo}>
      <OrderedList {...orderedList} />
      <Logos {...logos} />
    </div>
  );
}
