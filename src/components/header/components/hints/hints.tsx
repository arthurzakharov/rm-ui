import Check from '../check';
import { useHeaderContext } from '../../header.context';
import css from './hints.module.css';

export default function Hints() {
  const {
    config: { info, openingTimes },
  } = useHeaderContext();

  if (!info && !openingTimes) return null;

  return (
    <div className={css.Hints}>
      {info ? <Check text={info} /> : null}
      {openingTimes ? <Check text={openingTimes} /> : null}
    </div>
  );
}

Hints.displayName = 'HeaderHints';
