import { Link } from "react-router-dom";

const ProductHero = () => {
  return (
    <div className="container mx-auto px-4 md:px-24 mt-6">
      <div
        className="rounded-2xl p-8 md:p-12 text-white bg-cover bg-center relative bg-[#000000]"
      >
        <div className="absolute inset-0 bg-black/70 rounded-2xl" />

        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-semibold mb-3">Our Printing Materials & Applications</h1>
          <p className="text-gray-200 mb-8">
            At Color on Print, we use high-quality, industry-grade materials to deliver durable, vibrant, and customized printing solutions for every business and personal need.          </p>

          <Link
            to="/contact"
            className="bg-white text-[#155DFC] px-6 py-3 rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
