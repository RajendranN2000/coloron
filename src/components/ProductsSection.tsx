import React from "react";
import { FiArrowRight } from "react-icons/fi";
type Product = {
  title: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    title: "Injection Printing",
    description:
      "High-precision injection printing solutions for industrial applications with exceptional durability and clarity.",
    image: "/images/our_product_1.jpg",
  },
  {
    title: "Flex Printing",
    description:
      "Large-format flex printing for banners, signage, and outdoor advertising with vibrant colors and weather resistance.",
    image: "/images/our_product_2.png",
  },
  {
    title: "Customized Printing Solutions",
    description:
      "Tailored printing services designed to meet your specific business requirements and brand identity.",
    image: "/images/our_product_3.png",
  },
  {
    title: "Industrial Print Applications",
    description:
      "Comprehensive industrial printing solutions for manufacturing, packaging, and commercial use.",
    image: "/images/our_product_4.png",
  },
];

const ProductCard: React.FC<Product> = ({ title, description, image }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#FEF7FF] shadow-sm border border-gray-200 group hover:shadow-md transition">
      {/* Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-blue-600 font-medium cursor-pointer">
            Learn More
          </span>

          <FiArrowRight className="text-blue-600 w-5 h-5 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </div>
  );
};

const ProductsSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-gray-900">Our </span>
          <span className="text-blue-600">Products</span>
        </h2>

        <p className="text-gray-600 mt-4">
          We offer a range of professional printing solutions designed to meet
          industrial and commercial needs.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
