import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl bg-[#062719]">

      <div className="grid items-center md:grid-cols-2">

        <div className="p-7 sm:p-10 lg:p-14">

          <span className="inline-block rounded-md bg-green-900 px-3 py-1.5 text-xs font-semibold text-white">
            LIMITED TIME ONLY
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Shop More,
            <br />
            <span className="text-orange-500">
              Save More!
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-gray-300 sm:text-base">
            Discover amazing deals on your favorite products.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/20 pt-5">

            <div>
              <p className="text-xs font-bold text-white">
                ✓ Best Prices
              </p>
              <p className="text-[10px] text-gray-400">
                Guaranteed
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-white">
                ✓ Secure
              </p>
              <p className="text-[10px] text-gray-400">
                Payments
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-white">
                ✓ Fast Delivery
              </p>
              <p className="text-[10px] text-gray-400">
                Worldwide
              </p>
            </div>

          </div>

          <button className="mt-7 flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600">
            Explore Collection
            <ArrowRight size={17} />
          </button>

        </div>

        <div className="relative h-[330px] md:h-[430px]">

          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1000"
            alt="Shopping"
            className="h-full w-full object-cover"
          />

          <div className="absolute right-7 top-8 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-orange-500 text-center text-sm font-black text-white shadow-xl">
            UP TO
            <br />
            50%
            <br />
            OFF
          </div>

        </div>

      </div>

    </section>
  );
}