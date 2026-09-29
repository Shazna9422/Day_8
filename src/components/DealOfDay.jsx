import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DealOfDay() {
  return (
    <section className="overflow-hidden rounded-2xl bg-[#fff0e7]">
      <div className="grid items-center md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-7 sm:p-10"
        >
          <p className="text-sm font-bold uppercase text-orange-600">
            Deal Of The Day
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Grab It Before
            <br />
            It's Gone!
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Hurry! Limited stock available.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"
          >
            Shop The Deal
            <ArrowRight size={17} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-5 bg-white p-6"
        >
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
            alt="Smart Watch"
            className="h-40 w-40 object-contain"
          />

          <div>
            <h3 className="font-bold">Smart Watch Pro</h3>
            <p className="text-xs text-gray-500">Fitness & Health Tracking</p>

            <div className="mt-3">
              <span className="text-xl font-black text-orange-500">$59.99</span>
              <span className="ml-2 text-xs text-gray-400 line-through">
                $119.99
              </span>
            </div>

            <p className="mt-2 text-xs font-semibold">Only 23 items left!</p>

            <div className="mt-2 h-2 w-36 overflow-hidden rounded-full bg-gray-200">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "66%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-2 rounded-full bg-orange-500"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}