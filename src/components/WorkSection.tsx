import React from "react";

type WorkItem = {
  image: string;
};

const works: WorkItem[] = [
  { image: "  images/work_1.jpg" },
  { image: "  images/work_2.jpg" },
  { image: "  images/work_3.jpg" },
  { image: "  images/work_4.jpg" },
  { image: "  images/work_5.jpg" },
  { image: "  images/work_6.jpg" },
  { image: "  images/work_7.jpg" },
  { image: "  images/work_8.jpg" },
  { image: "  images/work_9.jpg" },
  { image: "  images/work_10.jpg" },
  { image: "  images/work_11.jpg" },
  { image: "  images/work_12.jpg" },
];

const WorkCard: React.FC<WorkItem> = ({ image }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm bg-white group">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt="our work"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

const OurWorkSection: React.FC = () => {
  return (
    <section id="our-work" className="w-full py-16 px-4 md:px-24 bg-gray-50">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-gray-900">Our </span>
          <span className="text-blue-600">Work</span>
        </h2>

        <p className="text-gray-600 mt-4">
          A glimpse into our printing capabilities and completed projects.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {works.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;
