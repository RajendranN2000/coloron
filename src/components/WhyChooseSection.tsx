import React from 'react';

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: "images/Container_1.png",
      title: "Advanced Printing Technology",
      description: "Modern machinery ensuring precision and consistency."
    },
    {
      icon: "images/Container_2.png",
      title: "Premium Quality Output",
      description: "High standards maintained across every print."
    },
    {
      icon: "images/Container_3.png",
      title: "Industry Expertise",
      description: "Experience-driven processes and skilled professionals."
    },
    {
      icon: "images/Container_4.png",
      title: "Reliable & Timely Delivery",
      description: "Committed to deadlines without compromising quality."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#155DFC]"> Color On </span>Print House
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center pb-2">
                <img src={feature.icon} alt="" className='w-12' />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
