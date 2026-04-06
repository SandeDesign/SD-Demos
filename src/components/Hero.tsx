import React, { useEffect, useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

const Hero = () => {
  const { demo } = useDemo();
  const preset = usePreset();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const headingFont = { fontFamily: 'var(--font-heading)' };

  const renderHighlight = (extraClass = '') => (
    <span className={extraClass} style={{ color: demo.primaryColor }}>
      {demo.heroHighlight.join(' ')}
    </span>
  );

  switch (preset.name) {
    // ──────────────────────────────────────────────────────────────────
    // 1. EDITORIAL — Full-text left, no visible image, serif 8xl
    // ──────────────────────────────────────────────────────────────────
    case 'editorial':
      return (
        <section id="home" className="relative min-h-screen flex items-center" style={{ backgroundColor: '#fafaf8' }}>
          {/* Blurred bg image at 5 % */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("${demo.heroImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(40px)',
            }}
          />
          <div className="container relative z-10 py-32 px-6">
            <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <span
                className="text-sm font-semibold uppercase tracking-[0.25em] block mb-10"
                style={{ color: demo.primaryColor }}
              >
                {demo.icon} {demo.name}
              </span>
              <h1
                className="mb-10 font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-gray-900"
                style={headingFont}
              >
                {demo.heroTitle}{' '}
                {renderHighlight()}
              </h1>
              <p className="max-w-2xl mb-14 text-xl md:text-2xl text-gray-500 leading-relaxed">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 font-semibold text-lg transition-all hover:opacity-90 text-center"
                  style={{ backgroundColor: demo.primaryColor, color: '#fff' }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 font-semibold text-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all text-center"
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
          {/* Decorative vertical line right */}
          <div
            className="absolute right-12 top-0 bottom-0 w-px hidden lg:block"
            style={{ backgroundColor: demo.primaryColor, opacity: 0.2 }}
          />
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 2. BRUTALIST — Diagonal clip-path split, harsh, uppercase
    // ──────────────────────────────────────────────────────────────────
    case 'brutalist':
      return (
        <section id="home" className="relative min-h-screen overflow-hidden">
          {/* Color side */}
          <div className="absolute inset-0" style={{ backgroundColor: demo.primaryColor }} />
          {/* Image side with diagonal clip */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${demo.heroImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(42% 0, 100% 0, 100% 100%, 58% 100%)',
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="container relative z-10 min-h-screen flex items-center px-6">
            <div className={`max-w-xl py-20 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h1
                className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl leading-none text-white uppercase tracking-tight"
                style={headingFont}
              >
                {demo.heroTitle}
                <br />
                {demo.heroHighlight.join(' ')}
              </h1>
              <div className="w-24 h-1 bg-white mb-6" />
              <p className="max-w-md mb-10 text-lg text-white/80 leading-relaxed uppercase tracking-wide">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white font-bold text-lg uppercase tracking-wider transition-all hover:bg-gray-200 text-center"
                  style={{ color: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 font-bold text-lg uppercase tracking-wider border-2 border-white text-white hover:bg-white/10 transition-all text-center"
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 3. SOFT — Full bg image, dark overlay, centered, rounded CTAs, scroll indicator
    // ──────────────────────────────────────────────────────────────────
    case 'soft':
      return (
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center text-white"
          style={{
            backgroundImage: `url("${demo.heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container relative z-10 text-center px-6">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1
                className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
                style={headingFont}
              >
                {demo.heroTitle}{' '}
                {renderHighlight()}
              </h1>
              <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-gray-300 leading-relaxed">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90 text-center"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 rounded-full font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-all text-center"
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
          {/* Scroll-down bounce indicator */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <a
              href="#about"
              className="flex items-center justify-center w-10 h-10 rounded-full animate-bounce text-white"
              style={{ backgroundColor: demo.primaryColor }}
              aria-label="Scroll down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 4. CORPORATE — 50/50 split, text on black left, image right, badge + divider
    // ──────────────────────────────────────────────────────────────────
    case 'corporate':
      return (
        <section id="home" className="relative min-h-screen bg-black text-white">
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left — text */}
            <div className="flex-1 flex items-center px-6 lg:px-16 py-20 lg:py-0">
              <div className={`max-w-lg transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div
                  className="inline-block px-4 py-2 mb-6 rounded-full border text-xs font-semibold uppercase tracking-widest"
                  style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}
                >
                  {demo.icon} {demo.name}
                </div>
                <h1
                  className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
                  style={headingFont}
                >
                  {demo.heroTitle}{' '}
                  <span className="block mt-2" style={{ color: demo.primaryColor }}>
                    {demo.heroHighlight.join(' ')}
                  </span>
                </h1>
                <div className="w-16 h-px mb-6" style={{ backgroundColor: demo.primaryColor }} />
                <p className="max-w-md mb-10 text-lg text-gray-400 leading-relaxed">
                  {demo.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all hover:scale-105 shadow-xl text-center"
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    {demo.ctaText}
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/20 text-white hover:bg-white/10 transition-all text-center"
                  >
                    {demo.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
            {/* Right — image */}
            <div className={`flex-1 relative min-h-[400px] lg:min-h-screen transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <img
                src={demo.heroImage}
                alt={demo.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 5. ARTISAN — Image bg at 30 % + white gradient, decorative border frame
    // ──────────────────────────────────────────────────────────────────
    case 'artisan':
      return (
        <section id="home" className="relative min-h-screen flex items-center bg-white">
          {/* Background image low opacity */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("${demo.heroImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
          <div className="container relative z-10 py-32 px-6">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <span
                className="inline-block px-5 py-2 mb-8 rounded-full border text-sm font-semibold uppercase tracking-wider"
                style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}
              >
                {demo.icon} {demo.name}
              </span>
              {/* Decorative border frame around heading */}
              <div
                className="inline-block border-2 px-10 py-8 mb-8"
                style={{ borderColor: demo.primaryColor + '40' }}
              >
                <h1
                  className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900"
                  style={headingFont}
                >
                  {demo.heroTitle}{' '}
                  {renderHighlight()}
                </h1>
              </div>
              <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-600 leading-relaxed">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all hover:opacity-90 text-center"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all text-center"
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 6. PLAYFUL — primaryColor bg, NO image, huge text, decorative circles
    // ──────────────────────────────────────────────────────────────────
    case 'playful':
      return (
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
          style={{ backgroundColor: demo.primaryColor }}
        >
          {/* Decorative circles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10" />
            <div className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-black/5" />
            <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-white/5" />
            <div className="absolute top-20 left-1/3 w-32 h-32 rounded-full bg-white/10" />
            <div className="absolute bottom-1/4 left-16 w-20 h-20 rounded-full bg-black/10" />
          </div>
          <div className="container relative z-10 text-center px-6 py-20">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <h1
                className="mb-8 font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none text-white"
                style={headingFont}
              >
                {demo.heroTitle}
                <br />
                {demo.heroHighlight.join(' ')}
              </h1>
              <p className="max-w-xl mx-auto mb-10 text-lg md:text-xl text-white/80 leading-relaxed">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="px-10 py-4 bg-white font-bold text-lg rounded-full transition-all hover:scale-105 shadow-xl text-center"
                  style={{ color: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-10 py-4 font-bold text-lg rounded-full border-2 border-white text-white hover:bg-white/10 transition-all text-center"
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 7. MAGAZINE — Full-screen image bg, bold headline overlapping, magazine-cover feel
    // ──────────────────────────────────────────────────────────────────
    case 'magazine':
      return (
        <section
          id="home"
          className="relative min-h-screen overflow-hidden text-white"
          style={{
            backgroundImage: `url("${demo.heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="container relative z-10 min-h-screen flex flex-col justify-between px-6 py-12">
            {/* Top-left huge heading — overlapping, magazine cover */}
            <div className={`pt-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
              <h1
                className="font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] uppercase tracking-tighter max-w-4xl"
                style={headingFont}
              >
                {demo.heroTitle}{' '}
                <span style={{ color: demo.primaryColor }}>{demo.heroHighlight.join(' ')}</span>
              </h1>
            </div>
            {/* Bottom-left text block */}
            <div className={`max-w-md pb-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="w-12 h-1 mb-6" style={{ backgroundColor: demo.primaryColor }} />
              <p className="mb-8 text-lg text-gray-300 leading-relaxed">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 font-bold text-sm uppercase tracking-widest text-white transition-all hover:opacity-80 text-center"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 font-bold text-sm uppercase tracking-widest border border-white/40 text-white hover:bg-white/10 transition-all text-center"
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 8. RETRO — Split layout, image in rounded rect right, warm cream bg, vintage badge
    // ──────────────────────────────────────────────────────────────────
    case 'retro':
      return (
        <section id="home" className="relative min-h-screen flex items-center" style={{ backgroundColor: '#fdf6ec' }}>
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[70vh]">
              {/* Left — text */}
              <div className={`flex-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                {/* Vintage badge */}
                <div
                  className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border-2 text-sm font-bold uppercase tracking-widest"
                  style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}
                >
                  <span>{demo.icon}</span>
                  <span>{demo.name}</span>
                </div>
                <h1
                  className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-gray-900"
                  style={headingFont}
                >
                  {demo.heroTitle}{' '}
                  {renderHighlight()}
                </h1>
                {/* Decorative arch shape */}
                <div
                  className="w-16 h-8 rounded-t-full mb-6"
                  style={{ backgroundColor: demo.primaryColor + '30' }}
                />
                <p className="max-w-md mb-10 text-lg text-gray-600 leading-relaxed">
                  {demo.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 text-center"
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    {demo.ctaText}
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 rounded-full font-bold text-lg border-2 text-gray-900 hover:bg-gray-900 hover:text-white transition-all text-center"
                    style={{ borderColor: demo.primaryColor }}
                  >
                    {demo.ctaSecondary}
                  </a>
                </div>
              </div>
              {/* Right — image in large rounded rectangle */}
              <div className={`flex-1 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] max-h-[600px]">
                  <img
                    src={demo.heroImage}
                    alt={demo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 9. LUXE — Dark bg, subtle image 10 %, wide letter-spacing, gold accent
    // ──────────────────────────────────────────────────────────────────
    case 'luxe':
      return (
        <section id="home" className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
          {/* Subtle background image */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("${demo.heroImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="container relative z-10 text-center px-6 py-20">
            <div className={`transition-all duration-[1400ms] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.35em] mb-8"
                style={{ color: demo.primaryColor }}
              >
                {demo.icon} {demo.name}
              </span>
              {/* Gold accent line */}
              <div className="w-20 h-px mx-auto mb-10" style={{ backgroundColor: demo.primaryColor }} />
              <h1
                className="mb-8 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white tracking-[0.06em]"
                style={headingFont}
              >
                {demo.heroTitle}{' '}
                {renderHighlight()}
              </h1>
              <div className="w-20 h-px mx-auto mb-8" style={{ backgroundColor: demo.primaryColor }} />
              <p className="max-w-xl mx-auto mb-12 text-lg text-gray-500 leading-relaxed tracking-wide">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="#contact"
                  className="px-10 py-4 font-semibold text-sm uppercase tracking-[0.2em] text-white transition-all hover:opacity-80 text-center border"
                  style={{ borderColor: demo.primaryColor, backgroundColor: demo.primaryColor }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-10 py-4 font-semibold text-sm uppercase tracking-[0.2em] border text-white/60 hover:text-white transition-all text-center"
                  style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 10. TECH — Dark slate-900 bg, grid pattern, glow text-shadow, geometric shapes
    // ──────────────────────────────────────────────────────────────────
    case 'tech':
      return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 text-white">
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Geometric shapes — rotated squares */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-20 right-[15%] w-40 h-40 border rotate-45 opacity-20"
              style={{ borderColor: demo.primaryColor }}
            />
            <div
              className="absolute bottom-32 right-[25%] w-24 h-24 border rotate-12 opacity-15"
              style={{ borderColor: demo.primaryColor }}
            />
            <div
              className="absolute top-1/3 left-[8%] w-16 h-16 border rotate-45 opacity-10"
              style={{ borderColor: demo.primaryColor }}
            />
            <div
              className="absolute bottom-20 left-[20%] w-32 h-32 rotate-[30deg] opacity-[0.08]"
              style={{ backgroundColor: demo.primaryColor }}
            />
          </div>
          <div className="container relative z-10 px-6 py-20">
            <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div
                className="inline-block px-4 py-1 mb-8 text-xs font-mono uppercase tracking-widest border"
                style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}
              >
                {demo.icon} {demo.name}
              </div>
              <h1
                className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
                style={{
                  ...headingFont,
                  textShadow: `0 0 40px ${demo.primaryColor}60, 0 0 80px ${demo.primaryColor}30`,
                }}
              >
                {demo.heroTitle}{' '}
                <span style={{ color: demo.primaryColor }}>
                  {demo.heroHighlight.join(' ')}
                </span>
              </h1>
              <p className="max-w-xl mb-10 text-lg text-slate-400 leading-relaxed">
                {demo.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 font-semibold text-lg text-white transition-all hover:scale-105 text-center"
                  style={{
                    backgroundColor: demo.primaryColor,
                    boxShadow: `0 0 20px ${demo.primaryColor}40`,
                  }}
                >
                  {demo.ctaText}
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 font-semibold text-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-all text-center"
                >
                  {demo.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 11. ORGANIC — Image left in blob, text right, wave bottom, natural feel
    // ──────────────────────────────────────────────────────────────────
    case 'organic':
      return (
        <section id="home" className="relative min-h-screen flex items-center" style={{ backgroundColor: '#f7f5f0' }}>
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left — image in blob shape */}
              <div className={`flex-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div
                  className="relative mx-auto max-w-md aspect-square overflow-hidden"
                  style={{
                    borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
                  }}
                >
                  <img
                    src={demo.heroImage}
                    alt={demo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Right — text */}
              <div className={`flex-1 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <span
                  className="inline-block text-sm font-semibold uppercase tracking-widest mb-6"
                  style={{ color: demo.primaryColor }}
                >
                  {demo.icon} {demo.name}
                </span>
                <h1
                  className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900"
                  style={headingFont}
                >
                  {demo.heroTitle}{' '}
                  {renderHighlight()}
                </h1>
                <p className="max-w-md mb-10 text-lg text-gray-600 leading-relaxed">
                  {demo.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all hover:scale-105 text-center"
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    {demo.ctaText}
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all text-center"
                  >
                    {demo.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Flowing wave at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 60 C360 120 720 0 1080 60 C1260 90 1380 80 1440 60 L1440 120 L0 120 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>
      );

    // ──────────────────────────────────────────────────────────────────
    // 12. BOLD — Full image bg, huge overlapping text, semi-transparent color strip
    // ──────────────────────────────────────────────────────────────────
    case 'bold':
      return (
        <section
          id="home"
          className="relative min-h-screen flex items-end overflow-hidden text-white"
          style={{
            backgroundImage: `url("${demo.heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          {/* Semi-transparent primaryColor strip */}
          <div
            className="absolute left-0 right-0 h-48 bottom-[20%]"
            style={{ backgroundColor: demo.primaryColor, opacity: 0.6 }}
          />
          <div className="container relative z-10 px-6 pb-16 pt-32">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <h1
                className="font-black text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.85] uppercase tracking-tight"
                style={headingFont}
              >
                {demo.heroTitle}{' '}
                <span style={{ color: demo.primaryColor }}>{demo.heroHighlight.join(' ')}</span>
              </h1>
              <div className="mt-8 max-w-lg">
                <p className="mb-8 text-lg md:text-xl text-gray-200 leading-relaxed">
                  {demo.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 font-bold text-lg text-white transition-all hover:scale-105 text-center"
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    {demo.ctaText}
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all text-center"
                  >
                    {demo.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  }
};

export default Hero;
