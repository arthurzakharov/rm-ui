import type { PropsWithChildren } from 'react';
import { Children } from 'react';
import css from './panel.module.css';

export default function Panel(props: PropsWithChildren) {
  return (
    <div className={css.Panel}>{Children.map(props.children, (child) => (child ? <div>{child}</div> : null))}</div>
  );
}

Panel.displayName = 'HeaderPanel';
