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
    <div className="container mx-auto py-16 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="relative p-7 flex-1 flex justify-center w-full lg:w-1/2">
          <div className="animate-slide-in-left">
            <Image
              src={sampleImage}
              alt="Who We Are"
              className="rounded-lg shadow-lg"
              layout="responsive"
              width={400}
              height={300}
              quality={100}
            />
          </div>
          <div className="animate-slide-up absolute bottom-[-30px] right-2.5 z-10">
            <Image
              src={overlayImage}
              alt="Overlay Image"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={300}
              height={200}
              quality={100}
            />
          </div>
        </div>
        <div className="flex-1 w-full lg:w-1/2 p-7">
          <h2 className="text-[15px]  text-blue-400 font-semibold mb-4 text-center lg:text-left">
            Who We Are
          </h2>
          <p className="text-[35px] font-semibold text-blue-800 mb-4 text-center lg:text-left">
            Discover the health benefits of organic dairy products with
            FreshSan.
          </p>
          <p className=" border-l-4 font-medium border-blue-400 pl-5 text-sm sm:text-base text-gray-500 mb-4 text-center lg:text-left">
            We source our dairy from trusted local farmers who prioritize
            quality and care for their livestock. Every product is crafted with
            dedication to ensure freshness and natural goodness.
          </p>
          <p className="text-sm font-medium sm:text-base text-gray-400 text-center lg:text-left">
            From creamy milk to rich butter and flavorful yogurt, FreshMoo
            offers a variety of options for every taste. Join us in embracing
            healthier choices and supporting sustainable practices.
          </p>
          <div className="flex items-center  mt-5 space-x-4">
            <button className="px-8 py-4 bg-blue-900 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-500  transition">
              Discover More
            </button>

            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={toggleIframe}
                className="w-12 h-12 bg-slate-200 text-blue-500 rounded-full z-10 shadow-2xl flex items-center justify-center  transform transition-all duration-300 ease-in-out "
              >
                <FaPlay size={18} />
              </button>

              {showIframe && (
                <div
                  className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                  onClick={() => setShowIframe(false)}
                >
                  <div
                    className="w-[700px] h-[400px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
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
