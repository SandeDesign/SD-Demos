import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const About = () => {
  const { demo, styleId } = useDemo();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const isStyle2 = styleId === 'style-2';

  // Style 2: Full-width stats and centered content layout
  if (isStyle2) {
    return (
      <section id="about" ref={sectionRef} className="relative py-0">
        {/* Background Image Section */}
        <div className="relative py-32 bg-gray-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("${demo.about.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>

          <div className="container relative z-10">
            <div
              className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm font-semibold uppercase tracking-wider text-white">
                  Over Ons
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {demo.about.title}
              </h2>

              <p className="text-xl text-gray-300 mb-4">
                {demo.about.subtitle}
              </p>

              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                {demo.about.description}
              </p>
            </div>
          </div>
        </div>

        {/* Stats/Features Grid Section */}
        <div className="bg-white py-20">
          <div className="container">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              {demo.about.features.map((feature, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl hover:border-gray-200 transition-all hover:shadow-xl group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: demo.primaryColor }}></div>

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl"
                    style={{ backgroundColor: demo.primaryColorLight }}
                  >
                    {demo.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature}
                  </h3>

                  <div className="w-12 h-1 rounded-full group-hover:w-full transition-all duration-300" style={{ backgroundColor: demo.primaryColor }}></div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <a
                href="#contact"
                className="inline-flex items-center px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-2xl"
                style={{ backgroundColor: demo.primaryColor }}
              >
                Neem Contact Op
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Style 1: Traditional side-by-side layout
  const bgClass = 'bg-white';
  const textClass = 'text-gray-900';
  const subtextClass = 'text-gray-600';
  const featureTextClass = 'text-gray-700';

  return (
    <section id="about" ref={sectionRef} className={`py-20 ${bgClass}`}>
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image Section */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="relative">
              <img
                src={demo.about.image}
                alt={demo.about.title}
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: demo.primaryColor }}
              >
                <div className="text-center">
                  <span className="text-4xl font-bold block">{demo.icon}</span>
                  <span className="text-sm mt-2 block">{demo.tagline}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <span
              className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full"
              style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
            >
              Over Ons
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
              {demo.about.title}
            </h2>
            <p className="text-lg mb-2 text-gray-500">{demo.about.subtitle}</p>
            <p className={`${subtextClass} mb-8`}>{demo.about.description}</p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {demo.about.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg transition-transform hover:scale-105"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                    style={{ backgroundColor: demo.primaryColorLight }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={demo.primaryColor}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className={`${featureTextClass} font-medium text-sm`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-all"
              style={{ backgroundColor: demo.primaryColor }}
            >
              Neem Contact Op
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
