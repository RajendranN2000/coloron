import { BsArrowRight } from "react-icons/bs";

const materials = [
    {
        title: "Vinyl & Flex Prints",
        img: "images/product_1.png",
        desc: "Vinyl and flex are widely used for signage, branding, and promotions."
    },
    {
        title: "Normal Flex, Black Media, Star Flex & Star Backlit",
        img: "images/product_2.jpg",
        desc: "Commonly used for banners, outdoor advertisements, and illuminated displays."
    },
    {
        title: "Cloth Prints (White & Black)",
        img: "images/product_3.jpg",
        desc: "Soft signage, exhibitions, backdrops, and décor applications."
    },
    {
        title: "Lamination",
        img: "images/product_4.png",
        desc: "Protects prints from dust, moisture, scratches, and fading."
    },
    {
        title: "Foam Boards (3mm & 5mm)",
        img: "images/product_5.jpg",
        desc: "Perfect for indoor displays, posters, and branding boards."
    },
    {
        title: "Clear & Matte/Glossy Media",
        img: "images/product_6.jpg",
        desc: "Window branding, glass graphics, and premium signage."
    },
    {
        title: "One-Way Vision Film",
        img: "images/product_7.jpg",
        desc: "Ideal for glass surfaces and vehicle windows."
    },
    {
        title: "Standee Displays",
        img: "images/product_8.png",
        desc: "Portable promotional displays for exhibitions and retail."
    },
    {
        title: "Transit & Backlit Prints",
        img: "images/product_9.jpg",
        desc: "Used for light boxes and illuminated signage."
    },
    {
        title: "Glitter Frosted Stickers",
        img: "images/product_10.jpg",
        desc: "Decorative and privacy applications on glass."
    },
    {
        title: "Grey Back Vinyl",
        img: "images/product_11.jpg",
        desc: "Prevents show-through for high-impact signage."
    },
    {
        title: "Reflector Stickers/Flex",
        img: "images/product_12.png",
        desc: "Safety signage and night visibility branding."
    },
    {
        title: "Canvas Prints",
        img: "images/product_13.png",
        desc: "Premium artistic finish for interiors."
    },
    {
        title: "Wallpaper & Customized Printing",
        img: "images/product_14.jpg",
        desc: "Custom wallpapers with high-resolution designs."
    }
];
const ProductList = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 py-8 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {materials && materials.map((each) => {
                return (
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition">

                        <img src={each.img} className="h-48 w-full object-cover" />

                        <div className="p-5">
                            <h3 className="font-semibold mb-2">{each.title}</h3>

                            <p className="text-gray-600 text-sm mb-4">{each.desc}</p>

                            <button className="text-[#155DFC] text-sm flex w-full items-center justify-between">
                                <div className="">
                                    Learn More
                                </div>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>)
            })
            }
        </div>
    )
}
export default ProductList