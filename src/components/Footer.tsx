import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 md:px-24 py-12">
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
            <Link to="/" className="hover:text-gray-800 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-800 transition">About</Link>
            <Link to="/products" className="hover:text-gray-800 transition">Products</Link>
            <GalleryLink />
            <Link to="/contact" className="hover:text-gray-800 transition">Contact</Link>
          </div>

          {/* Right - Contact */}
          <div className="space-y-3 md:text-right">
            <p>No.73-A, 2nd street Extension, 100 feet road, Gandhipuram, Coimbatore</p>
            <p>+91 73563 19828</p>
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

function GalleryLink() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToGallery = () => {
    const scrollTo = () => {
      const el = document.getElementById('our-work');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollTo, 120);
    } else {
      scrollTo();
    }
  };

  return (
    <button onClick={goToGallery} className="hover:text-gray-800 transition">
      Gallery
    </button>
  );
}
