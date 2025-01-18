import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <div className="bg-[#1C4670] text-white w-full">
      <div className="container mx-auto flex justify-end items-center px-4 py-3 md:px-6">
        {/* Combined Right-aligned Section */}
        <div className="flex items-center space-x-6">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope text-sm"></i> 
            <a href="mailto:info@registerkaro.in" className="text-sm hover:underline">
              info@registerkaro.in
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone text-sm"></i>
            <a href="tel:+91847748183" className="text-sm hover:underline">
              +91 847748183
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 text-lg">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300 text-lg">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300 text-lg">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
