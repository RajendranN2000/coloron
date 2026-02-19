import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

type Props = {
  open: boolean;
  onClose: () => void;
};

const RightSidebar: React.FC<Props> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToGallery = () => {
    const scrollTo = () => {
      const el = document.getElementById('our-work');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    onClose();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollTo, 120);
    } else {
      scrollTo();
    }
  };

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-all ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div
        className={`absolute inset-0 bg-black transition-opacity ${open ? 'opacity-40' : 'opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 h-full w-80 max-w-[320px] bg-white shadow-xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium">Menu</h3>
          <button aria-label="Close menu" onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
            <FiX size={20} />
          </button>
        </div>

        <nav className="p-6">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink to="/" onClick={onClose} className={({isActive}) => `block text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={onClose} className={({isActive}) => `block text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={onClose} className={({isActive}) => `block text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>
                Products
              </NavLink>
            </li>
            <li>
              <button onClick={goToGallery} className="text-left block text-lg text-gray-700">Gallery</button>
            </li>
            <li>
              <button onClick={() => { onClose(); }} className="mt-4 w-full bg-black text-white py-2 rounded-full">Contact us</button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default RightSidebar;
