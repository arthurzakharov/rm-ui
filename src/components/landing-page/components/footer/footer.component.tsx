import type { FooterProps } from './footer.type';
import Group from '../group';
import { BLOCK } from '../block';
import css from './footer.module.css';

export default function Footer(props: FooterProps) {
  const { groups = [] } = props;

  return (
    <footer className={css.Footer}>
      {groups.map((group) => (
        <Group
          key={group.id}
          group={group}
          groupClassName={css.FooterItem}
          blocksClassName={group.type === BLOCK.CONTACT_US ? css.FooterContact : undefined}
        />
      ))}
    </footer>
  );
}

Footer.displayName = 'LandingPageFooter';
