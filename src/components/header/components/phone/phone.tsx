import clsx from 'clsx';
import { Phone } from 'lucide-react';
import { useHeaderContext } from '../../header.context';
import css from './phone.module.css';

export default function Contact() {
  const {
    config: { info, openingTimes, phone },
  } = useHeaderContext();

  if (!phone) return null;

  return (
    <div
      className={clsx(css.Phone, {
        [css.PhoneAlone]: !!(info || openingTimes),
      })}
    >
      <a href={`tel:${phone.replace(/[^0-9]/g, '')}`}>
        <Phone className={css.Icon} />
        <span className={css.Number}>{phone}</span>
      </a>
    </div>
  );
}

Contact.displayName = 'HeaderContact';
