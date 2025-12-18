import React, { useEffect, useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { getStyleClasses } from '../config/styles';

const Hero = () => {
  const { demo, styleId } = useDemo();
  const [isVisible, setIsVisible] = useState(false);
  const styleClasses = getStyleClasses(styleId);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isStyle2 = styleId === 'style-2';

  // Style 2: Split-screen modern layout
  if (isStyle2) {
    return (
      <section id="home" className="relative min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-0">
          <div className="flex flex-col lg:flex-row min-h-screen items-center">
            {/* Left Content Panel */}
            <div className="flex-1 flex items-center py-20 lg:py-0">
              <div
                className={`transition-all duration-1000 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
              >
                {/* Small tag/badge */}
                <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
                  <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: demo.primaryColor }}>
                    {demo.icon} {demo.name}
                  </span>
                </div>

                <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                  {demo.heroTitle}{' '}
                  <span className="block mt-2" style={{ color: demo.primaryColor }}>
                    {demo.heroHighlight.join(' ')}
                  </span>
                </h1>

                <p className="max-w-lg mb-10 text-xl text-gray-300 leading-relaxed">
                  {demo.heroSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-full font-semibold text-white text-lg transition-all hover:scale-105 shadow-xl inline-block text-center"
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    {demo.ctaText} →
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 rounded-full font-semibold border-2 border-white/20 text-white transition-all hover:bg-white/10 inline-block text-center text-lg"
                  >
                    {demo.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-screen w-full">
              <div
                className={`absolute inset-0 lg:relative transition-all duration-1000 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
              >
                <div className="relative h-[400px] lg:h-screen w-full overflow-hidden rounded-2xl lg:rounded-none">
                  <img
                    src={demo.heroImage}
                    alt={demo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Style 1: Traditional centered hero with overlay
  const overlayOpacity = 'bg-opacity-60';
  const buttonRounding = 'rounded-xl';

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-white bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${demo.heroImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>

      <div className="container relative z-10 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl">
            {demo.heroTitle}{' '}
            {demo.heroHighlight.map((word, index) => (
              <span
                key={index}
                style={{ color: demo.primaryColor }}
              >
                {word}{index < demo.heroHighlight.length - 1 ? ' ' : ''}
              </span>
            ))}
            {' '}Ontmoet
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-gray-300">
            {demo.heroSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className={`px-8 py-3 ${buttonRounding} font-semibold text-white transition-all hover:opacity-90`}
              style={{ backgroundColor: demo.primaryColor }}
            >
              {demo.ctaText}
            </a>
            <a
              href="#services"
              className={`px-8 py-3 ${buttonRounding} font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all`}
            >
              {demo.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-8">
        <a
          href="#about"
          className={`flex items-center justify-center w-10 h-10 text-white animate-bounce ${buttonRounding}`}
          style={{ backgroundColor: demo.primaryColor }}
          aria-label="Scroll naar beneden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
