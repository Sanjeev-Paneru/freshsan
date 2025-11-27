"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  distance?: number;
  offsetStart?: number;
  offsetEnd?: number;
}

export default function SmoothScroll({
  children,
  distance = 60,
  offsetStart = 0.1,
  offsetEnd = 0.8,
}: SmoothScrollProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offsetStart, offsetEnd],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
