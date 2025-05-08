import { Fragment, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import Month from '../month';
import Day from '../day';
import Select from '../select';
import { useCalendarContext } from '../../calendar.context';
import useViewportSize from '../../../../hooks/useViewportSize';
import useClickOutside from '../../../../hooks/useClickOutside';
import { generateStyleTag } from '../../../../utils/functions';
import css from './modal.module.css';

export default function Modal() {
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
  const isDesktop = width >= modalTill;

  useClickOutside(modalRef, onOutsideClick);

  const modalContent = useMemo(() => {
    return (
      <div
        ref={modalRef}
        className={clsx(css.Modal, {
          [css.ModalDesktop]: isDesktop,
          [css.ModalMobile]: !isDesktop,
        })}
      >
        {precision === 'day' ? (
          <Fragment>
            <div className={css.ModalSelects}>
              <Select value={monthIndex} options={monthNames} onChange={onMonthIndexChange} />
              <Select value={yearIndex} options={yearList} onChange={onYearIndexChange} />
            </div>
            <div className={css.ModalDays}>
              <Day />
            </div>
          </Fragment>
        ) : precision === 'month' ? (
          <div className={css.ModalMonths}>
            <Month />
          </div>
        ) : null}
        <div className={css.ModalFooter}>
          <button className={css.ModalButton} onClick={onCloseButton}>
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

  return useMemo(() => {
    if (!open || !calendarRef.current) return null;

    return isDesktop ? (
      <div
        ref={calendarModalRef}
        className={clsx(css.ModalAttached, {
          [css.ModalAttachedStatic]: modalPosition === 'static',
          [css.ModalAttachedAbsolute]: modalPosition === 'absolute',
        })}
      >
        {modalContent}
      </div>
    ) : (
      createPortal(
        <div ref={calendarModalRef} className={css.ModalCentered}>
          {calendarRef.current ? (
            <style lang="css">
              {generateStyleTag(window.getComputedStyle(calendarRef.current), css.ModalCentered)}
            </style>
          ) : null}
          {modalContent}
        </div>,
        document.getElementById(rootElementId) || document.body,
      )
    );
  }, [open, isDesktop, modalPosition, modalContent, rootElementId, calendarRef, calendarModalRef]);
}

Modal.displayName = 'CalendarModal';
