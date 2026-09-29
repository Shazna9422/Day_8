import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { products } from "../data/products";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NewArrivals() {
  return (
    <section className="py-8">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex items-center justify-between"
      >
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <button className="text-sm font-semibold text-orange-500">
          View All →
        </button>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={item}
            whileHover={{ y: -8, boxShadow: "0 14px 28px rgba(0,0,0,0.15)" }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm"
          >
            <span className="absolute left-3 top-3 z-10 rounded-md bg-black px-2 py-1 text-[10px] font-bold text-white">
              NEW
            </span>

            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-sm hover:text-red-500"
            >
              <Heart size={16} />
            </motion.button>

            <div className="h-52 overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>

              <div className="mt-2 flex items-center justify-between">
                <p className="font-bold">${product.price}</p>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                  className="rounded-lg border p-2 hover:bg-orange-500 hover:text-white"
                >
                  <ShoppingCart size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}