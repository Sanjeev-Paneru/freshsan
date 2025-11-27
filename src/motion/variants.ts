import { Variants, Transition } from "framer-motion";

export const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

export const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.995, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9 },
  },
};

export const springHover: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};
