export const shareMotion = {
  rest: {
    right: 0,
    x: "100%",
    ease: "easeOut",
    duration: 0.2,
    type: "tween",
  },
  hover: {
    x: "-50%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  // hoverFix: {
  //   x: ["0", "-50%", "-50%"],
  //   transition: {
  //     duration: [0.4, 0.2, 0.2],
  //     type: "tween",
  //     ease: "easeIn",
  //   },
  // },
};
export const expandMotion = {
  rest: {
    left: 0,
    x: "-100%",
    ease: "easeOut",
    duration: 0.2,
    type: "tween",
  },
  hover: {
    x: "50%",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
