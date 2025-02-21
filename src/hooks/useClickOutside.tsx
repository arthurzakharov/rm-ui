import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  exceptions?: (RefObject<HTMLElement> | HTMLElement)[],
) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        let isException = false;

        if (exceptions) {
          for (const exception of exceptions) {
            const exceptionElement = exception instanceof HTMLElement ? exception : exception.current;
            if (exceptionElement && exceptionElement.contains(event.target as Node)) {
              isException = true;
              break;
            }
          }
        }

        if (!isException) {
          handlerRef.current(event);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler, exceptions]);
};

export default useClickOutside;
