import { motion } from "framer-motion";
import {
  Truck,
  RotateCcw,
  Award,
  Headphones,
} from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", text: "On orders over $75" },
  { icon: RotateCcw, title: "Easy Returns", text: "30-day returns" },
  { icon: Award, title: "Premium Quality", text: "100% original products" },
  { icon: Headphones, title: "24/7 Support", text: "We're here to help" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="mt-4 rounded-xl bg-white p-4 shadow-sm">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 divide-x md:grid-cols-4"
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 px-3 py-3"
            >
              <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
                <Icon size={25} className="shrink-0" />
              </motion.div>
              <div>
                <p className="text-xs font-bold sm:text-sm">{feature.title}</p>
                <p className="text-[10px] text-gray-500">{feature.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}