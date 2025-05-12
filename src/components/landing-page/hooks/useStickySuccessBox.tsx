import { RefObject, useEffect, useState } from 'react';
import { useStore } from '../store/zustand';

export default function useStickySuccessBox(appHeaderRef: RefObject<HTMLDivElement> | null, apply: boolean) {
  const [appHeaderElement, setAppHeaderElement] = useState<HTMLDivElement | null>(null);
  const mainElement = useStore((s) => s.mainElement);
  const successBoxElement = useStore((s) => s.successBoxElement);

  const getElementHeight = (element: HTMLDivElement): number =>
    element ? Math.round(element.getBoundingClientRect().height) : 0;

  useEffect(() => {
    if (!appHeaderElement || !mainElement || !successBoxElement) return;
    const headerHeight = getElementHeight(appHeaderElement);
    const successBoxHeight = getElementHeight(successBoxElement);
    if (apply) {
      mainElement.style.setProperty('margin-top', `${successBoxHeight + headerHeight}px`);
      successBoxElement.style.setProperty('top', `${headerHeight}px`);
    } else {
      mainElement.removeAttribute('style');
      successBoxElement.removeAttribute('style');
    }
  }, [apply, appHeaderElement, mainElement, successBoxElement]);

  useEffect(() => {
    if (appHeaderRef && appHeaderRef.current) setAppHeaderElement(appHeaderRef.current);
  }, [appHeaderRef]);
}
