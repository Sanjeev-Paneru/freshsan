import Image from "next/image";
import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { SlBadge, SlLike } from "react-icons/sl";
import banner from "@/assets/banner/whychoicebanner.jpg";

export default function WhyChoice() {
  return (
    <div className="w-full h-auto lg:h-[85vh] bg-gray-900 mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between relative gap-8">
      <div className="absolute inset-0 z-0">
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="banner"
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-blue-800 opacity-90"></div>
      <div className="container z-10 mx-auto py-12">
        <div className="flex flex-col justify-center items-center space-y-7 text-center">
          <h3 className="text-lg font-semibold text-white">Why Choose Us</h3>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white md:w-[550px] w-full">
            Taste the difference with FreshSan hormone-free milk.
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-blue-500 mb-4 bg-white rounded-full p-5 shadow-lg">
                <SlBadge size={40} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Uncompromising Quality
              </h3>
              <p className="text-slate-200 mt-2 text-sm md:text-base">
                Our brand is built on a foundation of uncompromising quality,
                ensuring excellence in every detail.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-blue-500 mb-4 bg-white rounded-full p-5 shadow-lg">
                <IoDiamondOutline size={40} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Farm-Fresh Goodness
              </h3>
              <p className="text-slate-200 mt-2 text-sm md:text-base">
                Experience the taste of farm-fresh goodness in every bite.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-blue-500 mb-4 bg-white rounded-full p-5 shadow-lg">
                <PiShoppingCartSimple size={40} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Health and Wellness
              </h3>
              <p className="text-slate-200 mt-2 text-sm md:text-base">
                Prioritize your life with a commitment to health and wellness.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-blue-500 mb-4 bg-white rounded-full p-5 shadow-lg">
                <SlLike size={40} />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Customer Satisfaction
              </h3>
              <p className="text-slate-200 mt-2 text-sm md:text-base">
                Customer satisfaction is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
