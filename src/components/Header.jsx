import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleLogoClick = () => {
    const heroSection = document.getElementById("hero");
    heroSection?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-[#000] bg-opacity-90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        
        {/* Mobile Layout */}
        <div className="flex justify-between items-center md:hidden">
          {/* Mobile Logo & Title */}
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/valhalla-logo.png" 
              alt="Projekt Valhalla Logo"
              onClick={handleLogoClick}
              className="w-10 h-10 object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.4)] animate-spin cursor-pointer"
              style={{ animationDuration: "8s" }}
            />
            <h1 
              className="text-lg sm:text-xl font-bold tracking-wider cursor-pointer hover:text-gray-300 transition-colors duration-300"
              onClick={handleLogoClick}
            >
              PROJEKT VALHALLA
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none group"
            aria-label="Toggle mobile menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Desktop Logo & Title */}
          <div className="flex items-center space-x-4">
            <img 
              src="/assets/valhalla-logo.png" 
              alt="Projekt Valhalla Logo"
              onClick={handleLogoClick}
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(255,0,0,0.4)] animate-spin cursor-pointer"
              style={{ animationDuration: "8s" }}
            />
            <h1 
              className="text-2xl lg:text-4xl xl:text-5xl tracking-wider font-bold cursor-pointer hover:text-gray-300 transition-colors duration-300"
              onClick={handleLogoClick}
            >
              PROJEKT VALHALLA
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <nav className="flex space-x-8 lg:space-x-12 xl:space-x-15 text-sm lg:text-base text-gray-400 font-semibold">
            <button 
              onClick={() => handleNavClick('#program')}
              className="hover:text-white hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:text-white"
            >
              Program
            </button>
            <button 
              onClick={() => handleNavClick('#forum')}
              className="hover:text-white hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:text-white"
            >
              Forum
            </button>
            <button 
              onClick={() => handleNavClick('#about')}
              className="hover:text-white hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus:text-white"
            >
              About
            </button>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pt-4 pb-2 space-y-4 border-t border-gray-700 mt-4">
            <button
              onClick={() => handleNavClick('#program')}
              className="block w-full text-left text-gray-400 hover:text-white transition-colors duration-300 font-semibold py-2 px-2 rounded hover:bg-gray-800"
            >
              Program
            </button>
            <button
              onClick={() => handleNavClick('#forum')}
              className="block w-full text-left text-gray-400 hover:text-white transition-colors duration-300 font-semibold py-2 px-2 rounded hover:bg-gray-800"
            >
              Forum
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="block w-full text-left text-gray-400 hover:text-white transition-colors duration-300 font-semibold py-2 px-2 rounded hover:bg-gray-800"
            >
              About
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;