import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600">
      <div className=" mx-auto px-24 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Left - Logo & Description */}
          <div>
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="Color On Print House"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-500 max-w-sm">
              Professional printing solutions crafted with precision,
              innovation, and excellence.
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col space-y-3 ">
            <Link to="/" className="hover:text-gray-800 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-800 transition">
              About
            </Link>
            <Link to="/products" className="hover:text-gray-800 transition">
              Products
            </Link>
            <Link to="/gallery" className="hover:text-gray-800 transition">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-gray-800 transition">
              Contact
            </Link>
          </div>

          {/* Right - Contact */}
          <div className="space-y-3 md:text-right">
            <p>[Address to be updated]</p>
            <p>[Phone Number]</p>
            <p>[Email Address]</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500">
          © 2026 Color On Print House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
