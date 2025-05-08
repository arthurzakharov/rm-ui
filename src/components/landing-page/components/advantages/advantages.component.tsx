import type { AdvantagesProps } from './advantages.type';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import CtaButton from '../cta-button';
import tabletsDlpSrc from './assets/tablets-dlp.jpg';
import css from './advantages.module.css';

export default function Advantages(props: AdvantagesProps) {
  const {
    title = '',
    list = [],
    button = 'Vollmacht ansehen',
    withImage = false,
    withoutButton = false,
    onButtonClick = () => {},
  } = props;

  return (
    <div
      data-testid="advantages"
      className={clsx(css.Advantages, {
        [css.AdvantagesWithImage]: withImage,
      })}
    >
      <h6 data-testid="advantages-head" className={css.Title}>
        {title}
      </h6>
      <ul className={css.List}>
        {list.map((listItem, i) => (
          <li key={i} data-testid="advantages-list-item" className={css.ListItem}>
            <Check className={css.CheckIcon} />
            {listItem}
          </li>
        ))}
        {withImage && !withoutButton && (
          <li data-testid="advantages-button" className={css.Button}>
            <CtaButton text={button} onClick={onButtonClick} />
          </li>
        )}
      </ul>
      {withImage && <img data-testid="advantages-image" src={tabletsDlpSrc} alt="tablets-dlp" className={css.Image} />}
    </div>
  );
}

Advantages.displayName = 'LandingPageAdvantages';
