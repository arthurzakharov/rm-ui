import { useCallback, useEffect, useRef } from 'react';

const useDebounce = <T,>(func: (...args: unknown[]) => T, delay: number): ((...args: unknown[]) => void) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestFunc = useRef(func);

  useEffect(() => {
    latestFunc.current = func;
  }, [func]);

  return useCallback(
    (...args: unknown[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        latestFunc.current(...args);
        timeoutRef.current = null;
      }, delay);
    },
    [delay],
  );
};

export default useDebounce;
