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

  const hasTopLine = (i: number) => !groups[i].hideTop && i >= 1;

  const hasBottomLine = (i: number) => i >= 1 && i < groups.length - 1 && !groups[i].hideBottom;

  const prevHasNoBottomLine = (i: number) => i - 1 >= 0 && !hasBottomLine(i - 1);

  useEffect(() => {
    if (ref.current) setMainElement(ref.current);
  }, [ref, setMainElement]);

  return (
    <main ref={ref} className={css.Main}>
      <SuccessBox {...successBox} />
      <div className={css.Groups}>
        {groups.map((group, i) => (
          <Group
            key={group.id}
            group={group}
            groupClassName={clsx(css.Group, {
              [css.GroupTopLine]: hasTopLine(i) && prevHasNoBottomLine(i),
              [css.GroupBottomLine]: hasBottomLine(i),
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
