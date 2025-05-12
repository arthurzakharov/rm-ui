import type { SuccessBoxProps } from './success-box.type';
import { Check, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import IconCheckCircle from '../../../../icons/check-circle';
import IconQuestion from '../../../../icons/question';
import IconExclamation from '../../../../icons/exclamation';
import IconExclamationTriangle from '../../../../icons/exclamation-triangle';
import { useStore } from '../../store/zustand';
import css from './success-box.module.css';

export default function SuccessBox(props: SuccessBoxProps) {
  const { color = '', head = { primary: '', secondary: '' }, body = [] } = props;
  const ref = useRef<HTMLDivElement>(null);
  const setSuccessBoxElement = useStore((s) => s.setSuccessBoxElement);

  useEffect(() => {
    if (ref.current) setSuccessBoxElement(ref.current);
  }, [ref, setSuccessBoxElement]);

  return (
    <div className={css.SuccessBox}>
      <style type="text/css">
        {`
          .${css.SuccessBox} {
            --success-box-primary: ${color};
          }
        `}
      </style>
      <div ref={ref} className={css.Head}>
        <IconCheckCircle className={css.HeadIcon} />
        <h5 className={css.HeadText}>
          {head.primary && <span className={css.HeadTextPrimary}>{head.primary}</span>}
          {head.secondary && <span className={css.HeadTextSecondary}>{head.secondary}</span>}
        </h5>
      </div>
      <div className={css.Main}>
        {body
          .filter(({ data }) => !!data)
          .map((item, i) => {
            switch (item.type) {
              case 'title':
                return <h6 key={i} className={css.Title} dangerouslySetInnerHTML={{ __html: item.data }} />;
              case 'html':
                return <div key={i} className={css.Html} dangerouslySetInnerHTML={{ __html: item.data }} />;
              case 'list':
                return (
                  <ul key={i} className={css.List}>
                    {item.data.map((item, i) => (
                      <li
                        key={i}
                        className={clsx(css.ListItem, {
                          [css.ListItemCheck]: item.type === 'check',
                          [css.ListItemQuestion]: item.type === 'question',
                          [css.ListItemExclamation]: item.type === 'exclamation',
                          [css.ListItemCross]: item.type === 'cross',
                        })}
                      >
                        <div className={css.ListItemSection}>
                          {item.type === 'check' && <Check className={css.ListItemIcon} />}
                          {item.type === 'question' && <IconQuestion className={css.ListItemIcon} />}
                          {item.type === 'exclamation' && <IconExclamation className={css.ListItemIcon} />}
                          {item.type === 'cross' && <X className={css.ListItemIcon} />}
                          <div className={css.ListItemText} dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                        {!!item.subContent.length && (
                          <div className={css.Warning}>
                            <IconExclamationTriangle
                              className={clsx(css.WarningIcon, {
                                [css.WarningIconSingle]: item.subContent.length === 1,
                                [css.WarningIconMultiple]: item.subContent.length === 3,
                              })}
                            />
                            <div className={css.WarningContent}>
                              {item.subContent.map((line, i) => (
                                <p key={i} className={css.WarningText} dangerouslySetInnerHTML={{ __html: line }} />
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                );
            }
          })}
      </div>
    </div>
  );
}

SuccessBox.displayName = 'LandingPageSuccessBox';
