import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chaticon from '../assets/chat.png';

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
    <nav className=" sticky top-0 bg-slate-900 z-50">

      <div className="w-full  px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16 ">

          <div className="flex items-center w-full  justify-between">

            <div className="flex flex-row items-center ">
            <img src={Chaticon} className='w-8 h-7' /> <span className=' text-blue-600 text-3xl font-bold ml-2 '>N_chat</span> 
            </div>
<div className='flex gap-4'>


            <div className="hidden md:block ">
              <div className="ml-10 flex  items-baseline space-x-4">
                <Link to="/" onClick={closeMenu} className="text-gray-300  hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">My Chats</Link>
                <Link to="/about" onClick={closeMenu} className="text-gray-300  hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/signin" onClick={closeMenu} className="text-gray-300  hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ">Sign in</Link>
              </div>
            </div>

            <div>
            <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white mr-3"
          src="https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
          alt=""
        />
            </div>
            </div>
          </div>


          <div className="-mr-2 flex md:hidden ">
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
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg py-2 px-3 z-50" style={{ top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight }}>
          <Link to="/" onClick={closeMenu} className="text-gray-800 block px-4 py-2 text-sm hover:bg-gray-200">Home</Link>
          <Link to="/about" onClick={closeMenu} className="text-gray-800 block px-4 py-2 text-sm hover:bg-gray-200">About</Link>
          <Link to="/signin" onClick={closeMenu} className="text-gray-800 block px-4 py-2 text-sm hover:bg-gray-200">Sign in</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
