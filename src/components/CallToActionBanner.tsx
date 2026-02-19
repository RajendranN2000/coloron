import React from 'react';

const CallToActionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#63119E]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Looking for dependable and high-quality printing solutions?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
          Get in touch with us today.       
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
