import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const Services = () => {
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
  const bgClass = isStyle2 ? 'bg-gray-900' : 'bg-gray-100';
  const textClass = isStyle2 ? 'text-white' : 'text-gray-900';
  const cardBg = isStyle2 ? 'bg-gray-800' : 'bg-white';
  const descTextClass = isStyle2 ? 'text-gray-300' : 'text-gray-600';
  const subtextClass = isStyle2 ? 'text-gray-400' : 'text-gray-500';

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 ${bgClass}`}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className={`inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full ${
              isStyle2 ? 'shadow-lg shadow-purple-500/30' : ''
            }`}
            style={{ backgroundColor: isStyle2 ? demo.primaryColor : demo.primaryColorLight, color: isStyle2 ? 'white' : demo.primaryColor }}
          >
            {demo.navLinks.find(l => l.href === '#services')?.label || 'Diensten'}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
            Onze <span style={{ color: demo.primaryColor }} className={isStyle2 ? 'drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]' : ''}>Diensten</span>
          </h2>
          <p className={subtextClass}>
            Ontdek ons aanbod van professionele diensten, ontworpen om aan al uw wensen te voldoen.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demo.services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 ${cardBg} rounded-lg transition-all duration-700 transform group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                isStyle2
                  ? 'border-2 border-purple-500/20 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105'
                  : 'shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Price Badge */}
              {service.price > 0 && (
                <div
                  className={`absolute top-0 right-0 px-4 py-2 text-white transform translate-y-[-50%] rounded-full ${
                    isStyle2 ? 'shadow-lg shadow-purple-500/50' : ''
                  }`}
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  €{service.price}
                </div>
              )}
              {service.price === 0 && (
                <div
                  className={`absolute top-0 right-0 px-4 py-2 text-white transform translate-y-[-50%] rounded-full text-sm ${
                    isStyle2 ? 'shadow-lg shadow-purple-500/50' : ''
                  }`}
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  Op aanvraag
                </div>
              )}

              {/* Icon */}
              <div
                className={`flex items-center justify-center w-16 h-16 mb-6 rounded-lg text-2xl transition-transform group-hover:scale-110 ${
                  isStyle2 ? 'shadow-lg shadow-purple-500/30' : ''
                }`}
                style={{ backgroundColor: demo.primaryColorLight }}
              >
                {demo.icon}
              </div>

              <h3 className={`mb-3 text-xl font-bold ${textClass}`}>{service.title}</h3>
              <p className={`mb-4 ${descTextClass}`}>{service.description}</p>

              {/* Duration */}
              <div className={`flex items-center ${subtextClass} mb-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{service.duration}</span>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`inline-block w-full py-3 text-center text-white transition-all duration-300 rounded-md ${
                  isStyle2
                    ? 'hover:shadow-lg hover:shadow-purple-500/40 transform hover:scale-105'
                    : 'hover:opacity-90'
                }`}
                style={{ backgroundColor: demo.primaryColor }}
              >
                {demo.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
