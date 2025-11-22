"use client";
import Image from "next/image";
import sampleImage from "@/assets/banner/weare.jpg";
import overlayImage from "@/assets/banner/Are.jpg";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function WeAre() {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* Left Images */}
        <div className="relative p-4 sm:p-6 lg:p-7 flex-1 flex justify-center w-full lg:w-1/2">
          <div className="animate-slide-in-left w-full">
            <Image
              src={sampleImage}
              alt="Who We Are"
              className="rounded-lg shadow-lg w-full"
              layout="responsive"
              width={400}
              height={300}
              quality={100}
            />
          </div>

          <div className="animate-slide-up absolute bottom-[-25px] sm:bottom-[-30px] right-2 sm:right-4 lg:right-6 z-10">
            <Image
              src={overlayImage}
              alt="Overlay Image"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={250}
              height={170}
              quality={100}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full lg:w-1/2 p-4 sm:p-6 lg:p-7">
          <h2 className="text-[14px] sm:text-[15px] text-blue-400 font-semibold mb-3 sm:mb-4 text-center lg:text-left">
            Who We Are
          </h2>

          <p className="text-[28px] sm:text-[35px] leading-tight font-semibold text-blue-800 mb-4 text-center lg:text-left">
            Discover the health benefits of organic dairy products with
            FreshSan.
          </p>

          <p className="border-l-4 font-medium border-blue-400 pl-4 sm:pl-5 text-sm sm:text-base text-gray-500 mb-4">
            We source our dairy from trusted local farmers who prioritize
            quality and care for their livestock. Every product is crafted with
            dedication to ensure freshness and natural goodness.
          </p>

          <p className="text-sm font-medium sm:text-base text-gray-400 leading-relaxed text-center lg:text-left">
            From creamy milk to rich butter and flavorful yogurt, FreshMoo
            offers a variety of options for every taste. Join us in embracing
            healthier choices and supporting sustainable practices.
          </p>

          {/* Buttons Section */}
          <div className="flex items-center mt-6 sm:mt-8 space-x-4">
            <button
              className="
                group relative flex items-center justify-center gap-3
                bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
                px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
                text-white text-base sm:text-lg md:text-xl font-semibold
                rounded-full shadow-lg hover:shadow-2xl
                transition-all duration-300 hover:scale-105
                focus:ring-4 focus:ring-blue-300
                overflow-hidden
              "
            >
              <span
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent 
                -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              ></span>

              <span className="relative z-10">Discover more</span>
            </button>

            {/* Play Button */}
            <div className="flex flex-col items-center space-y-3">
              <button
                onClick={toggleIframe}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-200 text-blue-500 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
              >
                <FaPlay size={18} />
              </button>

              {/* Video Modal */}
              {showIframe && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
                  onClick={() => setShowIframe(false)}
                >
                  <div
                    className="w-full max-w-[700px] h-[350px] sm:h-[400px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/ytCEjBEGyDE"
                      title="YouTube Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
