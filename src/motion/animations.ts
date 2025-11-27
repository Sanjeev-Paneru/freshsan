import { Variants } from "framer-motion";

// Enhanced zoom animation for background
export const zoomFade: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth entry
    },
  },
};

// Dramatic slide with bounce for text
export const slideLeftBounce: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1], // Bounce easing
      delay: 0.3,
    },
  },
};

// Floating animation for logo
export const floatingScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 30,
    rotate: -5,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2,
    },
  },
};

// Gradient overlay sweep
export const gradientSweep: Variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

// Enhanced stagger for content
export const staggerHero: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

// Text reveal with blur
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Button with magnetic effect preparation
export const buttonPop: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.1,
    },
  },
};

// Shine effect variant
export const shine: Variants = {
  hidden: { x: "-100%" },
  show: {
    x: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};
