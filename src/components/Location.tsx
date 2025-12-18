import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const Location = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full"
            style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
          >
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neem <span style={{ color: demo.primaryColor }}>Contact</span> Op
          </h2>
          <p className="text-gray-600">
            We staan klaar om u te helpen. Neem gerust contact met ons op.
          </p>
        </div>

        <div
          className={`grid gap-8 lg:grid-cols-3 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: demo.primaryColorLight }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={demo.primaryColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Adres</h3>
            <p className="text-gray-600">{demo.contact.address}</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: demo.primaryColorLight }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={demo.primaryColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Telefoon</h3>
            <p className="text-gray-600">{demo.contact.phone}</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div
              className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: demo.primaryColorLight }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={demo.primaryColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">{demo.contact.email}</p>
          </div>
        </div>

        <div
          className={`mt-12 bg-white p-8 rounded-lg shadow-lg transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Openingstijden</h3>
          <div className="max-w-md mx-auto space-y-4">
            {demo.contact.hours.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-medium">{item.day}</span>
                <span className="text-gray-600">{item.hours}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={`mailto:${demo.contact.email}`}
              className="inline-block px-8 py-3 text-white font-semibold rounded-md transition-all hover:opacity-90"
              style={{ backgroundColor: demo.primaryColor }}
            >
              {demo.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
