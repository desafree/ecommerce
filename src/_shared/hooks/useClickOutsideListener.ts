import React, { useEffect, useLayoutEffect, useRef } from "react";

export function useClickOutsideListener(
  referenceElement: React.RefObject<HTMLElement>,
  callback: () => void
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useLayoutEffect(() => {
    function clickHandler(e: Event) {
      if (
        referenceElement.current &&
        !referenceElement.current.contains(e.target as Node)
      ) {
        callbackRef.current?.();
      }
    }

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [referenceElement]);
}
