import type { SidebarProps } from './sidebar.type';
import { BLOCK } from '../block';
import LandingPageGroup from '../group';
import css from './sidebar.module.css';

export default function Sidebar(props: SidebarProps) {
  const { groups = [] } = props;

  const main = groups.filter(({ type }) => type !== BLOCK.CONTACT_US);
  const contact = groups.filter(({ type }) => type === BLOCK.CONTACT_US);

  return (
    <aside className={css.Sidebar}>
      <div className={css.SidebarMain}>
        {main.map((group) => (
          <LandingPageGroup key={group.id} group={group} groupClassName={css.SidebarMainItem} />
        ))}
      </div>
      {contact.map((group) => (
        <LandingPageGroup key={group.id} group={group} />
      ))}
    </aside>
  );
}
