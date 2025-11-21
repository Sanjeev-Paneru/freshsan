import Image from "next/image";
import React from "react";
import banner from "@/assets/banner/dairy-banner1.jpg";

export default function BannerTwo() {
  return (
    <div>
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="flex justify-center items-center">
          <Image
            src={banner}
            alt="FreshMoo Dairy Banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="absolute inset-0 z-0"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-linear-to-r from-blue-800 via-transparent to-transparent"></div>

        <div className="relative z-20 container text-white text-left flex flex-col justify-center items-center md:items-start md:max-w-screen-sm md:absolute md:left-10 lg:left-20 xl:left-32 top-1/2 transform -translate-y-1/2 md:px-12 rounded-xl py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Support local farmers and choose FreshMoo for your dairy needs.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Luctus cursus libero nascetur quam risus rhoncus nulla tempus.
            Cursus elit potenti nunc consectetuer primis libero condimentum
            adipiscing conubia tempus.
          </p>
          <button
            className="bg-blue-500 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
            aria-label="Shop Now"
          >
            Shop Now!
          </button>
        </div>
      </div>

      {/* Updated second div positioning */}
      <div className="relative z-20 -mt-20 mx-auto w-[90%] max-w-5xl px-7 py-10 bg-white border-2 border-blue-100 rounded-3xl flex justify-center items-center gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500">14K+</h1>
          <p className="text-sm md:text-base text-blue-800">Happy Customers</p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500">10K+</h1>
          <p className="text-sm md:text-base text-blue-800">Company Support</p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500">421+</h1>
          <p className="text-sm md:text-base text-blue-800">Customer Ratings</p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500">4.7</h1>
          <p className="text-sm md:text-base text-blue-800">Average Rating</p>
        </div>
      </div>
    </div>
  );
}
