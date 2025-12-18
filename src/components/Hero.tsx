import React, { useEffect, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const Hero = () => {
  const { demo } = useDemo();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container relative z-10 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            {demo.heroTitle}{' '}
            {demo.heroHighlight.map((word, index) => (
              <span key={index} style={{ color: demo.primaryColor }}>
                {word}{index < demo.heroHighlight.length - 1 ? ' ' : ''}
              </span>
            ))}
            {' '}Ontmoet
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-300 md:text-xl">
            {demo.heroSubtitle}
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-md font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: demo.primaryColor }}
            >
              {demo.ctaText}
            </a>
            <a
              href="#services"
              className="px-8 py-3 rounded-md font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all"
            >
              {demo.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-8">
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 text-white rounded-full animate-bounce"
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
