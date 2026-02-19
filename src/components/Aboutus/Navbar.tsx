import { FiGlobe } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToGallery = () => {
        const scrollTo = () => {
            const el = document.getElementById('our-work');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        if (location.pathname !== '/') {
            navigate('/');
            // wait briefly for home to render, then scroll
            setTimeout(scrollTo, 120);
        } else {
            scrollTo();
        }
    };

    return (
        <div className="hidden md:flex items-center justify-end bg-black rounded-xl py-2 mx-4">
            <div className="bg-black text-white px-6 py-3 rounded-full flex gap-6 items-center">
                <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-300 font-semibold' : 'text-white'}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-300 font-semibold' : 'text-white'}>About Us</NavLink>
                <NavLink to="/products" className={({isActive}) => isActive ? 'text-blue-300 font-semibold' : 'text-white'}>Products</NavLink>
                <button onClick={goToGallery} className="text-white">Gallery</button>
                <div className="flex items-center gap-1">
                    <FiGlobe size={16} />
                    <span>Eng</span>
                    <MdKeyboardArrowDown className="text-white"/>
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-full ml-2">
                    Contact us
                </button>
            </div>
        </div>
    );
};

export default Navbar;
