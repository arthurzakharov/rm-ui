import type { LandingPageAccordionProps } from './landing-page-accordion.type';
import { useRef, useState } from 'react';
import { cn } from '../../../../utils/functions';
import css from './landing-page-accordion.module.css';

export default function LandingPageAccordion(props: LandingPageAccordionProps) {
  const { blocks, head = '' } = props;
  const [current, setCurrent] = useState(-1);
  const [bodyHeight, setBodyHeight] = useState(0);
  const refs = useRef<HTMLDivElement[]>([]);

  const updateCurrentAccordion = (i: number): void => {
    setCurrent(current === i ? -1 : i);
    setBodyHeight(refs.current[i].clientHeight);
  };

  return (
    <div className={css.Accordion}>
      {head && (
        <h6 data-testid="landing-page-accordion-head" className={css.Head} dangerouslySetInnerHTML={{ __html: head }} />
      )}
      {blocks.map((block, i) => (
        <div key={i} data-testid="landing-page-accordion-block" className={css.Block}>
          <div
            data-testid="landing-page-accordion-title"
            className={css.Title}
            onClick={() => updateCurrentAccordion(i)}
          >
            <div
              data-testid="landing-page-accordion-arrow"
              className={cn(css.Arrow, current === i ? css.ArrowOpen : css.ArrowClose)}
            />
            <h6
              data-testid="landing-page-accordion-text"
              onKeyDown={() => updateCurrentAccordion(i)}
              className={css.Text}
              dangerouslySetInnerHTML={{ __html: block.title }}
            />
          </div>
          <div
            data-testid="landing-page-accordion-body"
            style={{ height: current === i ? bodyHeight : 0 }}
            className={css.Body}
          >
            <div
              data-testid="landing-page-accordion-content"
              ref={(el: HTMLDivElement) => (refs.current[i] = el)}
              className={css.Content}
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

LandingPageAccordion.displayName = 'LandingPageAccordion';
