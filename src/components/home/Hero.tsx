"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import {
  zoomFade,
  floatingScale,
  gradientSweep,
  staggerHero,
  textReveal,
  buttonPop,
} from "@/motion/animations";

import banner from "@/assets/banner/dairy-banner1.jpg";
import logo2 from "@/assets/banner/dairy banner.png";

export default function Hero() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      key={pathname}
      className="relative h-[85vh] mb-20 overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        variants={zoomFade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <div className="relative w-full h-[120%]">
          <Image
            src={banner}
            alt="FreshSan dairy background"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            quality={85}
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>
      <motion.div
        variants={gradientSweep}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="absolute inset-0 -z-5 bg-linear-to-r from-blue-600/85 via-blue-500/40 to-transparent"
      />

      <motion.div
        style={{
          scale: logoScale,
          opacity: logoOpacity,
        }}
        variants={floatingScale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none"
      >
        <div className="relative w-full  h-auto ">
          <Image
            src={logo2}
            alt="FreshSan logo"
            width={1200}
            height={400}
            quality={85}
            className="w-full h-auto object-bottom-0 drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Content with enhanced stagger */}
      <motion.div
        variants={staggerHero}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto relative z-20 h-full flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full lg:max-w-[65%] xl:max-w-[55%] text-white py-10">
          {/* Heading with text reveal */}
          <motion.h1
            variants={textReveal}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg"
          >
            Discover the goodness of{" "}
            <motion.span
              className="relative inline-block text-yellow-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              FreshSan
              {/* Underline animation */}
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-yellow-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </motion.span>{" "}
            dairy products
          </motion.h1>

          {/* Paragraph with fade */}
          <motion.p
            variants={textReveal}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-8 max-w-xl leading-relaxed drop-shadow-md"
          >
            Open to opportunities, fostering growth with care and precision.
            Guided by expertise, building trust and excellence in every step we
            take.
          </motion.p>

          {/* Enhanced button with multiple effects */}
          <motion.button
            variants={buttonPop}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="
              group relative flex items-center justify-center gap-3
              bg-linear-to-r from-blue-500 via-blue-600 to-blue-500
              bg-size-[200%_100%]
              px-8 py-4 md:px-10 md:py-5
              text-white text-lg md:text-xl font-semibold
              rounded-full shadow-2xl
              transition-all duration-300
              focus:ring-4 focus:ring-blue-300/50 focus:outline-none
              overflow-hidden
              backdrop-blur-sm
            "
          >
            {/* Animated gradient background */}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            />

            {/* Shimmer effect */}
            <motion.span
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              Discover more
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent z-15" />
    </section>
  );
}
