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

export default function Features() {
  return (
    <section className="mt-4 rounded-xl bg-white p-4 shadow-sm">

      <div className="grid grid-cols-2 divide-x md:grid-cols-4">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-center gap-3 px-3 py-3"
            >

              <Icon
                size={25}
                className="shrink-0"
              />

              <div>
                <p className="text-xs font-bold sm:text-sm">
                  {feature.title}
                </p>

                <p className="text-[10px] text-gray-500">
                  {feature.text}
                </p>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}