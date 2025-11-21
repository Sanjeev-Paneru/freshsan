import Image from "next/image";
import React from "react";
import { Product } from "@/types/product";

type SingleProductProps = {
  product: Product;
};

export default function SingleProduct({ product }: SingleProductProps) {
  return (
    <div className="group max-w-[280px] mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          height={300}
          width={300}
          quality={90}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Price Badge */}
        <span className="absolute top-3 right-3 text-sm font-bold text-white py-1.5 px-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 shadow-lg">
          Rs.{product.price.toLocaleString()}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Buy Now
          </button>
          <button className="p-2.5 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
