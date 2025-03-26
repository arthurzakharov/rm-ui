import type { FC, MouseEvent } from 'react';
import type { LandingPageContactProps } from './landing-page-contact.type';
import { CheckCircle } from 'lucide-react';
import { cn } from '../../../../utils/functions';
import css from './landing-page-contact.module.css';

const LandingPageContact: FC<LandingPageContactProps> = ({
  submitted,
  onClick,
  head = 'Sie haben noch Fragen?',
  main = 'Vereinbaren Sie jetzt kostenlos und unverbindliches Erstgepräch',
  button = 'Kontaktieren Sie uns',
  success = 'Vielen Dank, wir haben Ihre Anfrage erhalten.',
  className = '',
  sidebar = false,
}) => (
  <div data-testid="landing-page-contact" className={cn(css.LandingPageContact, className)}>
    {submitted ? (
      <div data-testid="landing-page-contact-success" className={css.LandingPageContactSuccess}>
        <CheckCircle className={css.LandingPageContactSuccessIcon} />
        <p className={css.LandingPageContactSuccessText}>{success}</p>
      </div>
    ) : (
      <div
        data-testid="landing-page-contact-wait"
        className={cn(css.LandingPageContactWait, { [css.LandingPageContactWaitSidebar]: sidebar })}
      >
        <h6 className={css.LandingPageContactHead}>{head}</h6>
        <p className={css.LandingPageContactMain}>{main}</p>
        <button
          data-testid="landing-page-contact-button"
          type="button"
          className={css.LandingPageContactButton}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.currentTarget.blur();
            onClick();
          }}
        >
          {button}
        </button>
      </div>
    )}
  </div>
);

LandingPageContact.displayName = 'LandingPageContact';

export default LandingPageContact;
