import { ArrowRight } from "lucide-react";

export default function DealOfDay() {
  return (
    <section className="overflow-hidden rounded-2xl bg-[#fff0e7]">

      <div className="grid items-center md:grid-cols-2">

        <div className="p-7 sm:p-10">

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

          <button className="mt-5 flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600">
            Shop The Deal
            <ArrowRight size={17} />
          </button>

        </div>

        <div className="flex items-center gap-5 bg-white p-6">

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
            alt="Smart Watch"
            className="h-40 w-40 object-contain"
          />

          <div>

            <h3 className="font-bold">
              Smart Watch Pro
            </h3>

            <p className="text-xs text-gray-500">
              Fitness & Health Tracking
            </p>

            <div className="mt-3">
              <span className="text-xl font-black text-orange-500">
                $59.99
              </span>

              <span className="ml-2 text-xs text-gray-400 line-through">
                $119.99
              </span>
            </div>

            <p className="mt-2 text-xs font-semibold">
              Only 23 items left!
            </p>

            <div className="mt-2 h-2 w-36 rounded-full bg-gray-200">
              <div className="h-2 w-24 rounded-full bg-orange-500" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}