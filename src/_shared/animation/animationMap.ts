export const animationMap = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  },
  fadeInStaggered: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  fadeOnView: {
    hidden: { opacity: 0 },
    onView: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },

  comeFromLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  comeFromLeftOnView: {
    hidden: { x: -100, opacity: 0 },
    onView: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  comeFromRight: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  comeFromRightOnView: {
    hidden: { x: 100, opacity: 0 },
    onView: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  comeFromBottom: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  comeFromBottomOnView: {
    hidden: { y: 100, opacity: 0 },
    onView: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  comeFromTop: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  comeFromTopOnView: {
    hidden: { y: -100, opacity: 0 },
    onView: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  },
  scaleButton: {
    whileHover: {
      scale: 1.2,
    },
    whileTap: {
      scale: 0.8,
    },
  },
};
