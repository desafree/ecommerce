import React, { ComponentType, JSXElementConstructor } from "react";
import { animationMap } from "./animationMap";
import { getMotionComponent } from "./getMotionComponent";

type Animations = keyof typeof animationMap;
interface Props<C extends ComponentType> {
  animationRef: Animations;
  component: C;
  StaggeredContainer?: boolean;
  StaggeredItem?: boolean;
}

export function Animated<C extends JSXElementConstructor<any>>({
  animationRef,
  component,
  StaggeredContainer = false,
  StaggeredItem = false,
  ...rest
}: Props<C> & React.ComponentProps<C>) {
  let AnimatedComponent = getMotionComponent(component);

  return (
    <AnimatedComponent
      initial={StaggeredItem ? undefined : "hidden"}
      animate={StaggeredItem ? undefined : "visible"}
      whileInView={StaggeredItem ? undefined : "onView"}
      exit={StaggeredItem ? undefined : "hidden"}
      {...rest}
    ></AnimatedComponent>
  );
}
