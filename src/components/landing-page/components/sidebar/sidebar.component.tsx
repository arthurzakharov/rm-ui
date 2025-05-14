import type { SidebarProps } from './sidebar.type';
import { BLOCK } from '../block';
import Group from '../group';
import css from './sidebar.module.css';

export default function Sidebar(props: SidebarProps) {
  const { groups = [] } = props;

  if (!groups.length) return null;

  const main = groups.filter(({ type }) => type !== BLOCK.CONTACT_US);
  const contact = groups.filter(({ type }) => type === BLOCK.CONTACT_US);

  return (
    <aside className={css.Sidebar}>
      <div className={css.SidebarMain}>
        {main.map((group) => (
          <Group key={group.id} group={group} groupClassName={css.SidebarMainItem} />
        ))}
      </div>
      {contact.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </aside>
  );
}

Sidebar.displayName = 'LandingPageSidebar';
