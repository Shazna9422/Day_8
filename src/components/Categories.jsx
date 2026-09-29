import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" },
  { name: "Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600" },
  { name: "Home & Living", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600" },
  { name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600" },
  { name: "Electronics", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Categories() {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-2xl font-bold"
      >
        Shop By Category
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {categories.map((category) => (
          <motion.div
            key={category.name}
            variants={item}
            whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
            className="group overflow-hidden rounded-xl bg-white shadow-sm"
          >
            <div className="h-40 overflow-hidden sm:h-48">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-3 text-center">
              <h3 className="font-bold">{category.name}</h3>
              <button className="mx-auto mt-1 flex items-center gap-1 text-xs font-semibold text-gray-600 transition group-hover:text-orange-500">
                Shop Now
                <ArrowRight
                  size={13}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}