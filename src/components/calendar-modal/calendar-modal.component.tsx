import { Fragment, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import CalendarMonth from '../calendar-month/calendar-month.component';
import CalendarDay from '../calendar-day/calendar-day.component';
import CalendarSelect from '../calendar-select/calendar-select.component';
import { useCalendarContext } from '../calendar/calendar.context';
import useViewportSize from '../../hooks/useViewportSize';
import useClickOutside from '../../hooks/useClickOutside';
import { generateStyleTag } from '../../utils/functions';
import css from './calendar-modal.module.css';

const CalendarModal = () => {
  const {
    open,
    precision,
    rootElementId,
    modalTill,
    modalWidthDebounce,
    calendarRef,
    monthNames,
    yearList,
    monthIndex,
    yearIndex,
    closeButton,
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

  const modal = useMemo(() => {
    if (!open || !calendarRef.current) return null;

    return width >= modalTill ? (
      <div className={css.CalendarModalAttached}>{modalContent}</div>
    ) : (
      createPortal(
        <div className={css.CalendarModalCentered}>
          {styleTag && <style>{styleTag}</style>}
          {modalContent}
        </div>,
        document.getElementById(rootElementId) || document.body,
      )
    );
  }, [open, width, modalTill, rootElementId, calendarRef, modalContent, styleTag]);

  return modal;
};

export default CalendarModal;
