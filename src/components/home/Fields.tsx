"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaTruck, FaLeaf, FaMapMarkerAlt } from "react-icons/fa";

export default function Fields() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.15, 0.4, 0.6], [200, 0, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.25, 0.4], [0.95, 1]);
  const card3Y = useTransform(scrollYProgress, [0.3, 0.6, 0.8], [400, 0, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.45, 0.6], [0.95, 1]);

  const cards = [
    {
      icon: FaTruck,
      title: "Local Farmer",
      description:
        "The local farmer works tirelessly to grow and cultivate fresh produce, ensuring that the community has access to high-quality, organic products.",
      bgColor: "bg-white",
      textColor: "text-slate-600",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      y: card1Y,
      opacity: card1Opacity,
      scale: useTransform(scrollYProgress, [0, 0.2], [0.95, 1]),
    },
    {
      icon: FaLeaf,
      title: "Dairy Product",
      description:
        "Dairy products, made from milk, are a staple in many diets around the world. They include a variety of items such as milk, cheese, yogurt, and butter.",
      bgColor: "bg-secondary",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-blue-500",
      y: card2Y,
      opacity: card2Opacity,
      scale: card2Scale,
    },
    {
      icon: FaMapMarkerAlt,
      title: "Tour Destination",
      description:
        "The region is home to a variety of scenic and culturally rich tourist destinations. From picturesque landscapes to historical landmarks.",
      bgColor: "bg-white",
      textColor: "text-slate-600",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      y: card3Y,
      opacity: card3Opacity,
      scale: card3Scale,
    },
    //give more cards if needed
  ];

  return (
    <div ref={containerRef} className="relative min-h-[300vh] mb-10 ">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="container text-center mb-12">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-primary mb-6"
          >
            <span className="text-yellow-400">Our Key</span> Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Explore our services and offerings that bring quality and
            sustainability to your community.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center px-4 sm:px-10 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              style={{
                y: card.y,
                opacity: card.opacity,
                scale: card.scale,
              }}
              className={`
                ${card.bgColor} ${card.textColor}
                p-6 rounded-lg shadow-2xl 
                w-full sm:w-[370px]
                ${index === 1 ? "z-20" : "z-10"}
              `}
            >
              <div className="mb-4 flex flex-col justify-center gap-2 items-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.2 + 0.3,
                  }}
                  viewport={{ once: false }}
                  className={`
                    h-16 w-16 rounded-full 
                    flex justify-center items-center
                    ${card.iconBg}
                  `}
                >
                  <card.icon className={`text-3xl ${card.iconColor}`} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: false }}
                  className="text-xl font-bold"
                >
                  {card.title}
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                viewport={{ once: false }}
                className="text-sm text-center leading-relaxed"
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
