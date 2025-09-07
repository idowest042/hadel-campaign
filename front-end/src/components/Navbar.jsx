import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, DollarSign, Users } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [donationCount, setDonationCount] = useState(3);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate increasing donor count
  useEffect(() => {
    const interval = setInterval(() => {
      setDonationCount(prev => prev + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and links */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-full mr-3 shadow-md">
                  <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  HelpHadel
                </span>
              </div>

              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden md:ml-8 md:flex md:items-center md:space-x-6">
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{donationCount} supporters</span>
                </a>
                <a href="#story" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                  Our Story
                </a>
              </div>
            </div>

            {/* Right side - Donate button and mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Donor count for mobile - Hidden on desktop */}
              <div className="md:hidden flex items-center text-sm text-gray-700">
                <Users className="h-4 w-4 mr-1" />
                <span>{donationCount}</span>
              </div>

              {/* Donate button - Always visible */}
              <a href='https://flutterwave.com/donate/g4uabza00wyx' target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center space-x-1 shadow-md hover:shadow-lg">
                  <DollarSign className="h-4 w-4" />
                  <span className="hidden sm:inline">Donate</span>
                </button>
              </a>

              {/* Mobile menu button - Only shown on mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu - Only shown when hamburger is clicked */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl border-t">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center">
                <Users className="h-5 w-5 mr-3" />
                <span>{donationCount} supporters</span>
              </a>
              <a href="#story" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                Our Story
              </a>
              <a href="https://flutterwave.com/donate/g4uabza00wyx" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                Donate
              </a>
             
            </div>
          </div>
        )}
      </nav>
      
      {/* Add padding to the top of the page content to account for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;