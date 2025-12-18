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

  // Style 2: Alternating horizontal timeline layout
  if (isStyle2) {
    return (
      <section id="services" ref={sectionRef} className="py-32 bg-white">
        <div className="container">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-gray-100 border border-gray-200">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: demo.primaryColor }}>
                {demo.navLinks.find(l => l.href === '#services')?.label || 'Diensten'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Wat Wij <span style={{ color: demo.primaryColor }}>Aanbieden</span>
            </h2>
            <p className="text-xl text-gray-600">
              Professionele diensten afgestemd op uw specifieke behoeften.
            </p>
          </div>

          {/* Timeline Services */}
          <div className="space-y-16">
            {demo.services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl"
                        style={{ backgroundColor: demo.primaryColor }}
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-2xl p-8 lg:p-10 border-2 border-gray-100 hover:border-gray-200 transition-all hover:shadow-xl group">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                          <div className="flex items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {service.price > 0 ? (
                            <div className="text-right">
                              <div className="text-3xl font-bold" style={{ color: demo.primaryColor }}>€{service.price}</div>
                              <div className="text-sm text-gray-500">per behandeling</div>
                            </div>
                          ) : (
                            <div className="px-6 py-3 rounded-full bg-gray-900 text-white font-semibold">
                              Op aanvraag
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                      <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 shadow-lg group-hover:shadow-xl"
                        style={{ backgroundColor: demo.primaryColor }}
                      >
                        {demo.ctaText}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Style 1: Traditional grid layout
  const bgClass = 'bg-gray-100';
  const textClass = 'text-gray-900';
  const cardBg = 'bg-white';
  const descTextClass = 'text-gray-600';
  const subtextClass = 'text-gray-500';

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 ${bgClass}`}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full"
            style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
          >
            {demo.navLinks.find(l => l.href === '#services')?.label || 'Diensten'}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
            Onze <span style={{ color: demo.primaryColor }}>Diensten</span>
          </h2>
          <p className={subtextClass}>
            Ontdek ons aanbod van professionele diensten, ontworpen om aan al uw wensen te voldoen.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demo.services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 ${cardBg} rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 transform group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Price Badge */}
              {service.price > 0 && (
                <div
                  className="absolute top-0 right-0 px-4 py-2 text-white transform translate-y-[-50%] rounded-full"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  €{service.price}
                </div>
              )}
              {service.price === 0 && (
                <div
                  className="absolute top-0 right-0 px-4 py-2 text-white transform translate-y-[-50%] rounded-full text-sm"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  Op aanvraag
                </div>
              )}

              {/* Icon */}
              <div
                className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg text-2xl transition-transform group-hover:scale-110"
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
                className="inline-block w-full py-3 text-center text-white hover:opacity-90 transition-all duration-300 rounded-md"
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
