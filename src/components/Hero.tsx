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

  const heroLayout = preset.heroLayout;
  const headingFont = { fontFamily: 'var(--font-heading)' };

  const HighlightWords = ({ className = '' }: { className?: string }) => (
    <span className={className} style={{ color: demo.primaryColor }}>
      {demo.heroHighlight.join(' ')}
    </span>
  );

  const CTAButtons = ({ variant = 'dark' }: { variant?: 'dark' | 'light' | 'color' }) => {
    const primaryBg = variant === 'color'
      ? 'bg-white'
      : '';
    const primaryText = variant === 'color'
      ? ''
      : 'text-white';
    const secondaryBorder = variant === 'light'
      ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
      : 'border-white/20 text-white hover:bg-white/10';

    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-xl inline-block text-center ${primaryBg} ${primaryText}`}
          style={{
            backgroundColor: variant === 'color' ? 'white' : demo.primaryColor,
            color: variant === 'color' ? demo.primaryColor : 'white',
          }}
        >
          {demo.ctaText}
        </a>
        <a
          href="#services"
          className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all inline-block text-center text-lg ${secondaryBorder}`}
        >
          {demo.ctaSecondary}
        </a>
      </div>
    );
  };

  // --- SPLIT-IMAGE: 50/50 text left, image right ---
  if (heroLayout === 'split-image') {
    return (
      <section id="home" className="relative min-h-screen bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row min-h-screen items-center">
            <div className="flex-1 flex items-center py-20 lg:py-0">
              <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: demo.primaryColor }}>
                    {demo.icon} {demo.name}
                  </span>
                </div>
                <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight" style={headingFont}>
                  {demo.heroTitle}{' '}
                  <span className="block mt-2" style={{ color: demo.primaryColor }}>
                    {demo.heroHighlight.join(' ')}
                  </span>
                </h1>
                <p className="max-w-lg mb-10 text-xl text-gray-300 leading-relaxed">{demo.heroSubtitle}</p>
                <CTAButtons variant="dark" />
              </div>
            </div>
            <div className="flex-1 relative min-h-[400px] lg:min-h-screen w-full">
              <div className={`absolute inset-0 lg:relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <div className="relative h-[400px] lg:h-screen w-full overflow-hidden rounded-2xl lg:rounded-none">
                  <img src={demo.heroImage} alt={demo.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- FULLBLEED-IMAGE: Full background image + dark overlay + centered text ---
  if (heroLayout === 'fullbleed-image') {
    return (
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen text-white bg-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("${demo.heroImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="container relative z-10 text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl" style={headingFont}>
              {demo.heroTitle}{' '}
              <HighlightWords />
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-gray-300">{demo.heroSubtitle}</p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
              <a
                href="#services"
                className="px-8 py-3 rounded-xl font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all"
              >
                {demo.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-8">
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 text-white animate-bounce rounded-xl"
            style={{ backgroundColor: demo.primaryColor }}
            aria-label="Scroll naar beneden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </section>
    );
  }

  // --- FULLTEXT-LEFT: Large text left, no visible hero image, color accent bg ---
  if (heroLayout === 'fulltext-left') {
    return (
      <section id="home" className="relative min-h-screen flex items-center" style={{ backgroundColor: 'var(--section-bg-alt, #fafaf8)' }}>
        {/* Subtle blurred background image */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("${demo.heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px)',
          }}
        />
        <div className="container relative z-10 py-32">
          <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: demo.primaryColor }}>
                {demo.icon} {demo.name}
              </span>
            </div>
            <h1 className="mb-8 font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-gray-900" style={headingFont}>
              {demo.heroTitle}{' '}
              <HighlightWords />
            </h1>
            <p className="max-w-2xl mb-12 text-xl md:text-2xl text-gray-600 leading-relaxed">{demo.heroSubtitle}</p>
            <CTAButtons variant="light" />
          </div>
        </div>
        {/* Decorative vertical line */}
        <div className="absolute right-12 top-0 bottom-0 w-px hidden lg:block" style={{ backgroundColor: demo.primaryColor, opacity: 0.2 }} />
      </section>
    );
  }

  // --- CENTERED-BOLD: No image, primaryColor bg, big white centered text ---
  if (heroLayout === 'centered-bold') {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{ backgroundColor: demo.primaryColor }}
      >
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-black/5" />
        </div>
        <div className="container relative z-10 text-center py-20">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h1 className="mb-6 font-bold text-5xl md:text-7xl lg:text-8xl leading-tight text-white" style={headingFont}>
              {demo.heroTitle}
              <br />
              {demo.heroHighlight.join(' ')}
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-xl md:text-2xl text-white/80 leading-relaxed">{demo.heroSubtitle}</p>
            <CTAButtons variant="color" />
          </div>
        </div>
      </section>
    );
  }

  // --- DIAGONAL: Diagonal split, color vs image ---
  if (heroLayout === 'diagonal') {
    return (
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Color side */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: demo.primaryColor }}
        />
        {/* Image side with diagonal clip */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${demo.heroImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 55% 100%)',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container relative z-10 min-h-screen flex items-center">
          <div className={`max-w-xl py-20 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <h1 className="mb-6 font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-white" style={headingFont}>
              {demo.heroTitle}
              <br />
              {demo.heroHighlight.join(' ')}
            </h1>
            <p className="max-w-lg mb-10 text-lg text-white/80 leading-relaxed">{demo.heroSubtitle}</p>
            <CTAButtons variant="color" />
          </div>
        </div>
      </section>
    );
  }

  // --- OVERLAY-TEXT: Image at 30% opacity, text dominant ---
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("${demo.heroImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      <div className="container relative z-10 py-32">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <span className="inline-block px-4 py-2 mb-6 rounded-full border text-sm font-semibold uppercase tracking-wider" style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}>
            {demo.icon} {demo.name}
          </span>
          <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900" style={headingFont}>
            {demo.heroTitle}{' '}
            <HighlightWords />
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-700 leading-relaxed">{demo.heroSubtitle}</p>
          <CTAButtons variant="light" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
