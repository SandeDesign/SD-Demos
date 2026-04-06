import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

const Location = () => {
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
  const vis = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';

  const IconPin = ({ color }: { color: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  );
  const IconPhone = ({ color }: { color: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );
  const IconMail = ({ color }: { color: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  );

  const contactItems = [
    { icon: IconPin, label: 'Adres', value: demo.contact.address },
    { icon: IconPhone, label: 'Telefoon', value: demo.contact.phone },
    { icon: IconMail, label: 'Email', value: demo.contact.email },
  ];

  const Hours = ({ darkMode = false }: { darkMode?: boolean }) => (
    <div className={`max-w-md mx-auto space-y-3 ${darkMode ? '' : ''}`}>
      {demo.contact.hours.map((item, i) => (
        <div key={i} className={`flex justify-between items-center py-2 border-b ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
          <span className="font-medium">{item.day}</span>
          <span className={darkMode ? 'text-white/60' : 'text-gray-600'}>{item.hours}</span>
        </div>
      ))}
    </div>
  );

  // Determine variant grouping to keep code manageable but visually distinct
  const n = preset.name;

  // DARK presets: luxe, tech, corporate
  if (n === 'luxe') {
    return (
      <section id="contact" ref={sectionRef} className="bg-[#0a0a0a] text-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className={`container transition-all duration-1000 transform ${vis}`}>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] mb-4 block" style={{ color: demo.primaryColor }}>Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={hf}>Neem Contact Op</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {contactItems.map((c, i) => (
              <div key={i} className="p-8 border border-white/10 text-center">
                <c.icon color={demo.primaryColor} />
                <h3 className="text-lg font-semibold mt-4 mb-2" style={hf}>{c.label}</h3>
                <p className="text-white/60">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={hf}>Openingstijden</h3>
            <Hours darkMode />
          </div>
          <div className="text-center mt-8">
            <a href={`mailto:${demo.contact.email}`} className="inline-block px-8 py-3 text-white font-semibold transition-all hover:opacity-90 border" style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}>{demo.ctaText}</a>
          </div>
        </div>
      </section>
    );
  }

  if (n === 'tech') {
    return (
      <section id="contact" ref={sectionRef} className="bg-slate-900 text-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className={`container transition-all duration-1000 transform ${vis}`}>
          <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: demo.primaryColor }}>// contact</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12" style={hf}>Bereik_Ons</h2>
          <div className="grid lg:grid-cols-3 gap-4 mb-12">
            {contactItems.map((c, i) => (
              <div key={i} className="p-6 rounded-lg border border-slate-700 bg-slate-800/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: demo.primaryColor }} />
                  <span className="text-xs uppercase tracking-widest text-slate-500">{c.label}</span>
                </div>
                <p className="text-slate-300">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8">
            <h3 className="text-xl font-bold mb-6" style={hf}>Openingstijden</h3>
            <Hours darkMode />
          </div>
          <div className="text-center mt-8">
            <a href={`mailto:${demo.contact.email}`} className="inline-block px-8 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: demo.primaryColor }}>{demo.ctaText}</a>
          </div>
        </div>
      </section>
    );
  }

  if (n === 'corporate') {
    return (
      <section id="contact" ref={sectionRef} className="bg-gray-900 text-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className={`container transition-all duration-1000 transform ${vis}`}>
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-4 py-2 mb-4 rounded text-sm font-semibold" style={{ backgroundColor: demo.primaryColor }}>Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold" style={hf}>Neem Contact Op</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {contactItems.map((c, i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-lg text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: demo.primaryColor + '20' }}>
                  <c.icon color={demo.primaryColor} />
                </div>
                <h3 className="font-bold mb-2" style={hf}>{c.label}</h3>
                <p className="text-gray-400">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={hf}>Openingstijden</h3>
            <Hours darkMode />
          </div>
          <div className="text-center mt-8">
            <a href={`mailto:${demo.contact.email}`} className="inline-block px-8 py-3 rounded text-white font-semibold" style={{ backgroundColor: demo.primaryColor }}>{demo.ctaText}</a>
          </div>
        </div>
      </section>
    );
  }

  // BRUTALIST
  if (n === 'brutalist') {
    return (
      <section id="contact" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className={`container transition-all duration-1000 transform ${vis}`}>
          <div className="border-b-4 border-black pb-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight" style={hf}>Contact <span style={{ color: demo.primaryColor }}>_</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 mb-12">
            {contactItems.map((c, i) => (
              <div key={i} className="border-2 border-black p-6 text-center">
                <h3 className="font-bold uppercase tracking-wider text-sm mb-2">{c.label}</h3>
                <p className="text-sm">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="border-2 border-black p-8">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-center" style={hf}>Openingstijden</h3>
            <Hours />
          </div>
          <div className="text-center mt-8">
            <a href={`mailto:${demo.contact.email}`} className="inline-block px-8 py-3 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">{demo.ctaText}</a>
          </div>
        </div>
      </section>
    );
  }

  // EDITORIAL
  if (n === 'editorial') {
    return (
      <section id="contact" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className={`container max-w-4xl transition-all duration-1000 transform ${vis}`}>
          <span className="text-sm uppercase tracking-[0.3em] mb-4 block" style={{ color: demo.primaryColor }}>Contact</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16" style={hf}>Bezoek Ons</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              {contactItems.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <c.icon color={demo.primaryColor} />
                  <div><h3 className="font-bold text-gray-900" style={hf}>{c.label}</h3><p className="text-gray-600">{c.value}</p></div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6" style={hf}>Openingstijden</h3>
              <Hours />
            </div>
          </div>
          <a href={`mailto:${demo.contact.email}`} className="inline-block px-8 py-3 text-white font-semibold" style={{ backgroundColor: demo.primaryColor }}>{demo.ctaText}</a>
        </div>
      </section>
    );
  }

  // BOLD
  if (n === 'bold') {
    return (
      <section id="contact" ref={sectionRef} className="text-white" style={{ padding: 'var(--section-spacing) 0', backgroundColor: demo.primaryColor }}>
        <div className={`container transition-all duration-1000 transform ${vis}`}>
          <h2 className="text-5xl md:text-8xl font-bold uppercase mb-12" style={hf}>Contact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactItems.map((c, i) => (
              <div key={i} className="bg-black/20 p-8 text-center">
                <h3 className="text-xl font-bold uppercase mb-2" style={hf}>{c.label}</h3>
                <p className="text-white/80">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-black/20 p-8"><h3 className="text-2xl font-bold mb-6 text-center uppercase" style={hf}>Openingstijden</h3><Hours darkMode /></div>
          <div className="text-center mt-8">
            <a href={`mailto:${demo.contact.email}`} className="inline-block px-10 py-4 bg-white text-lg font-bold uppercase" style={{ color: demo.primaryColor }}>{demo.ctaText}</a>
          </div>
        </div>
      </section>
    );
  }

  // MAGAZINE
  if (n === 'magazine') {
    return (
      <section id="contact" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className={`container transition-all duration-1000 transform ${vis}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 uppercase tracking-tight mb-12" style={hf}>Contact</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {contactItems.map((c, i) => (
              <div key={i} className="bg-white p-6 border-t-4" style={{ borderColor: demo.primaryColor }}>
                <h3 className="font-bold uppercase text-sm tracking-wide mb-2">{c.label}</h3>
                <p className="text-gray-600 text-sm">{c.value}</p>
              </div>
            ))}
            <div className="bg-white p-6 border-t-4" style={{ borderColor: demo.primaryColor }}>
              <h3 className="font-bold uppercase text-sm tracking-wide mb-2">CTA</h3>
              <a href={`mailto:${demo.contact.email}`} className="text-sm font-bold" style={{ color: demo.primaryColor }}>{demo.ctaText} →</a>
            </div>
          </div>
          <div className="bg-white p-8"><h3 className="text-xl font-bold mb-6" style={hf}>Openingstijden</h3><Hours /></div>
        </div>
      </section>
    );
  }

  // RETRO
  if (n === 'retro') {
    return (
      <section id="contact" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: '#fdf6ec' }}>
        <div className={`container transition-all duration-1000 transform ${vis}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900" style={hf}>Contact</h2>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: demo.primaryColor }} />
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {contactItems.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-8 text-center shadow-[4px_4px_0_0_rgba(0,0,0,0.08)] border-2 border-white">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: demo.primaryColorLight }}><c.icon color={demo.primaryColor} /></div>
                <h3 className="font-bold mb-2" style={hf}>{c.label}</h3>
                <p className="text-gray-600">{c.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-8 shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]"><h3 className="text-2xl font-bold mb-6 text-center" style={hf}>Openingstijden</h3><Hours /></div>
          <div className="text-center mt-8"><a href={`mailto:${demo.contact.email}`} className="inline-block px-8 py-3 rounded-xl text-white font-semibold shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]" style={{ backgroundColor: demo.primaryColor }}>{demo.ctaText}</a></div>
        </div>
      </section>
    );
  }

  // DEFAULT: soft, playful, artisan, organic — light bg, rounded cards, icon circles
  const radius = ['soft','playful','organic'].includes(n) ? 'rounded-3xl' : 'rounded-lg';
  return (
    <section id="contact" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
      <div className={`container transition-all duration-1000 transform ${vis}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full" style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}>Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={hf}>Neem Contact Op</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactItems.map((c, i) => (
            <div key={i} className={`bg-white p-8 ${radius} shadow-lg text-center`}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: demo.primaryColorLight }}><c.icon color={demo.primaryColor} /></div>
              <h3 className="text-xl font-bold mb-2" style={hf}>{c.label}</h3>
              <p className="text-gray-600">{c.value}</p>
            </div>
          ))}
        </div>
        <div className={`bg-white p-8 ${radius} shadow-lg`}><h3 className="text-2xl font-bold mb-6 text-center" style={hf}>Openingstijden</h3><Hours /></div>
        <div className="text-center mt-8"><a href={`mailto:${demo.contact.email}`} className={`inline-block px-8 py-3 text-white font-semibold ${radius}`} style={{ backgroundColor: demo.primaryColor }}>{demo.ctaText}</a></div>
      </div>
    </section>
  );
};

export default Location;
