import React from "react";
import { FaTruck, FaLeaf, FaMapMarkerAlt } from "react-icons/fa";

export default function Fields() {
  return (
    <div className="container py-20">
      <div className="flex flex-col sm:flex-row justify-between items-center px-10 space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="animate-slide-in-left p-6 bg-white text-slate-600 rounded-lg shadow-2xl w-full sm:w-[370px]">
          <div className="mb-4 flex flex-col justify-center gap-2 items-center">
            <div className="h-16 w-16 rounded-full flex justify-center p-3 items-center bg-blue-500">
              <FaTruck className="text-3xl mb-2 text-white" />
            </div>
            <h2 className="text-xl font-bold">Local Farmer</h2>
          </div>
          <p className="text-sm text-center">
            The local farmer works tirelessly to grow and cultivate fresh
            produce, ensuring that the community has access to high-quality,
            organic products.
          </p>
        </div>
        <div className="animate-fade-in p-6 bg-secondary text-white rounded-lg shadow-2xl w-full sm:w-[370px] z-20">
          <div className="mb-4 flex flex-col justify-center gap-2 items-center">
            <div className="h-16 w-16 rounded-full flex justify-center p-3 items-center bg-white">
              <FaLeaf className="text-3xl mb-2 text-blue-500" />
            </div>
            <h2 className="text-xl font-bold">Dairy Product</h2>
          </div>
          <p className="text-sm text-center">
            Dairy products, made from milk, are a staple in many diets around
            the world. They include a variety of items such as milk, cheese,
            yogurt, and butter.
          </p>
        </div>
        <div className="animate-slide-in-right p-6 bg-white text-slate-600 rounded-lg shadow-2xl w-full sm:w-[370px]">
          <div className="mb-4 flex flex-col justify-center gap-2 items-center">
            <div className="h-16 w-16 rounded-full flex justify-center pt-1 items-center bg-blue-500">
              <FaMapMarkerAlt className="text-3xl mb-2 text-white" />
            </div>
            <h2 className="text-xl font-bold">Tour Destination</h2>
          </div>
          <p className="text-sm text-center">
            The region is home to a variety of scenic and culturally rich
            tourist destinations. From picturesque landscapes to historical
            landmarks.
          </p>
        </div>
      </div>
    </div>
  );
}
