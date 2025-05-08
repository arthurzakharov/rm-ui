import type { MouseEvent } from 'react';
import type { ContactProps } from './contact.type';
import { CheckCircle } from 'lucide-react';
import clsx from 'clsx';
import css from './contact.module.css';

export default function Contact(props: ContactProps) {
  const {
    submitted = false,
    sidebar = false,
    title = 'Sie haben noch Fragen?',
    main = 'Vereinbaren Sie jetzt kostenlos und unverbindliches Erstgepräch',
    button = 'Kontaktieren Sie uns',
    success = 'Vielen Dank, wir haben Ihre Anfrage erhalten.',
    onClick = () => {},
  } = props;

  return (
    <div data-testid="contact" className={css.Contact}>
      {submitted ? (
        <div data-testid="contact-success" className={css.LandingPageContactSuccess}>
          <CheckCircle className={css.LandingPageContactSuccessIcon} />
          <p className={css.LandingPageContactSuccessText}>{success}</p>
        </div>
      ) : (
        <div
          data-testid="contact-wait"
          className={clsx(css.LandingPageContactWait, { [css.LandingPageContactWaitSidebar]: sidebar })}
        >
          <h6 className={css.LandingPageContactHead}>{title}</h6>
          <p className={css.LandingPageContactMain}>{main}</p>
          <button
            data-testid="contact-button"
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
}

Contact.displayName = 'LandingPageContact';
