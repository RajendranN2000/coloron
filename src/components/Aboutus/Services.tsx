import { BsArrowRight } from "react-icons/bs";

const services = [
    {
        title: "Injection Printing",
        img: "/images/service_1.jpg",
        desc: "High-precision injection printing solutions...",
    },
    {
        title: "Flex Printing",
        img: "/images/service_2.png",
        desc: "Large-format flex printing...",
    },
    {
        title: "Customized Printing Solutions",
        img: "/images/service_3.png",
        desc: "Tailored printing services...",
    },
    {
        title: "Industrial Print Applications",
        img: "/images/service_4.png",
        desc: "Comprehensive industrial printing...",
    },
];

const Services = () => {
    return (
        <div className="container mx-auto px-4 md:px-24 mt-14">
                <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border"
                    >
                        <img src={s.img} className="h-48 w-full object-cover" />

                        <div className="p-5">
                            <h3 className="font-semibold mb-2Allow">{s.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{s.desc}</p>

                            <button className="text-[#155DFC] text-sm flex w-full items-center justify-between">
                                <div className="">
                                    Learn More
                                </div>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
