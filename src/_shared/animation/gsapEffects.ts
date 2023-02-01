import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsapEffects = {
  fadeIn: gsap.registerEffect({
    name: "fadeIn",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        y: 10,
      });
    },
  }),

  fadeInStaggered: gsap.registerEffect({
    name: "fadeInStaggered",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0].children, {
        opacity: 0,
        x: -10,
        stagger: 0.3,
      });
    },
  }),

  fadeInOnView: gsap.registerEffect({
    name: "fadeInOnView",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets, {
        opacity: 0,
        x: -10,
        scrollTrigger: {
          trigger: targets,
          toggleActions: "restart none none reverse",
        },
      });
    },
  }),

  fadeInOnViewStaggered: gsap.registerEffect({
    name: "fadeInOnViewStaggered",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0].children, {
        opacity: 0,
        x: -10,
        stagger: 0.3,
        scrollTrigger: {
          trigger: targets,
          toggleActions: "restart none none reverse",
        },
      });
    },
  }),

  comeFromBottom: gsap.registerEffect({
    name: "comeFromBottom",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        y: -100,
      });
    },
  }),

  comeFromBottomOnView: gsap.registerEffect({
    name: "comeFromBottomOnView",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: targets,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      });
    },
  }),

  comeFromLeft: gsap.registerEffect({
    name: "comeFromLeft",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        x: -100,
      });
    },
  }),

  comeFromLeftOnView: gsap.registerEffect({
    name: "comeFromLeftOnView",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        x: -100,
        scrollTrigger: {
          trigger: targets,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      });
    },
  }),

  comeFromRight: gsap.registerEffect({
    name: "comeFromRight",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        x: 100,
      });
    },
  }),

  comeFromRightOnView: gsap.registerEffect({
    name: "comeFromRightOnView",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        x: 100,
        scrollTrigger: {
          trigger: targets,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      });
    },
  }),

  comeFromTop: gsap.registerEffect({
    name: "comeFromTop",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        y: 100,
      });
    },
  }),

  comeFromTopOnView: gsap.registerEffect({
    name: "comeFromTopOnView",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap.from(targets[0], {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: targets,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      });
    },
  }),

  imageReveal: gsap.registerEffect({
    name: "imageReveal",
    effect: (targets: HTMLElement[], config: GSAPTweenVars) => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: targets,
            toggleActions: "restart none none reverse",
          },
        })
        .to(targets, { duration: 1, "--height": "100%", ease: "Power2.ease" })
        .to(targets, { duration: 1, "--height": "0%", ease: "Power2.ease" })
        .to("img", { duration: 0.2, opacity: 1, delay: -1 })
        .from("img", {
          duration: 1,
          scale: 1.4,
          ease: "Power2.easeInOut",
          delay: -1.2,
        });
    },
  }),
};

export function initGsap() {
  gsap.registerPlugin(ScrollTrigger);
  return gsapEffects;
}
