import React from 'react';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md flex">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
        <img src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </a>
          <a href="#services" className="text-gray-700 hover:text-gray-900">
            Our Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>

          {/* Search Icon */}
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">
            🔍
          </div>
        </div>

        {/* Talk to Expert Button */}
        <div>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
            Talk to Expert
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
