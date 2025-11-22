import Image from "next/image";
import React from "react";
import banner from "@/assets/banner/dairy-banner1.jpg";

export default function BannerTwo() {
  return (
    <div className="mb-20">
      {/* Banner Section */}
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image
          src={banner}
          alt="FreshMoo Dairy Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 z-10 bg-linear-to-r from-blue-800 via-transparent to-transparent"></div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-white flex flex-col justify-center items-center md:items-start md:max-w-3xl top-1/2 left-1/2 md:left-12 lg:left-20 xl:left-32 transform -translate-y-1/2 rounded-xl py-6 sm:py-8 md:py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-center md:text-left">
            Support local farmers and choose FreshMoo for your dairy needs.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-center md:text-left">
            Luctus cursus libero nascetur quam risus rhoncus nulla tempus.
            Cursus elit potenti nunc consectetuer primis libero condimentum
            adipiscing conubia tempus.
          </p>
          <button
            className="bg-blue-500 text-black font-semibold px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full shadow-md hover:bg-blue-600 transition"
            aria-label="Shop Now"
          >
            Shop Now!
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 -mt-16 sm:-mt-20 mx-auto w-[90%] max-w-6xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 bg-white border-2 border-blue-100 rounded-3xl flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8">
        <div className="text-center sm:text-left flex-1 min-w-[120px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
            14K+
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-800">
            Happy Customers
          </p>
        </div>
        <div className="text-center sm:text-left flex-1 min-w-[120px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
            10K+
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-800">
            Company Support
          </p>
        </div>
        <div className="text-center sm:text-left flex-1 min-w-[120px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
            421+
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-800">
            Customer Ratings
          </p>
        </div>
        <div className="text-center sm:text-left flex-1 min-w-[120px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
            4.7
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-blue-800">
            Average Rating
          </p>
        </div>
      </div>
    </div>
  );
}
