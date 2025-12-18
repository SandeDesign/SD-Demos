import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Scissors size={32} className={`${isScrolled ? 'text-amber-500' : 'text-white'} mr-2`} />
          <span className={`text-2xl font-bold font-serif ${isScrolled ? 'text-white' : 'text-white'}`}>
            Nova Barber
          </span>
        </a>
        
        <button 
          className="p-2 lg:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${isScrolled ? 'text-white' : 'text-white'}`}>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            ['Home', 'Home'],
            ['Over Ons', 'about'],
            ['Diensten', 'services'],
            ['Gallerij', 'gallery'],
            ['Recensies', 'testimonials'],
            ['Contact', 'contact']
          ].map(([label, link]) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-white hover:text-amber-500'
              }`}
            >
              {label}
            </a>
          ))}
          <a href="#book" className="btn btn-primary">Nu Boeken</a>
        </nav>
        
        <div 
          className={`absolute top-full left-0 right-0 bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden lg:hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="container py-4 space-y-4">
            {[
              ['Home', 'Home'],
              ['Over Ons', 'about'],
              ['Diensten', 'services'],
              ['Gallerij', 'gallery'],
              ['Recensies', 'testimonials'],
              ['Contact', 'contact']
            ].map(([label, link]) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a 
              href="#book" 
              className="block w-full py-3 text-center text-white bg-amber-600 rounded-md hover:bg-amber-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Nu Boeken
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;