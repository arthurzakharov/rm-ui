import type { OrderedListProps } from './ordered-list.type';
import { cn } from '../../utils/functions';
import css from './ordered-list.module.css';

export default function OrderedList(props: OrderedListProps) {
  const { title, list, className = '' } = props;

  return (
    <div className={cn(css.OrderedList, className)}>
      <h6 data-testid="ordered-list-title" className={css.Title}>
        {title}
      </h6>
      <ol className={css.List}>
        {list.map((listItem, i) => (
          <li key={i} data-testid="ordered-list-item" className={css.ListItem}>
            <span className={css.Bullet}>{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: listItem }} />
          </li>
        ))}
      </ol>
    </div>
  );
}

OrderedList.displayName = 'OrderedList';
