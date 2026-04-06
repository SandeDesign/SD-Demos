import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

const Services = () => {
  const { demo } = useDemo();
  const preset = usePreset();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const hf = { fontFamily: 'var(--font-heading)' };
  const label = demo.navLinks.find(l => l.href === '#services')?.label || 'Diensten';
  const anim = (_i?: number) => `transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;
  const delay = (i: number) => ({ transitionDelay: `${i * 100}ms` });
  const fmtPrice = (price: number) => price > 0 ? `€${price}` : 'Op aanvraag';

  // =====================================================
  // EDITORIAL: Horizontal divider-separated list, minimal
  // =====================================================
  if (preset.name === 'editorial') {
    return (
      <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] mb-4 block" style={{ color: demo.primaryColor }}>{label}</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16" style={hf}>Diensten &amp; Tarieven</h2>
          <div className="divide-y divide-gray-300">
            {demo.services.map((s, i) => (
              <div key={i} className={`py-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 ${anim(i)} group cursor-default`} style={delay(i)}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex-1 group-hover:translate-x-2 transition-transform" style={hf}>{s.title}</h3>
                <span className="text-gray-500 text-sm tracking-wide">{s.duration}</span>
                <span className="text-2xl font-bold tabular-nums" style={{ color: demo.primaryColor }}>
                  {fmtPrice(s.price)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // BRUTALIST: 2-column harsh grid, thick borders, numbered
  // =====================================================
  if (preset.name === 'brutalist') {
    return (
      <section id="services" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="border-b-4 border-black pb-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight" style={hf}>
              {label} <span style={{ color: demo.primaryColor }}>_</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {demo.services.map((s, i) => (
              <div key={i} className={`border-2 border-black p-6 md:p-8 ${anim(i)} hover:bg-black hover:text-white transition-colors group`} style={delay(i)}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-bold opacity-20 group-hover:opacity-40" style={hf}>{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="text-xl font-bold" style={{ color: demo.primaryColor }}>
                    {fmtPrice(s.price)}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2" style={hf}>{s.title}</h3>
                <p className="text-sm opacity-70 mb-3">{s.description}</p>
                <span className="text-xs uppercase tracking-widest opacity-50">{s.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // SOFT: 3-col cards, rounded-3xl, pastel accents, CTA
  // =====================================================
  if (preset.name === 'soft') {
    return (
      <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-5 py-2 mb-4 text-sm font-semibold rounded-full" style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}>
              {label}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={hf}>
              Wat We <span style={{ color: demo.primaryColor }}>Bieden</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demo.services.map((s, i) => (
              <div key={i} className={`p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all group ${anim(i)}`} style={delay(i)}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ backgroundColor: demo.primaryColorLight }}>
                  {demo.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={hf}>{s.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{s.duration}</span>
                  <span className="text-lg font-bold" style={{ color: demo.primaryColor }}>
                    {fmtPrice(s.price)}
                  </span>
                </div>
                <a href="#contact" className="mt-6 block w-full py-3 text-center text-white rounded-2xl font-semibold transition-all hover:scale-[1.02]" style={{ backgroundColor: demo.primaryColor }}>
                  {demo.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // CORPORATE: Vertical timeline, alternating left/right
  // =====================================================
  if (preset.name === 'corporate') {
    return (
      <section id="services" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-4 py-2 mb-4 rounded text-sm font-semibold border" style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}>
              {label}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900" style={hf}>
              Onze <span style={{ color: demo.primaryColor }}>Diensten</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
            {demo.services.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col lg:flex-row items-start mb-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${anim(i)}`} style={delay(i)}>
                  <div className={`flex-1 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'} pl-20 lg:pl-0`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={hf}>{s.title}</h3>
                    <p className="text-gray-600 mb-3">{s.description}</p>
                    <div className={`flex items-center gap-4 text-sm text-gray-500 ${isEven ? 'lg:justify-end' : ''}`}>
                      <span>{s.duration}</span>
                      <span className="font-bold text-lg" style={{ color: demo.primaryColor }}>{fmtPrice(s.price)}</span>
                    </div>
                  </div>
                  <div className="absolute left-5 lg:left-1/2 lg:-translate-x-1/2 w-7 h-7 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: demo.primaryColor }}>
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // ARTISAN: Masonry CSS columns, warm, handcrafted
  // =====================================================
  if (preset.name === 'artisan') {
    return (
      <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-[0.2em] mb-4 block" style={{ color: demo.primaryColor }}>{'\u2726'} {label} {'\u2726'}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={hf}>Met Liefde Gemaakt</h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {demo.services.map((s, i) => {
              const heights = ['min-h-[200px]', 'min-h-[260px]', 'min-h-[220px]', 'min-h-[280px]', 'min-h-[200px]', 'min-h-[240px]'];
              return (
                <div key={i} className={`break-inside-avoid bg-white rounded-lg p-8 border border-gray-200/80 hover:shadow-xl transition-all group ${heights[i % 6]} ${anim(i)}`} style={{ ...delay(i), borderTopWidth: '3px', borderTopColor: demo.primaryColor }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: demo.primaryColorLight }}>
                      <span className="text-lg">{demo.icon}</span>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gray-400">{s.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={hf}>{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: demo.primaryColor }}>
                      {fmtPrice(s.price)}
                    </span>
                    <a href="#contact" className="text-sm font-semibold transition-all group-hover:translate-x-1" style={{ color: demo.primaryColor }}>
                      Boek {'\u2192'}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // PLAYFUL: Tilted cards, colored borders, price bubbles
  // =====================================================
  if (preset.name === 'playful') {
    return (
      <section id="services" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={hf}>
              Check dit <span style={{ color: demo.primaryColor }}>uit!</span>
            </h2>
            <p className="text-gray-500 text-lg">Onze populairste diensten voor jou.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {demo.services.map((s, i) => {
              const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1'];
              return (
                <div key={i} className={`relative p-6 rounded-2xl border-2 hover:scale-105 hover:rotate-0 transition-all cursor-default group ${rotations[i % 6]} ${anim(i)}`}
                  style={{ borderColor: demo.primaryColor, transitionDelay: `${i * 100}ms` }}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10" style={{ backgroundColor: demo.primaryColor }}>
                    {s.price > 0 ? `€${s.price}` : '?'}
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4" style={{ backgroundColor: demo.primaryColorLight }}>
                    {demo.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={hf}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{s.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{s.duration}</span>
                    <a href="#contact" className="font-bold px-4 py-1 rounded-full text-white text-xs transition-all hover:scale-110" style={{ backgroundColor: demo.primaryColor }}>
                      Boek nu!
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // MAGAZINE: Hero first card + smaller grid, article style
  // =====================================================
  if (preset.name === 'magazine') {
    return (
      <section id="services" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="mb-12">
            <span className="text-sm uppercase tracking-[0.3em] font-bold mb-2 block" style={{ color: demo.primaryColor }}>{label}</span>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 uppercase tracking-tight leading-none" style={hf}>
              Onze Diensten
            </h2>
            <div className="w-24 h-1 mt-4" style={{ backgroundColor: demo.primaryColor }} />
          </div>
          {demo.services.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Hero first service */}
              <div className={`lg:col-span-2 p-10 md:p-14 bg-gray-50 border border-gray-200 flex flex-col justify-end relative overflow-hidden group ${anim(0)}`} style={delay(0)}>
                <span className="text-[8rem] md:text-[12rem] font-bold leading-none absolute -top-8 -left-4 opacity-[0.04]" style={hf}>01</span>
                <div className="relative z-10">
                  <span className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">{demo.services[0].duration}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={hf}>{demo.services[0].title}</h3>
                  <p className="text-gray-600 text-lg max-w-2xl mb-6">{demo.services[0].description}</p>
                  <span className="text-3xl font-bold" style={{ color: demo.primaryColor }}>{fmtPrice(demo.services[0].price)}</span>
                </div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demo.services.slice(1).map((s, i) => (
              <div key={i} className={`p-8 bg-gray-50 border border-gray-200 group hover:border-gray-400 transition-all ${anim(i + 1)}`} style={delay(i + 1)}>
                <span className="text-6xl font-bold leading-none opacity-[0.06] block mb-4" style={hf}>
                  {(i + 2).toString().padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide" style={hf}>{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs uppercase tracking-widest text-gray-400">{s.duration}</span>
                  <span className="text-xl font-bold" style={{ color: demo.primaryColor }}>{fmtPrice(s.price)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // RETRO: Double-border cards, circular price badge, ticket style
  // =====================================================
  if (preset.name === 'retro') {
    return (
      <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: '#fdf6ec' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={hf}>{label}</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-gray-400" />
              <span className="text-2xl" style={{ color: demo.primaryColor }}>{demo.icon}</span>
              <span className="h-px w-16 bg-gray-400" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {demo.services.map((s, i) => (
              <div
                key={i}
                className={`relative rounded-xl p-8 bg-white ${anim(i)} group hover:-translate-y-1 transition-all`}
                style={{
                  ...delay(i),
                  boxShadow: `0 0 0 2px ${demo.primaryColor}, 0 0 0 6px #fdf6ec, 0 0 0 8px ${demo.primaryColor}20, 0 8px 24px rgba(0,0,0,0.08)`,
                }}
              >
                {/* Circular price badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-sm shadow-md" style={{ backgroundColor: demo.primaryColor }}>
                  {s.price > 0 ? `€${s.price}` : '...'}
                </div>
                <div className="pt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={hf}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.description}</p>
                  <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-400">
                    <span className="w-8 h-px bg-gray-300" />
                    <span>{s.duration}</span>
                    <span className="w-8 h-px bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // LUXE: Dark bg, subtle borders, gold accents, premium
  // =====================================================
  if (preset.name === 'luxe') {
    return (
      <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: '#0a0a0a' }}>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.4em] mb-6 block" style={{ color: demo.primaryColor }}>{label}</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={hf}>Exclusieve Diensten</h2>
            <div className="w-16 h-px mx-auto" style={{ backgroundColor: demo.primaryColor }} />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {demo.services.map((s, i) => (
              <div key={i} className={`p-8 border border-white/10 hover:border-white/25 transition-all group ${anim(i)}`} style={delay(i)}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-px h-8" style={{ backgroundColor: demo.primaryColor }} />
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">{s.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform" style={hf}>{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{s.description}</p>
                <div className="pt-6 border-t border-white/10">
                  <span className="text-2xl font-light tracking-wide" style={{ color: demo.primaryColor }}>
                    {fmtPrice(s.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // TECH: Dark slate, glowing borders, futuristic
  // =====================================================
  if (preset.name === 'tech') {
    return (
      <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: '#0f172a' }}>
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: demo.primaryColor }} />
              <span className="text-xs uppercase tracking-[0.3em] font-mono" style={{ color: demo.primaryColor }}>{label}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight" style={hf}>
              Services<span style={{ color: demo.primaryColor }}>.</span>init()
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demo.services.map((s, i) => (
              <div
                key={i}
                className={`relative p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg group transition-all ${anim(i)}`}
                style={{
                  ...delay(i),
                }}
              >
                {/* Glow effect on hover via inline style */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: `0 0 20px ${demo.primaryColor}30, inset 0 0 20px ${demo.primaryColor}10` }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-500">{'// '}{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="font-mono text-sm font-bold" style={{ color: demo.primaryColor }}>{fmtPrice(s.price)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={hf}>{s.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{s.description}</p>
                  {/* Duration as progress bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-500">duration</span>
                      <span className="font-mono text-slate-400">{s.duration}</span>
                    </div>
                    <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          backgroundColor: demo.primaryColor,
                          width: isVisible ? `${Math.min(30 + i * 15, 95)}%` : '0%',
                          transitionDelay: `${i * 150 + 300}ms`,
                        }}
                      />
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

  // =====================================================
  // ORGANIC: Full-width stacked, round icons, wavy dividers
  // =====================================================
  if (preset.name === 'organic') {
    return (
      <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] mb-4 block" style={{ color: demo.primaryColor }}>{label}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={hf}>Natuurlijk Goed</h2>
          </div>
          <div className="space-y-0">
            {demo.services.map((s, i) => (
              <React.Fragment key={i}>
                <div className={`flex flex-col md:flex-row items-center gap-8 py-10 ${anim(i)} group`} style={delay(i)}>
                  {/* Large round icon circle */}
                  <div className="shrink-0 w-24 h-24 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform" style={{ backgroundColor: demo.primaryColorLight }}>
                    {demo.icon}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={hf}>{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">{s.description}</p>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{s.duration}</span>
                      <span className="text-xl font-bold" style={{ color: demo.primaryColor }}>{fmtPrice(s.price)}</span>
                    </div>
                  </div>
                </div>
                {/* Wavy divider between cards */}
                {i < demo.services.length - 1 && (
                  <div className="overflow-hidden h-6">
                    <svg viewBox="0 0 1200 30" preserveAspectRatio="none" className="w-full h-full">
                      <path
                        d="M0,15 C200,0 400,30 600,15 C800,0 1000,30 1200,15"
                        fill="none"
                        stroke={demo.primaryColor}
                        strokeWidth="1.5"
                        strokeOpacity="0.25"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // BOLD: Oversized price focal, compact grid, high contrast
  // =====================================================
  if (preset.name === 'bold') {
    return (
      <section id="services" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 uppercase" style={hf}>
              {label}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demo.services.map((s, i) => {
              const isAlt = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`p-8 rounded-lg transition-all group ${anim(i)} ${isAlt ? 'text-white' : 'text-gray-900 bg-gray-50'}`}
                  style={{
                    ...delay(i),
                    ...(isAlt ? { backgroundColor: demo.primaryColor } : {}),
                  }}
                >
                  <div className="mb-4">
                    <span className={`text-5xl md:text-6xl font-bold leading-none block ${isAlt ? 'text-white/90' : ''}`} style={isAlt ? {} : { color: demo.primaryColor }}>
                      {fmtPrice(s.price)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 uppercase tracking-wide" style={hf}>{s.title}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${isAlt ? 'text-white/70' : 'text-gray-500'}`}>{s.description}</p>
                  <span className={`text-xs uppercase tracking-widest ${isAlt ? 'text-white/50' : 'text-gray-400'}`}>{s.duration}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // FALLBACK: Simple grid (should never reach here)
  // =====================================================
  return (
    <section id="services" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12" style={hf}>{label}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demo.services.map((s, i) => (
            <div key={i} className={`p-6 bg-white rounded-lg shadow-md ${anim(i)}`} style={delay(i)}>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={hf}>{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{s.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{s.duration}</span>
                <span className="text-lg font-bold" style={{ color: demo.primaryColor }}>{fmtPrice(s.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
