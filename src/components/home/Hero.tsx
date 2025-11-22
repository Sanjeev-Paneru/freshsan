import Image from "next/image";
import React from "react";
import banner from "@/assets/banner/dairy-banner1.jpg";
import logo2 from "@/assets/banner/dairy banner.png";

export default function Hero() {
  return (
    <section className="relative h-[85vh] mb-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src={banner}
          alt="FreshSan dairy background"
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          quality={75}
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-5 bg-linear-to-r from-blue-600/80 via-transparent to-transparent" />

      <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
        <div className="max-w-full h-auto ">
          <Image
            src={logo2}
            alt="FreshSan logo"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            quality={75}
            className="w-full h-auto object-center"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto relative z-20 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:max-w-[65%] xl:max-w-[55%] text-white py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-tight">
            Discover the goodness of{" "}
            <span className="text-yellow-400">FreshSan</span> dairy products
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 max-w-xl">
            Open to opportunities, fostering growth with care and precision.
            Guided by expertise, building trust and excellence in every step we
            take.
          </p>

          <button
            className="
    group relative flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
    px-8 py-4 md:px-10 md:py-5
    text-white text-lg md:text-xl font-semibold
    rounded-full shadow-lg hover:shadow-2xl
    transition-all duration-300 hover:scale-105
    focus:ring-4 focus:ring-blue-300
    overflow-hidden
  "
          >
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

            <span className="relative z-10">Discover more</span>
          </button>
        </div>
      </div>
    </section>
  );
}
