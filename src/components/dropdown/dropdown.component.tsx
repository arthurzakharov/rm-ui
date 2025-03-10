import { FC, MouseEvent } from 'react';
import type { DropdownChoice, DropdownProps } from './dropdown.types';
import { useState, useRef, useMemo, useEffect } from 'react';
import { cn, getElementSize } from '../../utils/functions';
import IconChevron from '../../icons/chevron/chevron.component';
import IconMagnifyingGlass from '../../icons/magnifying-glass/magnifying-glass.component';
import InputControl from '../input-control/input-control.component';
import useClickOutside from '../../hooks/useClickOutside';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import css from './dropdown.module.css';

// TODO: Need to add two modes for dropdown: absolute and static same as for calendar

const Dropdown: FC<DropdownProps> = ({
  choices,
  choice = null,
  placeholder = 'Wählen Sie Ihre private Krankenversicherung...',
  noResult = 'Keine Versicherung gefunden.',
  isSearchHidden = false,
  isSuccessHighlighted = false,
  multiple = false,
  closeButton = 'Schließen',
  className = '',
  onChange,
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [selectedChoices, setSelectedChoices] = useState<DropdownChoice[]>([]);

  const borderRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelection = (newValue: string, newLabel: string) => {
    setSelectedChoices((prev) => {
      const exists = prev.some(({ value }) => value === newValue);
      return exists ? prev.filter(({ value }) => value !== newValue) : [...prev, { value: newValue, label: newLabel }];
    });
  };

  const onCloseButtonClick = (e: MouseEvent): void => {
    e.preventDefault();
    setIsOpen(false);
    onChange(selectedChoices);
  };

  const visibleChoices = useMemo(
    () => choices.filter(({ label }) => label.toLowerCase().includes(search.toLowerCase())),
    [search, choices],
  );

  useEffect(() => setSelectedChoices(Array.isArray(choice) ? choice : []), [choice]);

  useUpdateEffect(() => {
    if (isOpen) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      if (boxRef.current) {
        onOpen(...getElementSize(boxRef.current));
      }
    } else {
      onClose();
    }
  }, [isOpen]);

  useClickOutside(boxRef, () => {
    if (multiple) onChange(selectedChoices);
    setIsOpen(false);
  }, [borderRef]);

  return (
    <div className={cn(css.Dropdown, className)}>
      <div
        data-testid="dropdown-border"
        ref={borderRef}
        data-success={!!(choice && isSuccessHighlighted)}
        className={css.DropdownBorder}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span data-testid="dropdown-value" className={css.DropdownValue}>
          {selectedChoices.length > 0
            ? selectedChoices.map((selectedChoice) => selectedChoice.label).join(', ')
            : placeholder}
        </span>
        <div className={css.DropdownChevronWrap}>
          <IconChevron data-dropdown-open={isOpen} className={css.DropdownChevron} />
        </div>
      </div>
      {isOpen && (
        <div data-testid="dropdown-box" ref={boxRef} className={css.DropdownBox}>
          {!isSearchHidden && (
            <div data-testid="dropdown-search" className={css.DropdownSearch}>
              <input
                data-testid="dropdown-input"
                ref={inputRef}
                value={search}
                type="text"
                className={css.DropdownInput}
                onChange={(e) => setSearch(e.target.value)}
              />
              <IconMagnifyingGlass className={css.DropdownGlass} />
            </div>
          )}
          <ul className={css.DropdownChoices}>
            {visibleChoices.length ? (
              visibleChoices.map(({ value, label }) => (
                <li
                  data-testid="dropdown-choice"
                  key={value}
                  className={css.DropdownChoice}
                  onClick={() => {
                    if (multiple) {
                      handleSelection(value, label);
                    } else {
                      setIsOpen(false);
                      onChange([{ value, label }]);
                    }
                  }}
                >
                  {multiple && (
                    <InputControl
                      shape="checkbox"
                      checked={selectedChoices.some((selectedChoice) => selectedChoice.value === value)}
                      className={css.DropdownInputControl}
                    />
                  )}
                  <span data-with-checkbox={multiple}>{label}</span>
                </li>
              ))
            ) : (
              <li className={cn(css.DropdownChoice, css.DropdownChoiceNoResult)}>{noResult}</li>
            )}
          </ul>
          {multiple && (
            <div data-testid="dropdown-close" className={css.DropdownClose}>
              <button
                data-testid="dropdown-close-button"
                className={css.DropdownCloseButton}
                onClick={onCloseButtonClick}
              >
                {closeButton}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
