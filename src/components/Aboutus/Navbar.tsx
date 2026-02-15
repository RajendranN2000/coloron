import { FiGlobe } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" flex items-center justify-end bg-black rounded-xl py-2 mx-4">
            <div className="bg-black text-white px-8 py-3 rounded-full flex gap-6 items-center">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/products">Products</Link>
                <Link to="/gallery">Gallery</Link>
                <div className="flex items-center gap-1">
                    <FiGlobe size={16} />
                    <span>Eng</span>
                    <MdKeyboardArrowDown className="text-white"/>
                </div>
                <button className="bg-white text-black px-5 py-1 rounded-full ml-4">
                    Contact us
                </button>
            </div>
        </div>
    );
};

export default Navbar;
