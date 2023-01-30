import { motion } from "framer-motion";

const animatedComponentWeakMap = new WeakMap();
const animatedComponentMap: Record<string, any> = {};

export function getMotionComponent(component: any) {
  if (
    typeof component === "object" &&
    !animatedComponentWeakMap.has(component)
  ) {
    animatedComponentWeakMap.set(
      component,
      motion(component, { forwardMotionProps: true })
    );
    return animatedComponentWeakMap.get(component);
  } else if (
    typeof component === "object" &&
    animatedComponentWeakMap.has(component)
  ) {
    return animatedComponentWeakMap.get(component);
  } else if (
    typeof component === "string" &&
    !animatedComponentMap[component]
  ) {
    animatedComponentMap[component] = motion(component, {
      forwardMotionProps: true,
    });
    return animatedComponentMap[component];
  } else {
    return animatedComponentMap[component];
  }
}
