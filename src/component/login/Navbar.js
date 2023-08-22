import React, { useState } from 'react';

function Navbar({onLogin}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">Login Page</div>
        </div>
        <div className="hidden md:flex md:items-center">
          <a href="/" className="text-white mx-4">Home</a>
          <a href="#about" className="text-white mx-4">About</a>
          <a href="#services" className="text-white mx-4">Services</a>
          <a href="#" className="text-white mx-4">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <a href="/" activeClassname="active-page" className="block text-white my-2">Home</a>
          <a href="/login" activeClassname="active-page" className="block text-white my-2">Login</a>
          <a href="#services" className="block text-white my-2">Services</a>
          <a href="#contact" className="block text-white my-2">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
