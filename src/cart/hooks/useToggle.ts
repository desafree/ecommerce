import { useState } from "react";

export function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return {
    on,
    toggle,
    togglerProps: {
      "aria-pressed": on,
      onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        toggle();
      },
    },
  };
}
