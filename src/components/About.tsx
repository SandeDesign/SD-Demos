import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {demo.about.title}
            </h2>
            <p className="text-lg text-gray-500 mb-2">{demo.about.subtitle}</p>
            <p className="text-gray-600 mb-8">{demo.about.description}</p>

            <div className="grid grid-cols-2 gap-4">
              {demo.about.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
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
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 text-white font-semibold rounded-md transition-all hover:opacity-90"
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
