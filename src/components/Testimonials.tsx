import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

const Testimonials = () => {
  const { demo } = useDemo();
  const preset = usePreset();
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const headingFont = { fontFamily: 'var(--font-heading)' };

  const cardRadiusClass = ({
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-lg',
    xl: 'rounded-2xl',
    full: 'rounded-3xl',
  } as Record<string, string>)[preset.borderRadius] || 'rounded-lg';

  // Use stacked layout for soft/artisan/playful, grid for editorial/brutalist/corporate
  const useStacked = ['soft', 'artisan', 'playful'].includes(preset.name);

  const StarRating = ({ rating, color }: { rating: number; color: string }) => (
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );

  // --- STACKED: Vertical large testimonial cards ---
  if (useStacked) {
    return (
      <section id="testimonials" ref={sectionRef} style={{ padding: 'var(--section-spacing, 80px) 0', backgroundColor: 'var(--section-bg-alt, #f3f4f6)' }}>
        <div className="container">
          <div className="max-w-3xl mb-20">
            <div className={`inline-block px-4 py-2 mb-6 ${cardRadiusClass} bg-white border border-gray-200`}>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: demo.primaryColor }}>
                Recensies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={headingFont}>
              Wat Klanten <span style={{ color: demo.primaryColor }}>Zeggen</span>
            </h2>
            <p className="text-xl text-gray-600">Echte ervaringen van echte mensen.</p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {demo.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white ${cardRadiusClass} overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-2 p-10 lg:p-14 flex flex-col justify-center">
                    <div className="mb-6">
                      <svg className="w-16 h-16 opacity-20" style={{ color: demo.primaryColor }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                      {testimonial.text}
                    </p>
                    <StarRating rating={testimonial.rating} color={demo.primaryColor} />
                    <div>
                      <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center p-10 lg:p-14" style={{ backgroundColor: demo.primaryColorLight }}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundColor: demo.primaryColor }} />
                    <div
                      className="relative w-32 h-32 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
                      style={{ backgroundColor: demo.primaryColor }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // --- GRID (default): Dark background, 3-column card grid ---
  return (
    <section id="testimonials" ref={sectionRef} className="bg-gray-900 text-white" style={{ padding: 'var(--section-spacing, 80px) 0' }}>
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full"
            style={{ backgroundColor: demo.primaryColor, color: 'white' }}
          >
            Recensies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={headingFont}>
            Wat Onze <span style={{ color: demo.primaryColor }}>Klanten</span> Zeggen
          </h2>
          <p className="text-gray-400">Ontdek waarom onze klanten keer op keer voor ons kiezen.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {demo.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 bg-gray-800 ${cardRadiusClass} hover:bg-gray-700 transition-all duration-700 transform group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <StarRating rating={testimonial.rating} color={demo.primaryColor} />
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
