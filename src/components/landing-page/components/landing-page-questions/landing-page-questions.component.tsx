import type { LandingPageQuestionsProps, Question } from './landing-page-questions.type';
import LandingPageAdvantages from '../landing-page-advantages/landing-page-advantages.component';
import LandingPageAccordion from '../landing-page-accordion/landing-page-accordion.component';
import LandingPageButton from '../landing-page-button/landing-page-button.component';
import LandingPageHowTo from '../landing-page-how-to/landing-page-how-to.component';
import LandingPageLogoBoard from '../landing-page-logo-board/landing-page-logo-board.component';
import LandingPagePlayer from '../landing-page-player/landing-page-player.component';
import LandingPageReview from '../landing-page-review/landing-page-review.component';
import { cn } from '../../../../utils/functions';
import css from './landing-page-questions.module.css';

export default function LandingPageQuestions(props: LandingPageQuestionsProps) {
  const { list, className = '' } = props;

  const questionHasTopLine = (questions: Question[], idx: number): boolean => {
    return !questions[idx].hideTop && idx >= 1;
  };

  const questionHasBottomLine = (questions: Question[], idx: number): boolean => {
    return idx >= 1 && idx < questions.length - 1 && !questions[idx].hideBottom;
  };

  const prevQuestionHasNoBottomLine = (questions: Question[], idx: number): boolean => {
    const prevIndex = idx - 1;
    return prevIndex >= 0 && !questionHasBottomLine(questions, prevIndex);
  };

  return (
    <div className={cn(css.Questions, className)}>
      {list.map((question, idx, questions) => (
        <section
          key={question.id}
          className={cn(css.Section, {
            [css.SectionTopLine]: questionHasTopLine(questions, idx) && prevQuestionHasNoBottomLine(questions, idx),
            [css.SectionBottomLine]: questionHasBottomLine(questions, idx),
          })}
        >
          {question.title && <h6 className={css.Title} dangerouslySetInnerHTML={{ __html: question.title }} />}
          <div className={css.Body}>
            {question.body.map(({ type, content, props }, i) =>
              type === '###Question###' ? (
                <div
                  key={i}
                  className={cn(css.Content, css.ContentQuestion)}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                <div key={i} className={css.Content}>
                  {type === '###Accordion###' && <LandingPageAccordion {...props} />}
                  {type === '###AdvantageList###' && <LandingPageAdvantages {...props} />}
                  {type === '###Button###' && <LandingPageButton {...props} />}
                  {type === '###HowToGoNext###' && <LandingPageHowTo {...props} />}
                  {type === '###LogoCloud###' && <LandingPageLogoBoard {...props} />}
                  {type === '###Player###' && <LandingPagePlayer {...props} />}
                  {type === '###Review###' && <LandingPageReview {...props} />}
                </div>
              ),
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

LandingPageQuestions.displayName = 'LandingPageQuestions';
