import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const useViewportSize = (debounceTime: number = 250): { width: number; height: number } => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const debouncedHandleResize = useDebounce(handleResize, debounceTime);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debouncedHandleResize]);

  return windowSize;
};

export default useViewportSize;
