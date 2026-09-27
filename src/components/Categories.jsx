import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" },
  { name: "Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600" },
  { name: "Home & Living", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600" },
  { name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600" },
  { name: "Electronics", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600" },
];

export default function Categories() {
  return (
    <section className="py-8">

      <h2 className="mb-5 text-2xl font-bold">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

        {categories.map((category) => (

          <div
            key={category.name}
            className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >

            <div className="h-40 overflow-hidden sm:h-48">

              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

            </div>

            <div className="p-3 text-center">

              <h3 className="font-bold">
                {category.name}
              </h3>

              <button className="mx-auto mt-1 flex items-center gap-1 text-xs font-semibold text-gray-600">
                Shop Now
                <ArrowRight size={13} />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}