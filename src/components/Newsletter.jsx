export default function Newsletter() {
  return (
    <section className="rounded-2xl bg-[#062719] p-6 text-white sm:p-8">

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <h2 className="text-xl font-bold">
            Get Exclusive Offers & Updates
          </h2>

          <p className="mt-1 text-sm text-gray-300">
            Sign up now and get 10% OFF on your first order!
          </p>
        </div>

        <div className="flex w-full max-w-md">

          <input
            type="email"
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-l-lg px-4 py-3 text-sm text-black outline-none"
          />

          <button className="rounded-r-lg bg-orange-500 px-5 text-sm font-bold hover:bg-orange-600">
            SUBSCRIBE
          </button>

        </div>

      </div>

    </section>
  );
}