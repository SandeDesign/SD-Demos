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
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const headingFont = { fontFamily: 'var(--font-heading)' };
  const vis = (base: string, delay = '') =>
    `${base} transition-all duration-1000 ${delay} transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    }`;

  const { name } = preset;

  // ─── 1. EDITORIAL ────────────────────────────────────────────────
  if (name === 'editorial') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 80px) 0', background: 'var(--section-bg-alt, #fafaf8)' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Text left 60% */}
            <div className={`lg:col-span-3 ${vis('')}`}>
              <span
                className="inline-block mb-6 text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: demo.primaryColor }}
              >
                {demo.icon} Over Ons
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight"
                style={{ ...headingFont, fontStyle: 'italic' }}
              >
                {demo.about.title}
              </h2>
              <p className="text-xl text-gray-500 mb-3 italic">{demo.about.subtitle}</p>
              <div className="w-16 h-px mb-8" style={{ backgroundColor: demo.primaryColor }} />
              <p className="text-gray-600 leading-relaxed mb-10 max-w-xl text-lg">
                {demo.about.description}
              </p>
              <ul className="space-y-3">
                {demo.about.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 text-base flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: demo.primaryColor }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-gray-400 italic">{demo.tagline}</p>
            </div>
            {/* Image right 40% with offset frame */}
            <div className={`lg:col-span-2 ${vis('', 'delay-300')}`}>
              <div className="relative">
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 border"
                  style={{ borderColor: demo.primaryColor }}
                />
                <img
                  src={demo.about.image}
                  alt={demo.about.title}
                  className="relative w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 2. BRUTALIST ────────────────────────────────────────────────
  if (name === 'brutalist') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 80px) 0', background: 'var(--section-bg-alt, #f5f5f5)' }}
      >
        {/* Full-width image strip */}
        <div className={vis('w-full')}>
          <img
            src={demo.about.image}
            alt={demo.about.title}
            className="w-full h-64 object-cover grayscale"
            style={{ borderRadius: 0 }}
          />
        </div>
        <div className="container mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left column */}
            <div className={`border-r-0 md:border-r-2 border-black pr-0 md:pr-10 ${vis('')}`}>
              <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: demo.primaryColor }}>
                {demo.icon} OVER ONS
              </span>
              <h2
                className="text-4xl md:text-6xl font-black mb-6 text-black uppercase leading-none"
                style={headingFont}
              >
                {demo.about.title}
              </h2>
              <p className="text-lg font-bold text-black uppercase mb-2">{demo.about.subtitle}</p>
            </div>
            {/* Right column */}
            <div className={`pl-0 md:pl-10 mt-8 md:mt-0 ${vis('', 'delay-200')}`}>
              <p className="text-gray-700 leading-relaxed mb-8 text-base">{demo.about.description}</p>
              <ul className="space-y-3">
                {demo.about.features.map((feature, i) => (
                  <li key={i} className="text-black font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                    <span className="w-3 h-0.5 bg-black inline-block" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs uppercase tracking-widest text-gray-500">{demo.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 3. SOFT ─────────────────────────────────────────────────────
  if (name === 'soft') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 80px) 0', background: 'var(--section-bg-alt, #fdf8f4)' }}
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center ${vis('')}`}>
            {/* Large rounded image */}
            <div className="relative inline-block mb-10">
              <img
                src={demo.about.image}
                alt={demo.about.title}
                className="w-full max-w-2xl h-80 md:h-96 object-cover rounded-3xl shadow-lg mx-auto"
              />
            </div>

            {/* Glassmorphism accent card */}
            <div className="relative -mt-16 mx-auto max-w-xl rounded-3xl p-8 bg-white/60 backdrop-blur-lg border border-white/40 shadow-xl z-10">
              <span className="text-3xl mb-2 block">{demo.icon}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-lg text-gray-500 mb-2">{demo.about.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{demo.about.description}</p>
            </div>

            {/* Features as pill badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {demo.about.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-full text-sm font-medium shadow-sm"
                  style={{
                    backgroundColor: demo.primaryColorLight,
                    color: demo.primaryColor,
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400">{demo.tagline}</p>
          </div>
        </div>
      </section>
    );
  }

  // ─── 4. CORPORATE ────────────────────────────────────────────────
  if (name === 'corporate') {
    return (
      <section
        id="about"
        ref={sectionRef}
        className="bg-white"
        style={{ padding: 'var(--section-spacing, 80px) 0' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image left with stat badge */}
            <div className={`relative ${vis('')}`}>
              <img
                src={demo.about.image}
                alt={demo.about.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div
                className="absolute bottom-4 left-4 rounded-lg px-5 py-3 text-white shadow-xl flex items-center gap-3"
                style={{ backgroundColor: demo.primaryColor }}
              >
                <span className="text-2xl">{demo.icon}</span>
                <div>
                  <span className="block text-xl font-bold leading-tight">100%</span>
                  <span className="text-xs opacity-80">Klanttevredenheid</span>
                </div>
              </div>
            </div>
            {/* Text right */}
            <div className={vis('', 'delay-200')}>
              <span
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase rounded tracking-wider"
                style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
              >
                Over Ons
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-lg text-gray-500 mb-2">{demo.about.subtitle}</p>
              <p className="text-gray-600 mb-8 leading-relaxed">{demo.about.description}</p>
              {/* 2x2 feature grid with check icons */}
              <div className="grid grid-cols-2 gap-4">
                {demo.about.features.map((feature, i) => (
                  <div key={i} className="flex items-center p-3 rounded-lg border border-gray-200 bg-gray-50 gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: demo.primaryColorLight }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={demo.primaryColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-400">{demo.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 5. ARTISAN ──────────────────────────────────────────────────
  if (name === 'artisan') {
    return (
      <section
        id="about"
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{ padding: 'var(--section-spacing, 80px) 0' }}
      >
        {/* Full background image at 30% opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${demo.about.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-orange-50/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-2xl mx-auto ${vis('')}`}>
            {/* Glassmorphism card */}
            <div className="rounded-2xl p-10 md:p-14 bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl text-center">
              {/* Decorative icon */}
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl shadow-md"
                style={{ backgroundColor: demo.primaryColorLight }}
              >
                {demo.icon}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-lg text-gray-500 italic mb-2">{demo.about.subtitle}</p>
              <div className="w-12 h-px mx-auto my-6" style={{ backgroundColor: demo.primaryColor }} />
              <p className="text-gray-600 leading-relaxed mb-8">{demo.about.description}</p>

              {/* Features inside the card */}
              <div className="grid grid-cols-2 gap-3 text-left">
                {demo.about.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span style={{ color: demo.primaryColor }}>&#9670;</span>
                    {feature}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-gray-400 tracking-wider uppercase">{demo.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 6. PLAYFUL ──────────────────────────────────────────────────
  if (name === 'playful') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 80px) 0', background: 'var(--section-bg-alt, #fffbf0)' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image with blob clip-path */}
            <div className={vis('')}>
              <div className="relative max-w-md mx-auto lg:mx-0">
                <img
                  src={demo.about.image}
                  alt={demo.about.title}
                  className="w-full h-96 object-cover"
                  style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  }}
                />
                <div
                  className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg"
                  style={{ backgroundColor: demo.primaryColor }}
                >
                  {demo.icon}
                </div>
              </div>
            </div>
            {/* Text */}
            <div className={vis('', 'delay-200')}>
              <span
                className="inline-block px-4 py-2 mb-4 rounded-full text-sm font-bold"
                style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
              >
                Over Ons &#10024;
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-lg text-gray-500 mb-2">{demo.about.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{demo.about.description}</p>
              {/* Features as colorful badges */}
              <div className="flex flex-wrap gap-3">
                {demo.about.features.map((feature, i) => {
                  const bullets = ['&#9733;', '&#9829;', '&#9786;', '&#9733;', '&#9829;', '&#9786;'];
                  return (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-2xl text-sm font-semibold shadow-sm"
                      style={{
                        backgroundColor: i % 2 === 0 ? demo.primaryColorLight : demo.primaryColor,
                        color: i % 2 === 0 ? demo.primaryColor : '#fff',
                      }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: bullets[i % bullets.length] }} />{' '}
                      {feature}
                    </span>
                  );
                })}
              </div>
              <p className="mt-6 text-sm text-gray-400 font-medium">{demo.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 7. MAGAZINE ─────────────────────────────────────────────────
  if (name === 'magazine') {
    return (
      <section
        id="about"
        ref={sectionRef}
        className="bg-white"
        style={{ padding: '0 0 var(--section-spacing, 80px) 0' }}
      >
        {/* Large full-width image */}
        <div className={`relative ${vis('')}`}>
          <img
            src={demo.about.image}
            alt={demo.about.title}
            className="w-full h-96 object-cover"
          />
          {/* White card overlapping up */}
          <div className="container mx-auto px-4">
            <div className="relative -mt-24 bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto z-10">
              <span
                className="inline-block mb-4 text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: demo.primaryColor }}
              >
                {demo.icon} Over Ons
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 uppercase tracking-tight" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-lg text-gray-500 mb-2">{demo.about.subtitle}</p>
              <div className="w-20 h-1 mb-6" style={{ backgroundColor: demo.primaryColor }} />
              <p className="text-gray-600 leading-relaxed text-lg">{demo.about.description}</p>
              <p className="mt-4 text-sm text-gray-400">{demo.tagline}</p>
            </div>
          </div>
        </div>
        {/* Features in horizontal scroll row */}
        <div className="container mx-auto px-4 mt-10">
          <div className={`flex gap-4 overflow-x-auto pb-4 ${vis('', 'delay-300')}`}>
            {demo.about.features.map((feature, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-4 rounded-lg border-2 font-semibold text-sm uppercase tracking-wider whitespace-nowrap"
                style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ─── 8. RETRO ────────────────────────────────────────────────────
  if (name === 'retro') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 80px) 0', backgroundColor: '#faf5ee' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Polaroid-style image frame */}
            <div className={`flex justify-center ${vis('')}`}>
              <div className="bg-white rounded-lg shadow-xl p-4 pb-16 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src={demo.about.image}
                  alt={demo.about.title}
                  className="w-80 h-72 object-cover rounded"
                />
                <p className="text-center mt-4 text-gray-500 text-sm italic">{demo.tagline}</p>
              </div>
            </div>
            {/* Text beside */}
            <div className={vis('', 'delay-200')}>
              <span className="text-4xl mb-4 block">{demo.icon}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-xl text-gray-500 mb-2">{demo.about.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{demo.about.description}</p>
              {/* Features with colored dot bullets */}
              <ul className="space-y-3">
                {demo.about.features.map((feature, i) => {
                  const dotColors = [demo.primaryColor, '#e67e22', '#e74c3c', '#27ae60', '#8e44ad', '#2980b9'];
                  return (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: dotColors[i % dotColors.length] }}
                      />
                      <span className="font-medium">{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 9. LUXE ─────────────────────────────────────────────────────
  if (name === 'luxe') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 100px) 0', backgroundColor: '#0a0a0a' }}
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-5xl mx-auto ${vis('')}`}>
            {/* Image with fade edges */}
            <div className="relative mb-16">
              <img
                src={demo.about.image}
                alt={demo.about.title}
                className="w-full h-80 md:h-[28rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
            </div>

            <div className="text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] mb-6" style={{ color: '#c9a84c' }}>
                {demo.icon} Over Ons
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-xl text-white/60 mb-4">{demo.about.subtitle}</p>
              <div className="w-16 h-px mx-auto my-8" style={{ backgroundColor: '#c9a84c' }} />
              <p className="text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto text-lg">
                {demo.about.description}
              </p>

              {/* Features with thin gold-tinted lines */}
              <div className="max-w-xl mx-auto space-y-0">
                {demo.about.features.map((feature, i) => (
                  <div key={i}>
                    <div className="py-4 flex items-center justify-center gap-4">
                      <span className="text-white/70 text-sm font-light tracking-wider">{feature}</span>
                    </div>
                    {i < demo.about.features.length - 1 && (
                      <div className="h-px w-full" style={{ backgroundColor: 'rgba(201, 168, 76, 0.2)' }} />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-12 text-xs text-white/30 tracking-[0.3em] uppercase">{demo.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 10. TECH ────────────────────────────────────────────────────
  if (name === 'tech') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 80px) 0', backgroundColor: '#0f172a' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image with colored border glow */}
            <div className={vis('')}>
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  boxShadow: `0 0 40px ${demo.primaryColor}33, 0 0 80px ${demo.primaryColor}11`,
                  border: `1px solid ${demo.primaryColor}44`,
                }}
              >
                <img
                  src={demo.about.image}
                  alt={demo.about.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
            </div>
            {/* Text with monospace accents */}
            <div className={vis('', 'delay-200')}>
              <span
                className="inline-block mb-4 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded border"
                style={{ color: demo.primaryColor, borderColor: `${demo.primaryColor}44` }}
              >
                {demo.icon} // OVER_ONS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-lg text-slate-400 mb-2 font-mono text-sm">{demo.about.subtitle}</p>
              <p className="text-slate-300 leading-relaxed mb-8">{demo.about.description}</p>

              {/* Terminal-style list with ">" prefix */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                {demo.about.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 font-mono text-sm">
                    <span style={{ color: demo.primaryColor }}>&gt;</span>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-500 font-mono">{demo.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 11. ORGANIC ─────────────────────────────────────────────────
  if (name === 'organic') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: 'var(--section-spacing, 80px) 0', backgroundColor: '#faf7f2' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image in organic blob shape */}
            <div className={`flex justify-center ${vis('')}`}>
              <div className="relative">
                <img
                  src={demo.about.image}
                  alt={demo.about.title}
                  className="w-80 h-80 md:w-96 md:h-96 object-cover"
                  style={{
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  }}
                />
                <div
                  className="absolute -z-10 w-full h-full top-4 left-4"
                  style={{
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    backgroundColor: demo.primaryColorLight,
                  }}
                />
              </div>
            </div>
            {/* Text flowing naturally */}
            <div className={vis('', 'delay-200')}>
              <span className="text-3xl mb-3 block">{demo.icon}</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-lg text-gray-500 mb-2">{demo.about.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{demo.about.description}</p>
              {/* Features as leaf/nature styled pills */}
              <div className="flex flex-wrap gap-3">
                {demo.about.features.map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: demo.primaryColorLight,
                      color: demo.primaryColor,
                      borderRadius: '20px 8px 20px 8px',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill={demo.primaryColor} opacity={0.6}>
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-400 italic">{demo.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ─── 12. BOLD ────────────────────────────────────────────────────
  if (name === 'bold') {
    return (
      <section
        id="about"
        ref={sectionRef}
        style={{ padding: '0' }}
      >
        {/* Full-width image with primary color overlay and text ON image */}
        <div className={`relative ${vis('')}`}>
          <img
            src={demo.about.image}
            alt={demo.about.title}
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: demo.primaryColor, mixBlendMode: 'multiply' }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/80">
                {demo.icon} Over Ons
              </span>
              <h2 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase leading-none" style={headingFont}>
                {demo.about.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-2">{demo.about.subtitle}</p>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">{demo.about.description}</p>
              <p className="mt-4 text-sm text-white/50">{demo.tagline}</p>
            </div>
          </div>
        </div>

        {/* Features as large bold blocks below */}
        <div className="container mx-auto px-4" style={{ padding: 'var(--section-spacing, 60px) 0' }}>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${vis('', 'delay-300')}`}>
            {demo.about.features.map((feature, i) => (
              <div
                key={i}
                className="p-6 text-center text-white font-bold text-lg uppercase tracking-wider"
                style={{
                  backgroundColor: demo.primaryColor,
                  opacity: 1 - i * 0.08,
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ─── FALLBACK (should not reach here) ────────────────────────────
  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white"
      style={{ padding: 'var(--section-spacing, 80px) 0' }}
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center ${vis('')}`}>
          <span className="text-3xl mb-4 block">{demo.icon}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" style={headingFont}>
            {demo.about.title}
          </h2>
          <p className="text-lg text-gray-500 mb-2">{demo.about.subtitle}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{demo.about.description}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {demo.about.features.map((feature, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
              >
                {feature}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400">{demo.tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
