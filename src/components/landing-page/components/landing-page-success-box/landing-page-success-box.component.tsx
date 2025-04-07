import type { LandingPageSuccessBoxProps } from './landing-page-success-box.type';
import { Check, X } from 'lucide-react';
import IconCheckCircle from '../../../../icons/check-circle/check-circle.component';
import IconQuestion from '../../../../icons/question/question.component';
import IconExclamation from '../../../../icons/exclamation/exclamation.component';
import IconExclamationTriangle from '../../../../icons/exclamation-triangle/exclamation-triangle.component';
import { cn } from '../../../../utils/functions';
import css from './landing-page-success-box.module.css';

export default function LandingPageSuccessBox(props: LandingPageSuccessBoxProps) {
  const { color, head, main, refs, className = '' } = props;

  return (
    <div className={cn(css.SuccessBox, className)}>
      <style type="text/css">
        {`
          .${css.SuccessBox} {
            --success-box-primary: ${color};
          }
        `}
      </style>
      <div ref={refs?.head} className={css.Head}>
        <IconCheckCircle className={css.HeadIcon} />
        <h5 className={css.HeadText}>
          {head.primary && <span className={css.HeadTextPrimary}>{head.primary}</span>}
          {head.secondary && <span className={css.HeadTextSecondary}>{head.secondary}</span>}
        </h5>
      </div>
      <div ref={refs?.main} className={cn(css.Main)}>
        {main.map((item, i) => {
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
                      className={cn(css.ListItem, {
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
                      {item.subContent && (
                        <div className={css.Warning}>
                          <IconExclamationTriangle
                            className={cn(css.WarningIcon, {
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

LandingPageSuccessBox.displayName = 'LandingPageSuccessBox';
