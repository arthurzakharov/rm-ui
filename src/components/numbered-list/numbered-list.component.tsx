import type { PropsWithChildren } from 'react';
import { Children } from 'react';
import css from './numbered-list.module.css';

export default function NumberedList(props: PropsWithChildren) {
  const { children } = props;
  return (
    <ul className={css.NumberedList}>
      {Children.map(children, (child, idx) => (
        <li data-testid="numbered-list-item" className={css.Item}>
          <div className={css.Circle}>{idx + 1}</div>
          <div className={css.Content}>
            {typeof child === 'string' ? (
              <div
                data-testid="numbered-list-string"
                className={css.Text}
                dangerouslySetInnerHTML={{ __html: child }}
              />
            ) : (
              <div data-testid="numbered-list-component" className={css.Text}>
                {child}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

NumberedList.displayName = 'NumberedList';
