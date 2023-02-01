import React, { ComponentType, JSXElementConstructor, useRef } from "react";
import { initGsap } from "./gsapEffects";
import { useAnimate } from "./useAnimate";

type AnimationRef = keyof ReturnType<typeof initGsap>;

interface Props<C extends ComponentType> {
  animationRef: AnimationRef;
  Component: C;
}

export function Animated<C extends JSXElementConstructor<any>>({
  animationRef,
  Component,
  ...rest
}: Props<C> & React.ComponentProps<C>) {
  const ref = useRef(null);
  useAnimate({ animationRef: animationRef, target: ref });

  return (
    <>
      <Component ref={ref} {...rest}></Component>
    </>
  );
}
