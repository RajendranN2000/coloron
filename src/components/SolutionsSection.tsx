import React from "react";

const OurSolutions: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-24">
      <div className="container mx-auto max-w-4xl text-center px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Our <span className="text-blue-600">Solutions</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          From industrial printing to customized solutions, our products are
          designed to meet professional and commercial printing needs with
          accuracy and reliability.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="rounded-xl bg-[#155DFC] px-8 py-4 text-lg font-medium text-white shadow-md transition hover:bg-blue-700">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
