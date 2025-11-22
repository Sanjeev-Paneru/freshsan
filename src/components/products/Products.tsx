import SingleProduct from "./SingleProducts";
import { products } from "@/data/product";

export default function FeatureProduct() {
  const featuredProducts = products;

  return (
    <div className="py-10 mb-20">
      <div className="container  ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-primary font-medium text-4xl">
            <span className="text-yellow-400">Featueres</span> Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
