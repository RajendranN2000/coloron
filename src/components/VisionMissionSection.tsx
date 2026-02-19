import React from "react";
import { FiEye } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
};

const InfoCard: React.FC<CardProps> = ({
  title,
  description,
  icon,
  iconBg,
  iconColor,
}) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200 w-full">
      <div className="flex items-center gap-5 mb-6">
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full ${iconBg}`}
        >
          <span className={`text-3xl ${iconColor}`}>{icon}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {title}
        </h3>
      </div>

      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
};

const VisionMissionSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <InfoCard
        title="Our Vision"
        description="To be a trusted printing partner recognized for quality, precision, and professionalism."
        icon={<FiEye />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <InfoCard
        title="Our Mission"
        description="To deliver premium printing solutions using advanced technology, skilled expertise, and a commitment to excellence in every detail."
        icon={<FiTarget />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />
    </section>
  );
};

export default VisionMissionSection;
