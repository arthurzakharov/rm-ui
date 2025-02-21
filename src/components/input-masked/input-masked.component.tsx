import type { ChangeEvent, FocusEvent, KeyboardEvent, RefObject, MouseEvent } from 'react';
import type { InputMaskedProps } from './input-masked.type';
import { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '../../utils/functions';

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

const getNextChar = (str: string, position: number): string => (position > 1 ? str[position] : '');

const applyMask = (str: string, mask: string, index: number): string => {
  if (index < 0 || index >= str.length) return str;
  return str.slice(0, index) + mask[index] + str.slice(index + 1);
};

const replaceCharByIndex = (str: string, index: number, newChar: string): string => {
  if (index < 0 || index >= str.length) return str;
  return str.slice(0, index) + newChar + str.slice(index + 1);
};

const preventSelection = (ref: RefObject<HTMLInputElement>): void => ref.current?.setSelectionRange(0, 0);

const setCursorPosition = (ref: RefObject<HTMLInputElement>, position: number): void => {
  setTimeout(() => ref.current?.setSelectionRange(position, position), 10);
};

const InputMasked = ({
  name,
  value,
  mask,
  inputClassName = '',
  placeholderClassName = '',
  onChange,
  onFocus,
  onBlur,
}: InputMaskedProps) => {
  const [inputValue, setInputValue] = useState<string>(value || mask);
  const inputRef = useRef<HTMLInputElement>(null);

  const isInternalUpdate = useRef(false);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      if (!inputRef.current) return;

      const firstNotEnteredCharIndex = getFirstNotEnteredCharIndex(inputValue, mask);
      const isCompleted = firstNotEnteredCharIndex === inputValue.length;
      const newChar = e.target.value.slice(firstNotEnteredCharIndex, firstNotEnteredCharIndex + 1);

      if (isDigit(newChar)) {
        const newInputValue = replaceCharByIndex(inputValue, firstNotEnteredCharIndex, newChar);
        const cursor = getFirstNotEnteredCharIndex(newInputValue, mask);

        if (isCompleted) {
          const currentCursor = inputRef.current.selectionEnd || 0;
          const before = e.target.value.slice(0, currentCursor - 1);
          const char = e.target.value.slice(currentCursor - 1, currentCursor);
          const after = e.target.value.slice(currentCursor);
          const updatedInputValue = replaceCharByIndex(before + after, currentCursor - 1, char);
          const nextChar = getNextChar(before + after, currentCursor) || '';
          setInputValue(updatedInputValue);
          setCursorPosition(inputRef, isSeparator(nextChar, mask) && nextChar ? currentCursor + 1 : currentCursor);
        } else {
          setInputValue(newInputValue);
          setCursorPosition(inputRef, cursor);
        }
        isInternalUpdate.current = true;
        return;
      }

      if (isSeparator(newChar, mask)) {
        const cursor = getFirstNotEnteredCharIndex(inputValue, mask) - 1;
        const newChar = e.target.value.slice(cursor, cursor + 1);
        if (isDigit(newChar)) {
          setInputValue(replaceCharByIndex(inputValue, cursor + 1, newChar));
          setCursorPosition(inputRef, cursor + 2);
        } else {
          setCursorPosition(inputRef, firstNotEnteredCharIndex - 1);
        }
        isInternalUpdate.current = true;
        return;
      }

      setCursorPosition(inputRef, firstNotEnteredCharIndex);
    },
    [inputValue, mask],
  );

  const handleKeyStroke = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (inputRef.current && e.code === 'Backspace') {
        e.preventDefault();
        const cursor = inputRef.current.selectionEnd || 0;
        if (cursor) {
          const newCursor = cursor - (isSeparator(getPreviousChar(inputValue, cursor), mask) ? 2 : 1);
          const newInputValue = applyMask(inputValue, mask, cursor - 1);
          setInputValue(newInputValue);
          setCursorPosition(inputRef, newCursor);
          isInternalUpdate.current = true;
        }
      }
    },
    [inputValue, mask],
  );

  const handleInputClick = useCallback(
    (e: MouseEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const cursor = getFirstNotEnteredCharIndex(inputValue, mask);
      if (cursor !== inputValue.length) setCursorPosition(inputRef, cursor);
    },
    [inputValue, mask],
  );

  const handleInputFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>): void => {
      e.preventDefault();
      preventSelection(inputRef);
      const cursor = getFirstNotEnteredCharIndex(inputValue, mask);
      if (cursor !== inputValue.length) setCursorPosition(inputRef, cursor);
      onFocus(name);
    },
    [inputValue, mask, name, onFocus],
  );

  const handleInputBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>): void => {
      e.preventDefault();
      onBlur(name);
    },
    [name, onBlur],
  );

  useEffect(() => {
    if (!isInternalUpdate.current) {
      setInputValue(value || mask);
    }
    isInternalUpdate.current = false;
  }, [value, mask]);

  useEffect(() => {
    if (isInternalUpdate.current) {
      onChange(inputValue !== mask ? inputValue : '', name);
    }
  }, [inputValue, mask, name, onChange]);

  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      value={inputValue}
      className={cn(inputClassName, {
        [placeholderClassName]: inputValue === mask,
      })}
      onKeyDown={handleKeyStroke}
      onChange={handleInputChange}
      onClick={handleInputClick}
      onDoubleClick={handleInputClick}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    />
  );
};

export default InputMasked;
