import type { CalendarProps } from './calendar.type';
import type { FC } from 'react';
import { useRef, useState, useCallback } from 'react';
import CalendarButton from './components/calendar-button/calendar-button.component';
import InputMasked from '../input-masked/input-masked.component';
import CalendarModal from './components/calendar-modal/calendar-modal.component';
import CalendarProvider from '../calendar/calendar.provider';
import { WEEK_DAY } from '../../utils/enums';
import { cn, convertMaskFormatToDate, createDate, isDateInPeriod } from '../../utils/functions';
import css from './calendar.module.css';

const Calendar: FC<CalendarProps> = (props) => {
  const {
    name,
    dayNames = ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
    monthNames = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    weekStart = WEEK_DAY.MONDAY,
    mode = 'dropdown',
    value = '',
    startPosition = new Date(),
    precision = 'day',
    rootElementId = 'root',
    modalTill = 1024,
    modalWidthDebounce = 250,
    period = [createDate(15, 2, 2020), createDate(1, 4, 2025, true)],
    mask = props.precision === 'day' ? 'TT/MM/JJJJ' : 'MM/JJJJ',
    maskExplanation = props.precision === 'day' ? ['/', 'd', 'm', 'y'] : ['/', 'm', 'y'],
    closeButton = 'Schließen',
    modalPosition = 'absolute',
    onChange,
    onFocus = () => {},
    onBlur = () => {},
    onOpen = () => {},
    onClose = () => {},
  } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const calendarModalRef = useRef<HTMLDivElement>(null);

  const onInputChange = (value: string, name: string): void => {
    const date = convertMaskFormatToDate(value, maskExplanation);
    onChange(value, isDateInPeriod(date, period), name);
  };

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
          <div
            className={cn(css.CalendarInputBorder, {
              [css.CalendarInputBorderFocused]: focused,
              [css.CalendarInputBorderDropdown]: mode === 'dropdown',
              [css.CalendarInputBorderText]: mode === 'text',
            })}
          >
            <div className={css.CalendarContainer}>
              <InputMasked
                inputClassName={css.CalendarInputField}
                placeholderClassName={css.CalendarInputPlaceholder}
                name={name}
                value={value}
                mask={mask}
                onChange={onInputChange}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
              />
              {mode === 'dropdown' && <CalendarButton />}
            </div>
          </div>
          {mode === 'dropdown' && <CalendarModal />}
        </div>
      </div>
    </CalendarProvider>
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
