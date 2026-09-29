import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl bg-[#062719]">
      <div className="grid items-center md:grid-cols-2">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="p-7 sm:p-10 lg:p-14"
        >
          <motion.span
            variants={item}
            className="inline-block rounded-md bg-green-900 px-3 py-1.5 text-xs font-semibold text-white"
          >
            LIMITED TIME ONLY
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Shop More,
            <br />
            <span className="text-orange-500">Save More!</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-sm leading-6 text-gray-300 sm:text-base"
          >
            Discover amazing deals on your favorite products.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 grid grid-cols-3 gap-3 border-t border-white/20 pt-5"
          >
            <div>
              <p className="text-xs font-bold text-white">✓ Best Prices</p>
              <p className="text-[10px] text-gray-400">Guaranteed</p>
            </div>
            <div>
              <p className="text-xs font-bold text-white">✓ Secure</p>
              <p className="text-[10px] text-gray-400">Payments</p>
            </div>
            <div>
              <p className="text-xs font-bold text-white">✓ Fast Delivery</p>
              <p className="text-[10px] text-gray-400">Worldwide</p>
            </div>
          </motion.div>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-7 flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"
          >
            Explore Collection
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <ArrowRight size={17} />
            </motion.span>
          </motion.button>
        </motion.div>

        <div className="relative h-[330px] overflow-hidden md:h-[430px]">
          <motion.img
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1000"
            alt="Shopping"
            className="h-full w-full object-cover"
          />

          <motion.div
            initial={{ scale: 0, rotate: -60 }}
            animate={{ scale: [0, 1.2, 1], rotate: 6 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            whileHover={{ scale: 1.12, rotate: -4 }}
            className="absolute right-7 top-8 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-center text-sm font-black text-white shadow-xl"
          >
            UP TO
            <br />
            50%
            <br />
            OFF
          </motion.div>
        </div>

      </div>
    </section>
  );
}