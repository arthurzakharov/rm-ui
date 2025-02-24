import type { CalendarProps } from './calendar.type';
import type { FC } from 'react';
import { useRef, useState, useCallback } from 'react';
import CalendarButton from '../calendar-button/calendar-button.component';
import InputMasked from '../input-masked/input-masked.component';
import CalendarModal from '../calendar-modal/calendar-modal.component';
import CalendarProvider from '../calendar/calendar.provider';
import { WEEK_DAY } from '../../utils/enums';
import { cn } from '../../utils/functions';
import css from './calendar.module.css';

const Calendar: FC<CalendarProps> = ({
  name,
  dayNames = ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
  monthNames = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  weekStart = WEEK_DAY.MONDAY,
  value = '',
  startPosition = new Date(),
  precision = 'day',
  rootElementId = 'root',
  modalTill = 1024,
  modalWidthDebounce = 250,
  period = [new Date(2020, 2, 15), new Date(2025, 4, 1)],
  mask = 'TT/MM/JJJJ',
  maskExplanation = ['/', 'd', 'm', 'y'],
  closeButton = 'Schließen',
  modalPosition = 'absolute',
  onChange,
  onFocus = () => {},
  onBlur = () => {},
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const calendarModalRef = useRef<HTMLDivElement>(null);

  const onInputFocus = useCallback((): void => {
    setFocused(true);
    onFocus(name);
  }, [name, onFocus]);

  const onInputBlur = useCallback((): void => {
    setFocused(false);
    onBlur(name);
  }, [name, onBlur]);

  return (
    <CalendarProvider
      calendarRef={calendarRef}
      calendarModalRef={calendarModalRef}
      name={name}
      value={value}
      rootElementId={rootElementId}
      modalTill={modalTill}
      modalWidthDebounce={modalWidthDebounce}
      precision={precision}
      maskExplanation={maskExplanation}
      period={period}
      startPosition={startPosition}
      dayNames={dayNames}
      monthNames={monthNames}
      weekStart={weekStart}
      closeButton={closeButton}
      modalPosition={modalPosition}
      onDateChange={onChange}
      onOpenModal={onOpen}
      onCloseModal={onClose}
    >
      <div ref={calendarRef} className={css.Calendar}>
        <div className={css.CalendarInput}>
          <div className={cn(css.CalendarInputBorder, { [css.CalendarInputBorderFocused]: focused })}>
            <div className={css.CalendarContainer}>
              <InputMasked
                inputClassName={css.CalendarInputField}
                placeholderClassName={css.CalendarInputPlaceholder}
                name={name}
                value={value}
                mask={mask}
                onChange={(value, name) => onChange(value, name)}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
              />
              <CalendarButton />
            </div>
          </div>
          <CalendarModal />
        </div>
      </div>
    </CalendarProvider>
  );
};

export default Calendar;
