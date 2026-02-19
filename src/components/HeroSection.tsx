import React from "react";
import { Link } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineShieldCheck, HiOutlineBadgeCheck } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";

/**
 * Place your hero image in /public/Frame 2.png
 * Uses react-icons instead of lucide-react
 */

const PrintingHero: React.FC = () => {
  return (
    <section className="w-full px-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-black">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/Waterfall_Colors.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay to enhance contrast on left */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-8 pt-6">
          <Link to="/" className="text-white font-semibold tracking-wide">
            Logo
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <Link to="/" className="hover:text-white text-white  transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <button
              onClick={() => {
                const el = document.getElementById('our-work');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-white transition-colors"
            >
              Gallery
            </button>

            <div className="flex items-center gap-1">
              <FiGlobe size={16} />
              <span>Eng</span>
            </div>

            <Link to="/#contact" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow hover:bg-white/90 transition-colors">
              Contact us
            </Link>
          </nav>
        </header>

        {/* Content */}
        <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-8 py-16 md:px-12 lg:px-24">
          <div className="max-w-[640px]">
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-5xl">
              Precision Printing. Premium Quality. Reliable Delivery.
            </h1>

            <p className="mt-5 text-sm text-white md:text-base">
              High-quality printing solutions crafted with advanced technology and
              attention to detail.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col lg:flex-row items-center gap-4">
              <Link to="/products" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow hover:bg-white/90 transition-colors">
                View Products
              </Link>

              <Link to="/#contact" className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom badges */}
        <div className="relative z-10 flex flex-wrap items-center gap-6 border-t border-white/10 px-8 py-5 text-xs text-white/70 md:px-12">
          <div className="flex items-center gap-2">
            <HiOutlineShieldCheck size={18} />
            <span>Precision Printing</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineBadgeCheck size={18} />
            <span>Premium Quality</span>
          </div>

          <div className="flex items-center gap-2">
            <TbTruckDelivery size={18} />
            <span>Reliable Delivery.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingHero;
