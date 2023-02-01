import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { initGsap } from "./gsapEffects";

type AnimationRef = keyof ReturnType<typeof initGsap>;

export function useAnimate({
  animationRef,
  target,
  vars,
}: {
  animationRef: AnimationRef;
  target: React.RefObject<HTMLElement>;
  vars?: GSAPTweenVars;
}) {
  const animation = useRef({});
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animation!.current = gsap.effects[animationRef](target.current, vars);
    }, target);
    return () => ctx.revert();
  }, []);
}
