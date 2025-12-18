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
  const bgClass = isStyle2 ? 'bg-gray-800' : 'bg-white';
  const textClass = isStyle2 ? 'text-white' : 'text-gray-900';
  const subtextClass = isStyle2 ? 'text-gray-300' : 'text-gray-600';
  const featureTextClass = isStyle2 ? 'text-gray-200' : 'text-gray-700';

  return (
    <section id="about" ref={sectionRef} className={`py-20 ${bgClass}`}>
      <div className="container">
        <div className={`grid gap-12 lg:grid-cols-2 items-center ${isStyle2 ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Section - Reverse order in Style 2 */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : `${isStyle2 ? 'translate-x-12' : '-translate-x-12'} opacity-0`
            } ${isStyle2 ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative">
              <img
                src={demo.about.image}
                alt={demo.about.title}
                className={`w-full h-96 object-cover rounded-lg ${
                  isStyle2 ? 'shadow-2xl shadow-purple-500/30 border-2 border-purple-500/20' : 'shadow-xl'
                }`}
              />
              <div
                className={`absolute -bottom-6 ${isStyle2 ? '-left-6' : '-right-6'} w-48 h-48 rounded-lg flex items-center justify-center text-white ${
                  isStyle2 ? 'shadow-2xl shadow-purple-500/50' : ''
                }`}
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
              isVisible ? 'translate-x-0 opacity-100' : `${isStyle2 ? '-translate-x-12' : 'translate-x-12'} opacity-0`
            } ${isStyle2 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <span
              className={`inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full ${
                isStyle2 ? 'shadow-lg shadow-purple-500/30' : ''
              }`}
              style={{ backgroundColor: isStyle2 ? demo.primaryColor : demo.primaryColorLight, color: isStyle2 ? 'white' : demo.primaryColor }}
            >
              Over Ons
            </span>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
              {demo.about.title}
            </h2>
            <p className={`text-lg mb-2 ${isStyle2 ? 'text-gray-400' : 'text-gray-500'}`}>{demo.about.subtitle}</p>
            <p className={`${subtextClass} mb-8`}>{demo.about.description}</p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {demo.about.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 rounded-lg transition-transform hover:scale-105 ${
                    isStyle2 ? 'bg-gray-900/50 border border-purple-500/20' : 'bg-gray-50'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      isStyle2 ? 'shadow-lg shadow-purple-500/30' : ''
                    }`}
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
              className={`inline-block mt-8 px-8 py-3 text-white font-semibold rounded-md transition-all ${
                isStyle2
                  ? 'shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105'
                  : 'hover:opacity-90'
              }`}
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
