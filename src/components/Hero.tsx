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
  const overlayOpacity = isStyle2 ? 'bg-opacity-80' : 'bg-opacity-60';
  const buttonRounding = isStyle2 ? 'rounded-lg' : 'rounded-xl';

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-white bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isStyle2 ? '0.85' : '0.7'}), rgba(0, 0, 0, ${isStyle2 ? '0.85' : '0.7'})), url("${demo.heroImage}")`,
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
          <h1 className={`mb-4 font-bold ${isStyle2 ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl lg:text-6xl'}`}>
            {demo.heroTitle}{' '}
            {demo.heroHighlight.map((word, index) => (
              <span
                key={index}
                style={{ color: demo.primaryColor }}
                className={isStyle2 ? 'drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]' : ''}
              >
                {word}{index < demo.heroHighlight.length - 1 ? ' ' : ''}
              </span>
            ))}
            {' '}Ontmoet
          </h1>
          <p className={`max-w-2xl mx-auto mb-8 md:text-xl ${isStyle2 ? 'text-xl text-gray-200' : 'text-lg text-gray-300'}`}>
            {demo.heroSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className={`px-8 py-3 ${buttonRounding} font-semibold text-white transition-all hover:opacity-90 ${isStyle2 ? 'shadow-xl shadow-purple-500/30 transform hover:scale-105' : ''}`}
              style={{ backgroundColor: demo.primaryColor }}
            >
              {demo.ctaText}
            </a>
            <a
              href="#services"
              className={`px-8 py-3 ${buttonRounding} font-semibold border-2 transition-all ${
                isStyle2
                  ? 'border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              {demo.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-8">
        <a
          href="#about"
          className={`flex items-center justify-center w-10 h-10 text-white animate-bounce ${buttonRounding} ${isStyle2 ? 'shadow-lg shadow-purple-500/50' : ''}`}
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
