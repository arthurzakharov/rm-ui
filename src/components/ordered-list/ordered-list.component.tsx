import type { OrderedListProps } from './ordered-list.type';
import css from './ordered-list.module.css';

export default function OrderedList(props: OrderedListProps) {
  const { head, list } = props;

  return (
    <div className={css.OrderedList}>
      <h6 data-testid="ordered-list-head" className={css.OrderedListHead}>
        {head}
      </h6>
      <ol className={css.OrderedListItems}>
        {list.map((listItem, i) => (
          <li key={i} data-testid="ordered-list-item" className={css.OrderedListItem}>
            <span className={css.OrderedListBullet}>{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: listItem }} />
          </li>
        ))}
      </ol>
    </div>
  );
}

OrderedList.displayName = 'OrderedList';
