import { useState } from "react";

export function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prevState) => !prevState);

  return {
    on,
    toggle,
  };
}
