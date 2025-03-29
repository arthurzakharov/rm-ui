import type { SuccessBoxProps } from './success-box.type.ts';
import { Check, X } from 'lucide-react';
import IconCheckCircle from '../../../../icons/check-circle/check-circle.component.tsx';
import IconQuestion from '../../../../icons/question/question.component.tsx';
import IconExclamation from '../../../../icons/exclamation/exclamation.component.tsx';
import IconExclamationTriangle from '../../../../icons/exclamation-triangle/exclamation-triangle.component.tsx';
import { cn } from '../../../../utils/functions.ts';
import css from './success-box.module.css';

export default function SuccessBox(props: SuccessBoxProps) {
  const { color, head, main } = props;

  return (
    <div className={css.SuccessBox}>
      <style>
        {`
          .${css.SuccessBox} {
            --success-box-primary: ${color};
          }
        `}
      </style>
      <div>
        <div className={css.Header}>
          <IconCheckCircle className={css.Icon} />
          <h5 className={css.Text}>
            {head.primary && <span>{head.primary}</span>}
            {head.secondary && <span>{head.secondary}</span>}
          </h5>
        </div>
        <div className={cn(css.Main)}>
          {main.map((item, i) => {
            switch (item.type) {
              case 'title':
                return <h6 key={i} className={css.MainTitle} dangerouslySetInnerHTML={{ __html: item.data }} />;
              case 'html':
                return <div key={i} className={css.MainHtml} dangerouslySetInnerHTML={{ __html: item.data }} />;
              case 'list':
                return (
                  <ul key={i} className={css.MainList}>
                    {item.data.map((item, i) => (
                      <li key={i} data-list-type={item.type} className={css.MainListItem}>
                        <div className={css.MainListText}>
                          {item.type === 'check' && <Check className={css.MainListIcon} />}
                          {item.type === 'question' && <IconQuestion className={css.MainListIcon} />}
                          {item.type === 'exclamation' && <IconExclamation className={css.MainListIcon} />}
                          {item.type === 'cross' && <X className={css.MainListIcon} />}
                          <div className={css.MainListContent} dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                        {item.subContent && (
                          <div className={css.MainWarning}>
                            <IconExclamationTriangle
                              className={cn(css.MainWarningIcon, {
                                [css.MainWarningIconSingle]: item.subContent.length === 1,
                                [css.MainWarningIconMultiple]: item.subContent.length === 3,
                              })}
                            />
                            <div className={css.MainWarningContent}>
                              {item.subContent.map((line, i) => (
                                <p key={i} className={css.MainWarningText} dangerouslySetInnerHTML={{ __html: line }} />
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
    </div>
  );
}

SuccessBox.displayName = 'SuccessBox';
