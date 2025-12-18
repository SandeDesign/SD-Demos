import React, { useState, useEffect } from 'react';
import { useDemo } from '../context/DemoContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { demo } = useDemo();
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
        <a href="#home" className="flex items-center">
          <span className="text-2xl mr-2">{demo.icon}</span>
          <span className={`text-2xl font-bold font-serif ${isScrolled ? 'text-white' : 'text-white'}`}>
            {demo.name}
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
          <Link
            to="/"
            className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-300 hover:text-white' : 'text-white hover:opacity-80'
            }`}
          >
            ← Alle Demo's
          </Link>
          {demo.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-white hover:opacity-80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-md font-medium text-white transition-colors"
            style={{ backgroundColor: demo.primaryColor }}
          >
            {demo.ctaText}
          </a>
        </nav>

        <div
          className={`absolute top-full left-0 right-0 bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden lg:hidden ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="container py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              ← Alle Demo's
            </Link>
            {demo.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full py-3 text-center text-white rounded-md"
              style={{ backgroundColor: demo.primaryColor }}
              onClick={() => setIsMenuOpen(false)}
            >
              {demo.ctaText}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
