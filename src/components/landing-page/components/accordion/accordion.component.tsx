import type { AccordionProps } from './accordion.type';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import css from './accordion.module.css';

export default function Accordion(props: AccordionProps) {
  const { title = '', blocks = [] } = props;
  const [current, setCurrent] = useState(-1);
  const [bodyHeight, setBodyHeight] = useState(0);
  const refs = useRef<HTMLDivElement[]>([]);

  const updateCurrentAccordion = (i: number): void => {
    setCurrent(current === i ? -1 : i);
    setBodyHeight(refs.current[i].clientHeight);
  };

  return (
    <div className={css.Accordion}>
      {title && <h6 data-testid="accordion-head" className={css.Title} dangerouslySetInnerHTML={{ __html: title }} />}
      {blocks.map((block, i) => (
        <div key={i} data-testid="accordion-block" className={css.Block}>
          <div data-testid="accordion-title" className={css.BlockTitle} onClick={() => updateCurrentAccordion(i)}>
            <div
              data-testid="accordion-arrow"
              className={clsx(css.Arrow, current === i ? css.ArrowOpen : css.ArrowClose)}
            />
            <h6
              data-testid="accordion-text"
              onKeyDown={() => updateCurrentAccordion(i)}
              className={css.Text}
              dangerouslySetInnerHTML={{ __html: block.title }}
            />
          </div>
          <div data-testid="accordion-body" style={{ height: current === i ? bodyHeight : 0 }} className={css.Body}>
            <div
              data-testid="accordion-content"
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

Accordion.displayName = 'LandingPageAccordion';
