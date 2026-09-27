import { Heart, ShoppingCart } from "lucide-react";
import { products } from "../data/products";

export default function NewArrivals() {
  return (
    <section className="py-8">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          New Arrivals
        </h2>

        <button className="text-sm font-semibold text-orange-500">
          View All →
        </button>

      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

        {products.map((product) => (

          <div
            key={product.id}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm"
          >

            <span className="absolute left-3 top-3 z-10 rounded-md bg-black px-2 py-1 text-[10px] font-bold text-white">
              NEW
            </span>

            <button className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-sm">
              <Heart size={16} />
            </button>

            <div className="h-52 overflow-hidden bg-gray-50">

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

            </div>

            <div className="p-4">

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center justify-between">

                <p className="font-bold">
                  ${product.price}
                </p>

                <button className="rounded-lg border p-2 hover:bg-orange-500 hover:text-white">
                  <ShoppingCart size={16} />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}