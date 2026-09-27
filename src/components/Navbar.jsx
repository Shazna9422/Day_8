import {
  Menu,
  Search,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between gap-4">

          <div className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
              <ShoppingCart size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">
                Shop<span className="text-orange-500">Ease</span>
              </h1>
              <p className="text-[10px] text-gray-500">
                Shop Smart. Live Better.
              </p>
            </div>
          </div>

          <div className="hidden max-w-md flex-1 lg:flex">
            <div className="flex w-full items-center rounded-lg border bg-gray-50 px-4">
              <Search size={19} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent px-3 py-3 text-sm outline-none"
              />
            </div>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <a href="#" className="text-sm hover:text-orange-500">New In</a>
            <a href="#" className="text-sm hover:text-orange-500">Women</a>
            <a href="#" className="text-sm hover:text-orange-500">Men</a>
            <a href="#" className="text-sm hover:text-orange-500">Home & Living</a>
            <a href="#" className="text-sm font-semibold text-orange-500">Deals</a>
          </nav>

          <div className="flex items-center gap-1">
            <button className="hidden rounded-lg p-2 hover:bg-gray-100 sm:block">
              <Heart size={21} />
            </button>
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <User size={21} />
            </button>
            <button className="relative rounded-lg p-2">
              <ShoppingCart size={21} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] text-white">
                2
              </span>
            </button>
            <button className="lg:hidden">
              <Menu size={25} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}