import React from "react";

type ImageCardProps = {
  src: string;
  alt?: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className="w-full h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-sm">
      <img
        src={src}
        alt={alt || "gallery"}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const GallerySection: React.FC = () => {
  const images = [
    "/images/image_1.jpg",
    "/images/image_2.jpg",
    "/images/image_3.jpg",
    "/images/image_4.jpg",
  ];

  return (
    <section className="container mx-auto px-4 md:px-24 pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
