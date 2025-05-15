import type { PropsWithChildren } from 'react';
import { useHeaderContext } from '../../header.context';
import css from './content.module.css';

export default function Content(props: PropsWithChildren) {
  const {
    headerRef,
    isLongReadShown,
    config: { enableStickyMobileHead },
  } = useHeaderContext();

  return (
    <div ref={headerRef} data-sticky-header={enableStickyMobileHead && isLongReadShown} className={css.Content}>
      {props.children}
    </div>
  );
}

Content.displayName = 'HeaderContent';
