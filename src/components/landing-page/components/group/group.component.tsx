import type { GroupProps } from './group.type';
import Block from '../block';

export default function Group(props: GroupProps) {
  const {
    group: { title = '', blocks = [] },
    titleClassName,
    groupClassName,
    blocksClassName,
    blockClassName,
  } = props;
  return (
    <div className={groupClassName}>
      {title ? <div className={titleClassName} dangerouslySetInnerHTML={{ __html: title }} /> : null}
      <div className={blocksClassName}>
        {blocks.map((block, i) => (
          <div key={i} className={blockClassName}>
            <Block block={block} />
          </div>
        ))}
      </div>
    </div>
  );
}

Group.displayName = 'LandingPageGroup';
