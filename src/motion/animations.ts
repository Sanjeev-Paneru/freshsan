// Smooth scale animation
export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: delay, ease: "easeOut" },
  },
});
