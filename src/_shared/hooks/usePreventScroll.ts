import { useLayoutEffect } from "react";

export const usePreventScroll = (trigger: boolean) => {
  useLayoutEffect(() => {
    if (trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [trigger]);
};
