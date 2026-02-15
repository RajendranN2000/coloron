import React from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo.png" className="w-32" alt="Color On Print House" />
          </Link>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaFacebookF className='text-black'/>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <BsTwitter className='text-black'/>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin className='text-black'/>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <BsInstagram className='text-black'/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
