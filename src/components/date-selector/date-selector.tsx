import type { ChangeEvent, FocusEvent, KeyboardEvent, RefObject, MouseEvent } from 'react';
import type { IDateSelector } from './date-selector.type';
import { useRef, useState, useEffect } from 'react';
import { cn } from '../../utils/functions';
import css from './date-selector.module.css';

const isDigit = (char: string): boolean => /\d/.test(char);

const isSeparator = (char: string, mask: string): boolean => !!char.match(getSeparatorRegExp(mask));

const getRegExp = (str: string): RegExp => {
  return new RegExp(`[${[...new Set(str.match(/[A-Za-z]/g))].join('')}]`);
};

const getSeparatorRegExp = (mask: string): RegExp => {
  const separators = [...new Set(mask.replace(/[A-Z]/g, ''))].join('').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`[${separators}]`);
};

const getFirstNotEnteredCharIndex = (str: string, mask: string): number => {
  return str.match(getRegExp(mask))?.index ?? str.length;
};

const getPreviousChar = (str: string, position: number): string => (position > 1 ? str[position - 2] : '');

const applyMask = (str: string, mask: string, index: number): string => {
  if (index < 0 || index >= str.length) return str;
  return str.slice(0, index) + mask.slice(index);
};

const replaceCharByIndex = (str: string, index: number, newChar: string): string => {
  if (index < 0 || index >= str.length) return str;
  return str.slice(0, index) + newChar + str.slice(index + 1);
};

const preventSelection = (ref: RefObject<HTMLInputElement>): void => ref.current?.setSelectionRange(0, 0);

const setCursorPosition = (ref: RefObject<HTMLInputElement>, position: number): void => {
  // TODO: Without setTimeout does not update each time cursor position
  setTimeout(() => ref.current?.setSelectionRange(position, position), 10);
};

const DateTimeSelector = ({
  name,
  value = '',
  mask = 'TT-MM-JJJJ',
  onChange,
  onFocus = () => {},
  onBlur = () => {},
}: IDateSelector) => {
  const [inputValue, setInputValue] = useState<string>(value || mask);
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const firstNotEnteredCharIndex = getFirstNotEnteredCharIndex(inputValue, mask);
    const newChar = e.target.value.slice(firstNotEnteredCharIndex, firstNotEnteredCharIndex + 1);
    if (isDigit(newChar)) {
      const newInputValue = replaceCharByIndex(inputValue, firstNotEnteredCharIndex, newChar);
      const position = getFirstNotEnteredCharIndex(newInputValue, mask);
      setInputValue(newInputValue);
      setCursorPosition(inputRef, position);
    }
  };

  const onInputKeyStroke = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (inputRef.current && e.code === 'Backspace') {
      e.preventDefault();
      const cursor = inputRef.current.selectionEnd || 0;
      const newCursor = cursor - (isSeparator(getPreviousChar(inputValue, cursor), mask) ? 2 : 1);
      setInputValue(applyMask(inputValue, mask, cursor - 1));
      setCursorPosition(inputRef, newCursor);
    }
  };

  const onInputClick = (e: MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const position = getFirstNotEnteredCharIndex(inputValue, mask);
    setCursorPosition(inputRef, position);
  };

  const onInputFocus = (e: FocusEvent<HTMLInputElement>): void => {
    e.preventDefault();
    preventSelection(inputRef);
    const position = getFirstNotEnteredCharIndex(inputValue, mask);
    setCursorPosition(inputRef, position);
    onFocus(name);
  };

  const onInputBlur = (e: FocusEvent<HTMLInputElement>): void => {
    e.preventDefault();
    onBlur(name);
  };

  useEffect(() => {
    onChange(inputValue, name);
  }, [inputValue, name, onChange]);

  return (
    <div className={css.DateSelector}>
      <input
        className={cn(css.DateSelectorInput, {
          [css.DateSelectorInputPlaceholder]: inputValue === mask,
        })}
        type="text"
        ref={inputRef}
        name={name}
        value={value || mask}
        onKeyDown={onInputKeyStroke}
        onChange={onInputChange}
        onClick={onInputClick}
        onDoubleClick={onInputClick}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
    </div>
  );
};

export default DateTimeSelector;
