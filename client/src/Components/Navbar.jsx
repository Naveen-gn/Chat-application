import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              Logo
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" onClick={closeMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" onClick={closeMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" onClick={closeMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button ref={buttonRef} onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Popover-like menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg py-2 px-3" style={{ top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight }}>
          <Link to="/" onClick={closeMenu} className="text-gray-800 block px-4 py-2 text-sm hover:bg-gray-200">Home</Link>
          <Link to="/about" onClick={closeMenu} className="text-gray-800 block px-4 py-2 text-sm hover:bg-gray-200">About</Link>
          <Link to="/contact" onClick={closeMenu} className="text-gray-800 block px-4 py-2 text-sm hover:bg-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
