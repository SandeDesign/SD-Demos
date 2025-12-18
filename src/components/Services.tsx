import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const Services = () => {
  const { demo } = useDemo();
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gray-100"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full"
            style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
          >
            {demo.navLinks.find(l => l.href === '#services')?.label || 'Diensten'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onze <span style={{ color: demo.primaryColor }}>Diensten</span>
          </h2>
          <p className="text-gray-600">
            Ontdek ons aanbod van professionele diensten, ontworpen om aan al uw wensen te voldoen.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demo.services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white rounded-lg shadow-lg transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
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
                  className="absolute top-0 right-0 px-4 py-2 text-white transform translate-y-[-50%] rounded-full"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  Op aanvraag
                </div>
              )}
              <div
                className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg text-2xl"
                style={{ backgroundColor: demo.primaryColorLight }}
              >
                {demo.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <div className="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{service.duration}</span>
              </div>
              <a
                href="#contact"
                className="inline-block w-full py-3 mt-6 text-center text-white transition-colors duration-300 rounded-md hover:opacity-90"
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
