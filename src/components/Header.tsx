import React, { useState, useEffect } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

const Header: React.FC = () => {
  const { demo } = useDemo();
  const preset = usePreset();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const headingFont: React.CSSProperties = { fontFamily: 'var(--font-heading)' };

  switch (preset.name) {
    // ─────────────────────────────────────────────────────────────────────────
    // 1. EDITORIAL — Ultra-minimal. Logo left, links right with thin underline
    // ─────────────────────────────────────────────────────────────────────────
    case 'editorial': {
      return (
        <>
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
              <a href="#home" className="flex items-center gap-2" style={headingFont}>
                <span className={`text-xl font-light tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  {demo.name}
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-8">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative text-sm tracking-wide transition-colors pb-1 group ${
                      isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: demo.primaryColor }}
                    />
                  </a>
                ))}
              </nav>

              <button
                className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-px transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-[3.5px] bg-gray-900' :
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                }`} />
                <span className={`block w-6 h-px transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[3.5px] bg-gray-900' :
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                }`} />
              </button>
            </div>
          </header>

          {/* Fullscreen overlay nav */}
          <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}>
            <nav className="flex flex-col items-center gap-8">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-light text-gray-900 hover:opacity-60 transition-opacity"
                  style={headingFont}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 text-lg px-8 py-3 border transition-colors"
                style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </nav>
          </div>
        </>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 2. BRUTALIST — Thick black bar, mono uppercase, thick borders
    // ─────────────────────────────────────────────────────────────────────────
    case 'brutalist': {
      return (
        <header
          className="fixed top-0 left-0 right-0 z-50 bg-black"
          style={{ borderBottom: `4px solid ${demo.primaryColor}` }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2" style={headingFont}>
              <span className="text-lg font-bold text-white uppercase tracking-widest">
                {demo.icon} {demo.name}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-white uppercase tracking-widest hover:text-white/70 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 text-xs font-bold uppercase tracking-widest px-4 py-2 border-2 transition-colors"
                style={{
                  borderColor: demo.primaryColor,
                  color: demo.primaryColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = demo.primaryColor;
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = demo.primaryColor;
                }}
              >
                {demo.ctaText}
              </a>
            </nav>

            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <span className="text-white text-2xl font-bold">&times;</span>
              ) : (
                <>
                  <span className="block w-6 h-0.5 bg-white" />
                  <span className="block w-6 h-0.5 bg-white" />
                  <span className="block w-6 h-0.5 bg-white" />
                </>
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-white/20">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </div>
          )}
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 3. SOFT — Floating pill, backdrop-blur, rounded everything
    // ─────────────────────────────────────────────────────────────────────────
    case 'soft': {
      return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
          <div
            className={`max-w-5xl mx-auto rounded-full backdrop-blur-lg transition-all duration-500 ${
              isScrolled
                ? 'bg-white/90 shadow-lg shadow-black/5'
                : 'bg-white/60'
            }`}
          >
            <div className="px-8 py-3 flex items-center justify-between">
              <a href="#home" className="flex items-center gap-2" style={headingFont}>
                <span className="text-xl">{demo.icon}</span>
                <span className="text-lg font-semibold text-gray-800">
                  {demo.name}
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-2">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-1.5 rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="ml-2 px-6 py-2 rounded-full text-sm text-white font-medium transition-transform hover:scale-105"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
              </nav>

              <button
                className="md:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="text-gray-600 text-sm">{isMenuOpen ? '\u2715' : '\u2630'}</span>
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden px-6 pb-4 pt-2 border-t border-gray-200/50">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 px-4 rounded-2xl text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-2 text-center py-2.5 px-4 rounded-full text-sm text-white font-medium"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
              </div>
            )}
          </div>
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 4. CORPORATE — Solid dark bar, vertical divider, arrow CTA
    // ─────────────────────────────────────────────────────────────────────────
    case 'corporate': {
      return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900 shadow-xl' : 'bg-gray-900/95'
        }`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2" style={headingFont}>
              <span className="text-xl">{demo.icon}</span>
              <span className="text-lg font-semibold text-white">
                {demo.name}
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="w-px h-6 bg-gray-600" />

              <a
                href="#contact"
                className="text-sm font-semibold text-white px-5 py-2 rounded transition-all hover:brightness-110 flex items-center gap-1"
                style={{ backgroundColor: demo.primaryColor }}
              >
                {demo.ctaText}
                <span className="ml-1">&rarr;</span>
              </a>
            </div>

            <button
              className="md:hidden text-white text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-3">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center text-sm font-semibold text-white px-5 py-2.5 rounded"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText} &rarr;
                </a>
              </div>
            </div>
          )}
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 5. ARTISAN — Centered logo with icon above, nav below, right sidebar
    // ─────────────────────────────────────────────────────────────────────────
    case 'artisan': {
      return (
        <>
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2'
                : 'bg-transparent py-6'
            }`}
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* Centered logo with icon above */}
              <div className="flex flex-col items-center">
                <span className={`transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
                  {demo.icon}
                </span>
                <a
                  href="#home"
                  className={`font-semibold tracking-wide transition-all duration-300 ${
                    isScrolled ? 'text-lg text-gray-900' : 'text-2xl text-white'
                  }`}
                  style={headingFont}
                >
                  {demo.name}
                </a>
              </div>

              {/* Nav below logo */}
              <nav className={`hidden md:flex items-center justify-center gap-8 transition-all duration-300 ${
                isScrolled ? 'mt-1' : 'mt-3'
              }`}>
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative text-sm tracking-wide group transition-colors ${
                      isScrolled ? 'text-gray-600' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-0.5 left-1/2 w-0 h-px transition-all duration-300 group-hover:w-full group-hover:left-0"
                      style={{ backgroundColor: demo.primaryColor }}
                    />
                  </a>
                ))}
                <a
                  href="#contact"
                  className="text-sm tracking-wide px-5 py-1.5 border transition-colors"
                  style={{
                    borderColor: isScrolled ? demo.primaryColor : 'rgba(255,255,255,0.5)',
                    color: isScrolled ? demo.primaryColor : 'white',
                  }}
                >
                  {demo.ctaText}
                </a>
              </nav>

              {/* Mobile hamburger */}
              <button
                className={`md:hidden absolute top-4 right-6 z-50 text-xl ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? '\u2715' : '\u2630'}
              </button>
            </div>
          </header>

          {/* Slide-in sidebar from right with overlay */}
          <div
            className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div
              className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="pt-20 px-8 flex flex-col gap-6">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg text-gray-800 hover:opacity-60 transition-opacity"
                    style={headingFont}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 text-center py-3 border text-sm tracking-wide"
                  style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 6. PLAYFUL — Colorblock split, scale+rotation hover, emoji CTA
    // ─────────────────────────────────────────────────────────────────────────
    case 'playful': {
      return (
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="flex">
            {/* Left: colored half with logo */}
            <div
              className="flex-shrink-0 flex items-center px-6 py-3"
              style={{ backgroundColor: demo.primaryColor }}
            >
              <a href="#home" className="flex items-center gap-2" style={headingFont}>
                <span className="text-2xl">{demo.icon}</span>
                <span className="text-lg font-bold text-white whitespace-nowrap">
                  {demo.name}
                </span>
              </a>
            </div>

            {/* Right: white half with nav */}
            <div className={`flex-1 flex items-center justify-end px-6 py-3 transition-all duration-300 ${
              isScrolled ? 'bg-white shadow-md' : 'bg-white/90'
            }`}>
              <nav className="hidden md:flex items-center gap-4">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-gray-700 transition-transform hover:scale-110 hover:rotate-1 px-3 py-1 rounded-full hover:bg-gray-100"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="ml-2 px-5 py-2 rounded-xl text-sm font-bold text-white transition-transform hover:scale-110 hover:-rotate-2 shadow-lg"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText} {'\u{1F389}'}
                </a>
              </nav>

              <button
                className="md:hidden text-gray-700 text-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? '\u2715' : '\u2630'}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-3">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText} {'\u{1F389}'}
                </a>
              </div>
            </div>
          )}
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 7. MAGAZINE — Masthead top row + nav second row, newspaper feel
    // ─────────────────────────────────────────────────────────────────────────
    case 'magazine': {
      return (
        <header
          className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
            isScrolled ? 'shadow-md' : ''
          }`}
          style={{ borderBottom: '1px solid #e5e5e5' }}
        >
          {/* Row 1: Masthead */}
          <div className="max-w-7xl mx-auto px-6 pt-4 pb-2 flex items-center justify-between">
            <a
              href="#home"
              className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900"
              style={headingFont}
            >
              {demo.name}
            </a>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-wider px-5 py-2 transition-colors text-white"
                style={{ backgroundColor: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </div>

            <button
              className="md:hidden text-gray-900 text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {/* Row 2: Nav links */}
          <div className="hidden md:block border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
              <nav className="flex items-center gap-8 py-2">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-600 hover:bg-gray-50 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-3">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center text-xs font-semibold uppercase tracking-wider px-5 py-2.5 text-white"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
              </div>
            </div>
          )}
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 8. RETRO — Warm cream bg, rounded corners, colored dot indicators
    // ─────────────────────────────────────────────────────────────────────────
    case 'retro': {
      return (
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'shadow-md' : ''
          }`}
          style={{
            backgroundColor: '#fdf6e3',
            borderRadius: isScrolled ? '0' : '0 0 16px 16px',
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3" style={headingFont}>
              <span className="text-2xl">{demo.icon}</span>
              <span
                className="text-xl font-bold"
                style={{ color: demo.primaryColor }}
              >
                {demo.name}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group py-1"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: demo.primaryColor }}
                  />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-5 py-2 rounded-lg text-sm font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </nav>

            <button
              className="md:hidden text-gray-700 text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t" style={{ borderColor: demo.primaryColorLight }}>
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-white/50"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: demo.primaryColor }}
                  />
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-3">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center px-5 py-2.5 rounded-lg text-sm font-bold text-white"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
              </div>
            </div>
          )}
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 9. LUXE — Black bg always, gold-tinted, ultra-premium, outlined CTA
    // ─────────────────────────────────────────────────────────────────────────
    case 'luxe': {
      return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black">
          <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
            <a
              href="#home"
              className="text-base font-normal uppercase"
              style={{
                ...headingFont,
                color: demo.primaryColor,
                letterSpacing: '0.3em',
              }}
            >
              {demo.name}
            </a>

            <nav className="hidden md:flex items-center gap-10">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase text-gray-400 hover:text-white transition-colors duration-300"
                  style={{ letterSpacing: '0.3em' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 text-xs uppercase px-6 py-2.5 border transition-all duration-300"
                style={{
                  letterSpacing: '0.3em',
                  borderColor: demo.primaryColor,
                  color: demo.primaryColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = demo.primaryColor;
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = demo.primaryColor;
                }}
              >
                {demo.ctaText}
              </a>
            </nav>

            <button
              className="md:hidden text-lg"
              style={{ color: demo.primaryColor }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-800">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-8 py-4 text-xs uppercase text-gray-400 hover:text-white border-b border-gray-800/50 transition-colors"
                  style={{ letterSpacing: '0.3em' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-8 py-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center text-xs uppercase px-6 py-3 border"
                  style={{
                    letterSpacing: '0.3em',
                    borderColor: demo.primaryColor,
                    color: demo.primaryColor,
                  }}
                >
                  {demo.ctaText}
                </a>
              </div>
            </div>
          )}
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 10. TECH — Dark translucent, neon glow effects, geometric
    // ─────────────────────────────────────────────────────────────────────────
    case 'tech': {
      return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2" style={headingFont}>
              <span
                className="text-lg font-bold"
                style={{
                  color: demo.primaryColor,
                  textShadow: `0 0 20px ${demo.primaryColor}40`,
                }}
              >
                {demo.icon} {demo.name}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-400 transition-all duration-300 hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = `0 0 12px ${demo.primaryColor}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-6 py-2 rounded-full text-sm font-medium text-white transition-all duration-300"
                style={{
                  backgroundColor: `${demo.primaryColor}20`,
                  border: `1px solid ${demo.primaryColor}60`,
                  boxShadow: `0 0 20px ${demo.primaryColor}15`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${demo.primaryColor}40`;
                  e.currentTarget.style.backgroundColor = `${demo.primaryColor}35`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${demo.primaryColor}15`;
                  e.currentTarget.style.backgroundColor = `${demo.primaryColor}20`;
                }}
              >
                {demo.ctaText}
              </a>
            </nav>

            <button
              className="md:hidden text-gray-400 text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 text-sm text-gray-400 hover:text-white transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center px-6 py-2.5 rounded-full text-sm font-medium text-white"
                  style={{
                    backgroundColor: `${demo.primaryColor}30`,
                    border: `1px solid ${demo.primaryColor}60`,
                  }}
                >
                  {demo.ctaText}
                </a>
              </div>
            </div>
          )}
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 11. ORGANIC — Warm beige/cream, rounded-2xl, flowing natural feel
    // ─────────────────────────────────────────────────────────────────────────
    case 'organic': {
      return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
          <div
            className={`max-w-6xl mx-auto rounded-2xl transition-all duration-700 ${
              isScrolled
                ? 'bg-amber-50/95 backdrop-blur-sm shadow-lg shadow-amber-900/5'
                : 'bg-transparent'
            }`}
          >
            <div className="px-6 py-4 flex items-center justify-between">
              <a href="#home" className="flex items-center gap-2" style={headingFont}>
                <span className="text-xl">{demo.icon}</span>
                <span className={`text-lg font-semibold transition-colors duration-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  {demo.name}
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-6">
                {demo.navLinks.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm transition-all duration-500 hover:opacity-100 ${
                      isScrolled
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="ml-2 px-5 py-2 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
              </nav>

              <button
                className={`md:hidden text-xl transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? '\u2715' : '\u2630'}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden px-4 pb-4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {demo.navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-amber-50 transition-colors border-b border-gray-100 last:border-0"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="px-4 py-3">
                    <a
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-center px-5 py-2.5 rounded-xl text-sm font-medium text-white"
                      style={{ backgroundColor: demo.primaryColor }}
                    >
                      {demo.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      );
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 12. BOLD — Oversized everything, full primaryColor bg, dominant
    // ─────────────────────────────────────────────────────────────────────────
    case 'bold': {
      return (
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
            isScrolled ? 'shadow-xl' : ''
          }`}
          style={{ backgroundColor: demo.primaryColor }}
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3" style={headingFont}>
              <span className="text-3xl">{demo.icon}</span>
              <span className="text-3xl font-black text-white uppercase tracking-tight">
                {demo.name}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {demo.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-bold text-white/90 hover:text-white uppercase tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-8 py-3 bg-white text-lg font-black uppercase rounded-lg transition-transform hover:scale-105"
                style={{ color: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </nav>

            <button
              className="md:hidden text-white text-2xl font-bold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden" style={{ backgroundColor: demo.primaryColor }}>
              <div className="border-t border-white/20">
                {demo.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-4 text-base font-bold text-white uppercase tracking-wide border-b border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-6 py-4">
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center px-8 py-3 bg-white text-lg font-black uppercase rounded-lg"
                    style={{ color: demo.primaryColor }}
                  >
                    {demo.ctaText}
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
      );
    }
  }
};

export default Header;
