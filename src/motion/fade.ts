export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0
) => {
  const offset = 30;

  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

export const fadeOut = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0
) => {
  const offset = 30;

  const axis = direction === "left" || direction === "right" ? "x" : "y";

  const value = direction === "up" || direction === "left" ? -offset : offset;

  return {
    hidden: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    show: {
      opacity: 0,
      x: axis === "x" ? value : 0,
      y: axis === "y" ? value : 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeIn",
      },
    },
  };
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
