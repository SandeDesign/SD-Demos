import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const Testimonials = () => {
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
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full"
            style={{ backgroundColor: demo.primaryColor, color: 'white' }}
          >
            Recensies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wat Onze <span style={{ color: demo.primaryColor }}>Klanten</span> Zeggen
          </h2>
          <p className="text-gray-400">
            Ontdek waarom onze klanten keer op keer voor ons kiezen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {demo.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 bg-gray-800 rounded-lg transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={demo.primaryColor}
                    stroke={demo.primaryColor}
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
