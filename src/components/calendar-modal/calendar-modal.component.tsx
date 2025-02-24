import { Fragment, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import CalendarMonth from '../calendar-month/calendar-month.component';
import CalendarDay from '../calendar-day/calendar-day.component';
import CalendarSelect from '../calendar-select/calendar-select.component';
import { useCalendarContext } from '../calendar/calendar.context';
import useViewportSize from '../../hooks/useViewportSize';
import useClickOutside from '../../hooks/useClickOutside';
import { cn, generateStyleTag } from '../../utils/functions';
import css from './calendar-modal.module.css';

const CalendarModal = () => {
  const {
    open,
    precision,
    rootElementId,
    modalTill,
    modalWidthDebounce,
    calendarRef,
    calendarModalRef,
    monthNames,
    yearList,
    monthIndex,
    yearIndex,
    closeButton,
    modalPosition,
    onCloseButton,
    onMonthIndexChange,
    onYearIndexChange,
    onOutsideClick,
  } = useCalendarContext();
  const { width } = useViewportSize(modalWidthDebounce);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onOutsideClick);

  const modalContent = useMemo(() => {
    return (
      <div ref={modalRef} className={css.CalendarModal}>
        {precision === 'day' ? (
          <Fragment>
            <div className={css.CalendarModalSelects}>
              <CalendarSelect value={monthIndex} options={monthNames} onChange={onMonthIndexChange} />
              <CalendarSelect value={yearIndex} options={yearList} onChange={onYearIndexChange} />
            </div>
            <div className={css.CalendarModalDays}>
              <CalendarDay />
            </div>
          </Fragment>
        ) : precision === 'month' ? (
          <div className={css.CalendarModalMonths}>
            <CalendarMonth />
          </div>
        ) : null}
        <div className={css.CalendarModalFooter}>
          <button className={css.CalendarModalButton} onClick={onCloseButton}>
            {closeButton}
          </button>
        </div>
      </div>
    );
  }, [
    precision,
    monthIndex,
    yearIndex,
    monthNames,
    yearList,
    closeButton,
    onMonthIndexChange,
    onYearIndexChange,
    onCloseButton,
  ]);

  const styleTag = useMemo(
    () =>
      calendarRef.current
        ? generateStyleTag(window.getComputedStyle(calendarRef.current), css.CalendarModalCentered)
        : null,
    [calendarRef],
  );

  return useMemo(() => {
    if (!open || !calendarRef.current) return null;

    return width >= modalTill ? (
      <div
        ref={calendarModalRef}
        className={cn(css.CalendarModalAttached, {
          [css.CalendarModalAttachedStatic]: modalPosition === 'static',
          [css.CalendarModalAttachedAbsolute]: modalPosition === 'absolute',
        })}
      >
        {modalContent}
      </div>
    ) : (
      createPortal(
        <div ref={calendarModalRef} className={css.CalendarModalCentered}>
          {styleTag && <style>{styleTag}</style>}
          {modalContent}
        </div>,
        document.getElementById(rootElementId) || document.body,
      )
    );
  }, [open, width, modalTill, modalPosition, modalContent, styleTag, rootElementId, calendarRef, calendarModalRef]);
};

export default CalendarModal;
