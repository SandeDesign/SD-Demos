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
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const hf = { fontFamily: 'var(--font-heading)' };
  const anim = (i: number) => `transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;
  const dl = (i: number) => ({ transitionDelay: `${i * 150}ms` });

  const Stars = ({ rating, color }: { rating: number; color: string }) => (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );

  const Avatar = ({ name, size = 'w-12 h-12', textSize = 'text-lg' }: { name: string; size?: string; textSize?: string }) => (
    <div className={`${size} rounded-full flex items-center justify-center text-white font-bold ${textSize}`} style={{ backgroundColor: demo.primaryColor }}>
      {name.charAt(0)}
    </div>
  );

  // 1. EDITORIAL: Large single quote, elegant serif, one at a time feel
  if (preset.name === 'editorial') {
    return (
      <section id="testimonials" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container max-w-4xl">
          <span className="text-sm uppercase tracking-[0.3em] mb-4 block" style={{ color: demo.primaryColor }}>Recensies</span>
          <div className="space-y-20">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`${anim(i)} border-l-2 pl-8 md:pl-12`} style={{ ...dl(i), borderColor: demo.primaryColor }}>
                <p className="text-2xl md:text-4xl text-gray-800 leading-relaxed mb-8 italic" style={hf}>"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <Avatar name={t.name} />
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                  <Stars rating={t.rating} color={demo.primaryColor} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. BRUTALIST: Harsh grid, thick borders, oversized quote marks
  if (preset.name === 'brutalist') {
    return (
      <section id="testimonials" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="border-b-4 border-black pb-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight" style={hf}>Recensies <span style={{ color: demo.primaryColor }}>_</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`border-2 border-black p-6 md:p-8 ${anim(i)}`} style={dl(i)}>
                <span className="text-6xl font-black leading-none block mb-2" style={{ color: demo.primaryColor }}>"</span>
                <p className="text-sm mb-6">{t.text}</p>
                <Stars rating={t.rating} color={demo.primaryColor} />
                <p className="font-bold uppercase tracking-wider text-sm mt-4">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 3. SOFT: Large stacked cards with avatar right, glassmorphism feel
  if (preset.name === 'soft') {
    return (
      <section id="testimonials" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-5 py-2 mb-4 text-sm font-semibold rounded-full" style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}>Recensies</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900" style={hf}>Wat Klanten Zeggen</h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`bg-white rounded-3xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center ${anim(i)}`} style={dl(i)}>
                <div className="flex-1">
                  <Stars rating={t.rating} color={demo.primaryColor} />
                  <p className="text-lg text-gray-700 mt-4 mb-4 leading-relaxed" style={hf}>"{t.text}"</p>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <Avatar name={t.name} size="w-20 h-20" textSize="text-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 4. CORPORATE: Dark bg, 3-column grid, clean cards
  if (preset.name === 'corporate') {
    return (
      <section id="testimonials" ref={sectionRef} className="bg-gray-900 text-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded" style={{ backgroundColor: demo.primaryColor }}>Recensies</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={hf}>Wat Onze Klanten Zeggen</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`p-8 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all ${anim(i)}`} style={dl(i)}>
                <Stars rating={t.rating} color={demo.primaryColor} />
                <p className="text-gray-300 mt-4 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <Avatar name={t.name} />
                  <div><p className="font-semibold">{t.name}</p><p className="text-sm text-gray-400">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 5. ARTISAN: Alternating left/right with decorative line
  if (preset.name === 'artisan') {
    return (
      <section id="testimonials" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.2em] mb-4 block" style={{ color: demo.primaryColor }}>✦ Recensies ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={hf}>Ervaringen</h2>
          </div>
          <div className="space-y-12">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center ${anim(i)}`} style={dl(i)}>
                <Avatar name={t.name} size="w-24 h-24" textSize="text-4xl" />
                <div className="flex-1 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                  <Stars rating={t.rating} color={demo.primaryColor} />
                  <p className="text-lg text-gray-700 mt-3 mb-4 leading-relaxed italic" style={hf}>"{t.text}"</p>
                  <p className="font-bold text-gray-900">{t.name} <span className="font-normal text-gray-500">— {t.role}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 6. PLAYFUL: Speech bubble cards, colorful, fun
  if (preset.name === 'playful') {
    return (
      <section id="gallery" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900" style={hf}>Blije klanten! 💬</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`${anim(i)}`} style={dl(i)}>
                <div className="relative p-6 rounded-2xl border-2 mb-4" style={{ borderColor: demo.primaryColor, backgroundColor: demo.primaryColorLight }}>
                  <p className="text-gray-800 font-medium">"{t.text}"</p>
                  <Stars rating={t.rating} color={demo.primaryColor} />
                  <div className="absolute -bottom-3 left-8 w-6 h-6 rotate-45 border-b-2 border-r-2" style={{ borderColor: demo.primaryColor, backgroundColor: demo.primaryColorLight }} />
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <Avatar name={t.name} />
                  <div><p className="font-bold">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 7. MAGAZINE: Horizontal scroll-style, bold typography
  if (preset.name === 'magazine') {
    return (
      <section id="testimonials" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 uppercase tracking-tight mb-12" style={hf}>Reviews</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`flex-shrink-0 w-[350px] bg-white p-8 border-t-4 snap-start ${anim(i)}`} style={{ ...dl(i), borderColor: demo.primaryColor }}>
                <Stars rating={t.rating} color={demo.primaryColor} />
                <p className="text-lg mt-4 mb-6 font-medium" style={hf}>"{t.text}"</p>
                <p className="font-bold uppercase tracking-wide text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 uppercase">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 8. RETRO: Warm bg, retro card styling, rounded
  if (preset.name === 'retro') {
    return (
      <section id="testimonials" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: '#fdf6ec' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900" style={hf}>Recensies</h2>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: demo.primaryColor }} />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`bg-white rounded-xl p-8 shadow-[4px_4px_0_0_rgba(0,0,0,0.08)] border-2 border-white hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.12)] transition-all ${anim(i)}`} style={dl(i)}>
                <Stars rating={t.rating} color={demo.primaryColor} />
                <p className="text-gray-700 mt-4 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar name={t.name} />
                  <div><p className="font-bold">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 9. LUXE: Dark bg, elegant, subtle borders
  if (preset.name === 'luxe') {
    return (
      <section id="testimonials" ref={sectionRef} className="bg-[#0a0a0a]" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] mb-4 block" style={{ color: demo.primaryColor }}>Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={hf}>Klantervaringen</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`p-8 border border-white/10 hover:border-white/20 transition-all ${anim(i)}`} style={dl(i)}>
                <Stars rating={t.rating} color={demo.primaryColor} />
                <p className="text-white/70 mt-4 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm" style={{ color: demo.primaryColor }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 10. TECH: Dark bg, glowing accents, terminal feel
  if (preset.name === 'tech') {
    return (
      <section id="testimonials" ref={sectionRef} className="bg-slate-900" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: demo.primaryColor }}>// reviews</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={hf}>Feedback_</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`p-6 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-transparent transition-all ${anim(i)}`} style={{ ...dl(i) }}>
                <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: demo.primaryColor }} />
                  <span>user_{t.name.toLowerCase().replace(/\s/g, '')}</span>
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">"{t.text}"</p>
                <Stars rating={t.rating} color={demo.primaryColor} />
                <p className="mt-3 text-white font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 11. ORGANIC: Flowing, blob avatars, earth tones
  if (preset.name === 'organic') {
    return (
      <section id="testimonials" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={hf}>Ervaringen</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {demo.testimonials.map((t, i) => (
              <div key={i} className={`bg-white rounded-[20px] p-8 shadow-sm hover:shadow-lg transition-all ${anim(i)}`} style={dl(i)}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: demo.primaryColor, borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div><p className="font-bold text-gray-900">{t.name}</p><p className="text-sm text-gray-500">{t.role}</p></div>
                </div>
                <Stars rating={t.rating} color={demo.primaryColor} />
                <p className="text-gray-600 mt-3 leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 12. BOLD: Full-color alternating, oversized quotes, high contrast
  return (
    <section id="testimonials" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
      <div className="container">
        <h2 className="text-5xl md:text-8xl font-bold uppercase mb-12" style={{ ...hf, color: demo.primaryColor }}>Reviews</h2>
        <div className="space-y-4">
          {demo.testimonials.map((t, i) => (
            <div key={i} className={`p-8 md:p-12 ${i % 2 === 0 ? 'text-white' : 'bg-gray-100 text-gray-900'} ${anim(i)}`} style={{ ...dl(i), ...(i % 2 === 0 ? { backgroundColor: demo.primaryColor } : {}) }}>
              <Stars rating={t.rating} color={i % 2 === 0 ? 'white' : demo.primaryColor} />
              <p className="text-xl md:text-3xl font-bold mt-4 mb-6" style={hf}>"{t.text}"</p>
              <p className="font-bold uppercase tracking-wider">{t.name} — <span className="font-normal">{t.role}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
