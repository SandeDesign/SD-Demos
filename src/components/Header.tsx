import React, { useState, useEffect } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

const Header = () => {
  const { demo } = useDemo();
  const preset = usePreset();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = preset.navStyle;

  const HamburgerButton = ({ color = 'currentColor' }: { color?: string }) => (
    <button
      className="p-2 lg:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
    >
      <div style={{ color }}>
        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`} />
        <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`} />
      </div>
    </button>
  );

  const MobileMenu = ({ bgClass, textClass }: { bgClass: string; textClass: string }) => (
    <div
      className={`absolute top-full left-0 right-0 ${bgClass} shadow-lg transition-all duration-300 overflow-hidden lg:hidden ${
        isMenuOpen ? 'max-h-screen' : 'max-h-0'
      }`}
    >
      <div className="container py-4 space-y-4">
        {demo.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`block py-2 ${textClass} transition-colors`}
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
  );

  // --- SOLID-BAR: Full primaryColor background ---
  if (navStyle === 'solid-bar') {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-lg' : 'py-4'
        }`}
        style={{ backgroundColor: demo.primaryColor }}
      >
        <div className="container flex items-center justify-between">
          <a href="#home" className="flex items-center group">
            <span className="text-2xl mr-2 transition-transform group-hover:scale-110">{demo.icon}</span>
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              {demo.name}
            </span>
          </a>

          <HamburgerButton color="white" />

          <nav className="hidden lg:flex items-center space-x-8">
            {demo.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-md font-medium bg-white transition-all hover:bg-gray-100"
              style={{ color: demo.primaryColor }}
            >
              {demo.ctaText}
            </a>
          </nav>

          <MobileMenu bgClass="bg-gray-900" textClass="text-gray-300 hover:text-white" />
        </div>
      </header>
    );
  }

  // --- PILL-CENTERED: Floating pill, centered nav ---
  if (navStyle === 'pill-centered') {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-white shadow-2xl'
                : 'bg-white/95 backdrop-blur-sm shadow-xl'
            }`}
          >
            <a href="#home" className="flex items-center group">
              <span className="text-2xl mr-2 transition-transform group-hover:scale-110">{demo.icon}</span>
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                {demo.name}
              </span>
            </a>

            <HamburgerButton color="#111827" />

            <nav className="hidden lg:flex items-center space-x-6">
              {demo.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 rounded-full font-medium text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </nav>
          </div>

          {/* Mobile menu for pill */}
          <div
            className={`mt-2 rounded-2xl bg-white shadow-2xl transition-all duration-300 overflow-hidden lg:hidden ${
              isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 space-y-4">
              {demo.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-600 hover:text-gray-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full py-3 text-center text-white rounded-full shadow-lg font-medium"
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
  }

  // --- COLORBLOCK: Split layout ---
  if (navStyle === 'colorblock') {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="flex">
          {/* Left half with primaryColor */}
          <div className="flex-1 py-4 px-6 flex items-center" style={{ backgroundColor: demo.primaryColor }}>
            <a href="#home" className="flex items-center group">
              <span className="text-2xl mr-2 transition-transform group-hover:scale-110">{demo.icon}</span>
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {demo.name}
              </span>
            </a>
          </div>
          {/* Right half white */}
          <div className="flex-1 py-4 px-6 bg-white flex items-center justify-end">
            <HamburgerButton color="#111827" />

            <nav className="hidden lg:flex items-center space-x-6">
              {demo.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2 rounded-lg font-medium text-white transition-all hover:scale-105"
                style={{ backgroundColor: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </nav>
          </div>
        </div>

        <MobileMenu bgClass="bg-white" textClass="text-gray-700 hover:text-gray-900" />
      </header>
    );
  }

  // --- MINIMAL-TRANSPARENT (default): Transparent, solid on scroll ---
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center group">
          <span className="text-2xl mr-2 transition-transform group-hover:scale-110">{demo.icon}</span>
          <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            {demo.name}
          </span>
        </a>

        <HamburgerButton color="white" />

        <nav className="hidden lg:flex items-center space-x-8">
          {demo.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-all duration-300 ${
                isScrolled ? 'text-gray-300 hover:text-white' : 'text-white hover:opacity-80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-md font-medium text-white hover:opacity-90 transition-all"
            style={{ backgroundColor: demo.primaryColor }}
          >
            {demo.ctaText}
          </a>
        </nav>

        <MobileMenu bgClass="bg-gray-900" textClass="text-gray-300 hover:text-white" />
      </div>
    </header>
  );
};

export default Header;
