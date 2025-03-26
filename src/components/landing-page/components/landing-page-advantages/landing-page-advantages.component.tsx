import type { LandingPageAdvantagesProps } from './landing-page-advantages.type';
import { Check } from 'lucide-react';
import LandingPageButton from '../landing-page-button/landing-page-button.component';
import { cn } from '../../../../utils/functions';
import css from './landing-page-advantages.module.css';

export default function LandingPageAdvantages(props: LandingPageAdvantagesProps) {
  const {
    head,
    list,
    lines = [true, true],
    imageSrc = '',
    imageAlt = '',
    button = '',
    onButtonClick = () => {},
  } = props;

  const withImage = !!props.imageSrc && !!props.imageAlt;
  const withButton = !!props.button && !!props.onButtonClick;

  return (
    <div
      data-testid="landing-page-advantages"
      className={cn(css.AdvantageList, {
        [css.AdvantageListWithImage]: withImage,
      })}
    >
      {!withImage && lines[0] && (
        <hr data-testid="landing-page-advantages-top-line" className={css.AdvantageListLine} />
      )}
      <h6 data-testid="landing-page-advantages-head" className={css.AdvantageListHead}>
        {head}
      </h6>
      <ul className={css.AdvantageListItems}>
        {list.map((listItem, i) => (
          <li key={i} data-testid="landing-page-advantages-list-item" className={css.AdvantageListItem}>
            <Check className={css.AdvantageListIcon} />
            {listItem}
          </li>
        ))}
        {withImage && withButton && (
          <li data-testid="landing-page-advantages-button" className={css.AdvantageListButton}>
            <LandingPageButton text={button} onClick={onButtonClick} />
          </li>
        )}
      </ul>
      {withImage && (
        <img
          data-testid="landing-page-advantages-image"
          src={imageSrc}
          alt={imageAlt}
          className={css.AdvantageListImage}
        />
      )}
      {!withImage && lines[1] && (
        <hr data-testid="landing-page-advantages-bottom-line" className={css.AdvantageListLine} />
      )}
    </div>
  );
}

LandingPageAdvantages.displayName = 'LandingPageAdvantages';
