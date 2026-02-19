import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <div className="container mx-auto px-4 md:px-24 mt-6">
      <div
        className="rounded-2xl p-8 md:p-12 text-white bg-cover bg-center relative bg-[#000000]"
      >
        <div className="absolute inset-0 bg-black/70 rounded-2xl" />

        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-semibold mb-3">About Us</h1>
          <p className="text-gray-200 mb-8">
            Where Quality Meets Reliability in Every Print.
          </p>

          <Link
            to="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
