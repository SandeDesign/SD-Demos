import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const Testimonials = () => {
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
  const bgClass = isStyle2 ? 'bg-black' : 'bg-gray-900';
  const cardBg = isStyle2 ? 'bg-gray-900' : 'bg-gray-800';
  const textClass = isStyle2 ? 'text-gray-200' : 'text-gray-300';

  return (
    <section id="testimonials" ref={sectionRef} className={`py-20 ${bgClass} text-white`}>
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className={`inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full ${
              isStyle2 ? 'shadow-xl shadow-purple-500/40' : ''
            }`}
            style={{ backgroundColor: demo.primaryColor, color: 'white' }}
          >
            Recensies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wat Onze <span style={{ color: demo.primaryColor }} className={isStyle2 ? 'drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]' : ''}>Klanten</span> Zeggen
          </h2>
          <p className="text-gray-400">
            Ontdek waarom onze klanten keer op keer voor ons kiezen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {demo.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 ${cardBg} rounded-lg transition-all duration-700 transform group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                isStyle2
                  ? 'border-2 border-purple-500/30 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 relative overflow-hidden'
                  : 'hover:bg-gray-700'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background glow effect for Style 2 */}
              {isStyle2 && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}

              {/* Quote icon for Style 2 */}
              {isStyle2 && (
                <div className="absolute top-4 right-4 text-6xl text-purple-500/10 font-serif">"</div>
              )}

              <div className="relative z-10">
                {/* Star Rating */}
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
                      className={isStyle2 ? 'drop-shadow-[0_0_3px_rgba(147,51,234,0.5)]' : ''}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`${textClass} mb-6 ${isStyle2 ? 'text-lg' : 'italic'}`}>
                  {isStyle2 ? <>&ldquo;</> : '"'}{testimonial.text}{isStyle2 ? <>&rdquo;</> : '"'}
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                      isStyle2 ? 'shadow-lg shadow-purple-500/50 text-lg' : ''
                    }`}
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-semibold ${isStyle2 ? 'text-white' : ''}`}>{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
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
