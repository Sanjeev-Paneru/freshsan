export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const scaleOut = {
  hidden: { opacity: 1, scale: 1 },
  show: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.45, ease: "easeIn" },
  },
};

export const scaleUp = {
  hidden: { scale: 0.8 },
  show: {
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const scaleDown = {
  hidden: { scale: 1.2 },
  show: {
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
