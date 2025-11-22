import React from "react";
import Link from "next/link";
import SingleProduct from "./SingleProducts";
import { products } from "@/data/product";

export default function FeatureProduct() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container py-10 mb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-primary font-medium text-4xl">
          <span className="text-yellow-400">Featueres</span> Products
        </h2>
        <Link href="/products">
          <button
            className="
    group relative flex items-center justify-center gap-3
    bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
    px-5 py-2 md:px-5 md:py-3
    text-white text-lg md:text-xl font-semibold
    rounded-full shadow-lg hover:shadow-2xl
    transition-all duration-300 hover:scale-105
    focus:ring-4 focus:ring-blue-300
    overflow-hidden
  "
          >
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

            <span className="relative z-10">View All Products</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
