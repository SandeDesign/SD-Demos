import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

const About = () => {
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

  // --- FULLBLEED-BG: Image background with glassmorphism text overlay ---
  if (preset.aboutLayout === 'fullbleed-bg') {
    return (
      <section id="about" ref={sectionRef} className="relative" style={{ padding: 'var(--section-spacing, 80px) 0' }}>
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${demo.about.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container relative z-10">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Glassmorphism card */}
            <div className={`${cardRadiusClass} p-10 lg:p-16 bg-white/10 backdrop-blur-md border border-white/20`}>
              <span className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold uppercase tracking-wider">
                Over Ons
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-xl text-white/80 mb-4">{demo.about.subtitle}</p>
              <p className="text-lg text-white/70 leading-relaxed mb-10">{demo.about.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {demo.about.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`${cardRadiusClass} p-4 bg-white/10 border border-white/10 text-white text-sm font-medium`}
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`inline-block mt-10 px-8 py-3 ${cardRadiusClass} text-white font-semibold hover:opacity-90 transition-all`}
                style={{ backgroundColor: demo.primaryColor }}
              >
                Neem Contact Op
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- IMAGE-RIGHT (default): Side-by-side with image and text ---
  return (
    <section id="about" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing, 80px) 0' }}>
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
                className={`w-full h-96 object-cover ${cardRadiusClass} shadow-xl`}
              />
              <div
                className={`absolute -bottom-6 -right-6 w-48 h-48 ${cardRadiusClass} flex items-center justify-center text-white`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={headingFont}>
              {demo.about.title}
            </h2>
            <p className="text-lg mb-2 text-gray-500">{demo.about.subtitle}</p>
            <p className="text-gray-600 mb-8">{demo.about.description}</p>

            <div className="grid grid-cols-2 gap-4">
              {demo.about.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 ${cardRadiusClass} transition-transform hover:scale-105`}
                  style={{ backgroundColor: 'var(--section-bg-alt, #f9fafb)' }}
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className={`inline-block mt-8 px-8 py-3 text-white font-semibold ${cardRadiusClass} hover:opacity-90 transition-all`}
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
