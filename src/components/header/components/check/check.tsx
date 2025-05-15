import type { CheckProps } from './check.types';
import { CircleCheck } from 'lucide-react';
import css from './check.module.css';

export default function Check(props: CheckProps) {
  return (
    <div>
      <CircleCheck className={css.Check} />
      <span dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  );
}

Check.displayName = 'HeaderCheck';
