import type { PropsWithChildren } from 'react';
import { useRef } from 'react';
import css from './content.module.css';

export default function Content(props: PropsWithChildren) {
  const ref = useRef(null);

  return (
    <div ref={ref} className={css.Content}>
      {props.children}
    </div>
  );
}

Content.displayName = 'HeaderContent';
