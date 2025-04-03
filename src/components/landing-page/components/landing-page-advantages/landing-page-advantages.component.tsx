import type { LandingPageAdvantagesProps } from './landing-page-advantages.type';
import { Check } from 'lucide-react';
import LandingPageButton from '../landing-page-button/landing-page-button.component';
import { cn } from '../../../../utils/functions';
import css from './landing-page-advantages.module.css';

export default function LandingPageAdvantages(props: LandingPageAdvantagesProps) {
  const { title, list, imageSrc = '', imageAlt = '', button = '', className = '', onButtonClick = () => {} } = props;

  const withImage = !!props.imageSrc && !!props.imageAlt;
  const withButton = !!props.button && !!props.onButtonClick;

  return (
    <div
      data-testid="landing-page-advantages"
      className={cn(css.Advantages, className, {
        [css.AdvantagesWithImage]: withImage,
      })}
    >
      <h6 data-testid="landing-page-advantages-head" className={css.Title}>
        {title}
      </h6>
      <ul className={css.List}>
        {list.map((listItem, i) => (
          <li key={i} data-testid="landing-page-advantages-list-item" className={css.ListItem}>
            <Check className={css.CheckIcon} />
            {listItem}
          </li>
        ))}
        {withImage && withButton && (
          <li data-testid="landing-page-advantages-button" className={css.Button}>
            <LandingPageButton text={button} onClick={onButtonClick} />
          </li>
        )}
      </ul>
      {withImage && (
        <img data-testid="landing-page-advantages-image" src={imageSrc} alt={imageAlt} className={css.Image} />
      )}
    </div>
  );
}

LandingPageAdvantages.displayName = 'LandingPageAdvantages';
