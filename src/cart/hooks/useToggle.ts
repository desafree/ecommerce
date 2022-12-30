import { useState } from "react";

export function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prevState) => !prevState);

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    toggle();
  };

  return {
    on,
    onClick,
    toggle,
  };
}
