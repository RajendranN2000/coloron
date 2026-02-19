import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
    return (
        <div className="container mx-auto px-4 md:px-24 mt-10">
            <p className="text-gray-600 leading-relaxed mb-8">
                At Color On Print House, Coimbatore, we don’t just print — we bring your ideas to life. From bold outdoor branding to fine indoor displays, every project is handled with care, precision, and pride. Our expertise in inkjet, eco-solvent, vinyl printing, and lamination ensures your brand always stands out with clarity and quality.
                We believe great printing is built on two things: trust and consistency. That’s why our clients rely on us for dependable delivery, flawless finishes, and a service experience that feels personal, not transactional.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Vision */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#e3f2fd] flex items-center justify-center rounded-full p-3 w-12 h-12">
                            <FaEye className="text-blue-600 text-xl w-8" />
                        </div>
                        <h3 className="font-semibold text-lg">Our Vision</h3>
                    </div>

                    <p className="text-gray-600">
                        To be Coimbatore’s most trusted printing partner — known for
                        creativity, craftsmanship, and a customer-first mindset.
                    </p>
                </div>

                {/* Mission */}
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#F3E8FF] flex items-center justify-center rounded-full p-3 w-12 h-12">
                            <FaBullseye className="text-[#9810FA] text-xl w-8" />
                        </div>
                        <h3 className="font-semibold text-lg">Our Mission</h3>
                    </div>

                    <ul className="text-gray-600 space-y-2 list-disc ml-5">
                        <li>To deliver premium-quality prints that elevate every brand.</li>
                        <li>To combine advanced technology with skilled craftsmanship.</li>
                        <li>To ensure every order is completed on time, every time.</li>
                        <li>To build lasting relationships through honesty and reliability.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default VisionMission;
