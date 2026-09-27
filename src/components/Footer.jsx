import {
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size} height={props.size}>
      <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.4c0-.9.3-1.6 1.6-1.6h1.7V2.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.5H7.4v3.2h2.7V21h3.4z" />
    </svg>
  );
}

function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={props.size} height={props.size}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Twitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={props.size} height={props.size}>
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.6.8-2.6 1a4 4 0 0 0-6.9 3.7 11.5 11.5 0 0 1-8.4-4.3 4 4 0 0 0 1.2 5.4c-.7 0-1.3-.2-1.9-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.6a11.4 11.4 0 0 0 6.3 1.9c7.5 0 11.7-6.4 11.7-11.9v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-8">

      <div className="bg-white">

        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>

            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-orange-500 p-2 text-white">
                <ShoppingCart size={20} />
              </div>
              <h2 className="text-xl font-black">
                Shop<span className="text-orange-500">Ease</span>
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Your one-stop destination for quality products at
              unbeatable prices.
            </p>

            <div className="mt-5 flex gap-4">
              <Facebook size={18} />
              <Instagram size={18} />
              <Twitter size={18} />
            </div>

          </div>

          <div>
            <h3 className="font-bold">QUICK LINKS</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>New In</li>
              <li>Best Sellers</li>
              <li>Deals</li>
              <li>Track Order</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">CUSTOMER CARE</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>FAQs</li>
              <li>Shipping Policy</li>
              <li>Returns & Refunds</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">CONTACT US</h3>
            <div className="mt-4 space-y-4 text-sm text-gray-500">
              <div className="flex gap-3">
                <Mail size={18} />
                <span>support@shopease.com</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  123 Commerce St,
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="bg-[#062719] py-5 text-center text-xs text-gray-300">
        © 2026 ShopEase. All rights reserved.
      </div>

    </footer>
  );
}