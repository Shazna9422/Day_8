import { Truck, Tag } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#062719] px-4 py-3 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-xs sm:text-sm">

        <div className="flex items-center gap-2">
          <Truck className="text-orange-500" size={18} />

          <div>
            <p className="font-bold">FREE SHIPPING</p>
            <p className="text-gray-300">
              On orders over $75
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Tag className="text-orange-500" size={18} />

          <div>
            <p className="font-bold">EXTRA 10% OFF</p>
            <p className="text-gray-300">
              On prepaid orders
            </p>
          </div>
        </div>

        <button className="underline">
          View in Browser
        </button>

      </div>
    </div>
  );
}