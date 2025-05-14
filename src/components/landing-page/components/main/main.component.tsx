import type { MainProps } from './main.type';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import SuccessBox from '../success-box';
import Group from '../group';
import { useStore } from '../../store/zustand';
import css from './main.module.css';

export default function Main(props: MainProps) {
  const { successBox, groups = [] } = props;
  const ref = useRef<HTMLDivElement>(null);
  const setMainElement = useStore((s) => s.setMainElement);

  useEffect(() => {
    if (ref.current) setMainElement(ref.current);
  }, [ref, setMainElement]);

  return (
    <main ref={ref} className={css.Main}>
      <SuccessBox {...successBox} />
      <div className={css.Groups}>
        {groups.map((group) => (
          <Group
            key={group.id}
            group={group}
            groupClassName={clsx(css.Group, {
              [css.GroupTopLine]: group.showTopLine,
              [css.GroupBottomLine]: group.showBottomLine,
            })}
            titleClassName={css.Title}
            blocksClassName={css.Blocks}
            blockClassName={css.Block}
          />
        ))}
      </div>
    </main>
  );
}

Main.displayName = 'LandingPageMain';
