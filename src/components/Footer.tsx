import React from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { demo } = useDemo();
  const preset = usePreset();
  const hf = { fontFamily: 'var(--font-heading)' };
  const year = new Date().getFullYear();
  const n = preset.name;

  const NavLinks = ({ className = '' }: { className?: string }) => (
    <>
      {demo.navLinks.slice(0, 4).map((l) => (
        <a key={l.href} href={l.href} className={className}>{l.label}</a>
      ))}
      <Link to="/" className={className}>Alle Demo's</Link>
    </>
  );

  const Credit = ({ color = demo.primaryColor }: { color?: string }) => (
    <p className="text-sm mt-2 opacity-60">Demo website door <span style={{ color }} className="font-semibold">SandeDesign</span></p>
  );

  // LUXE: Dark, elegant, thin borders
  if (n === 'luxe') {
    return (
      <footer className="bg-[#0a0a0a] text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
            <span className="text-xl font-bold uppercase tracking-[0.3em]" style={{ ...hf, color: demo.primaryColor }}>{demo.name}</span>
            <nav className="flex flex-wrap gap-8 text-sm"><NavLinks className="text-white/50 hover:text-white transition-colors uppercase tracking-wider" /></nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-white/40">
            <p>&copy; {year} {demo.name}</p>
            <Credit />
          </div>
        </div>
      </footer>
    );
  }

  // TECH: Dark, terminal-style
  if (n === 'tech') {
    return (
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: demo.primaryColor }}>// {demo.name}</span>
              <p className="text-slate-500 text-sm max-w-md">{demo.description}</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm"><NavLinks className="text-slate-400 hover:text-white transition-colors" /></nav>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; {year} {demo.name}</p>
            <Credit />
          </div>
        </div>
      </footer>
    );
  }

  // BRUTALIST: Harsh, thick borders, uppercase
  if (n === 'brutalist') {
    return (
      <footer className="bg-black text-white py-12 border-t-4" style={{ borderColor: demo.primaryColor }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-xl font-bold uppercase tracking-widest" style={hf}>{demo.icon} {demo.name}</span>
              <p className="text-white/50 text-sm mt-2 uppercase tracking-wider">{demo.tagline}</p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Links</h4>
              <div className="space-y-2"><NavLinks className="block text-white/60 hover:text-white text-sm uppercase tracking-wider transition-colors" /></div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Contact</h4>
              <p className="text-white/60 text-sm">{demo.contact.address}</p>
              <p className="text-white/60 text-sm">{demo.contact.phone}</p>
              <p className="text-white/60 text-sm">{demo.contact.email}</p>
            </div>
          </div>
          <div className="border-t-2 border-white/20 pt-6 text-center text-xs text-white/40 uppercase tracking-widest">
            <p>&copy; {year} {demo.name}</p><Credit />
          </div>
        </div>
      </footer>
    );
  }

  // CORPORATE: Dark, 4-column grid, professional
  if (n === 'corporate') {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4"><span className="text-3xl mr-2">{demo.icon}</span><span className="text-2xl font-bold" style={hf}>{demo.name}</span></div>
              <p className="text-gray-400 mb-2">{demo.description}</p>
              <p className="text-gray-400">{demo.tagline}</p>
            </div>
            <div><h4 className="font-bold mb-4" style={hf}>Contact</h4><ul className="space-y-2 text-gray-400 text-sm"><li>{demo.contact.address}</li><li>{demo.contact.phone}</li><li>{demo.contact.email}</li></ul></div>
            <div><h4 className="font-bold mb-4" style={hf}>Links</h4><div className="space-y-2"><NavLinks className="block text-gray-400 hover:text-white text-sm transition-all" /></div></div>
          </div>
          <div className="mt-12 pt-8 text-center border-t border-gray-800 text-sm text-gray-400">
            <p>&copy; {year} {demo.name}. Alle rechten voorbehouden.</p><Credit />
          </div>
        </div>
      </footer>
    );
  }

  // EDITORIAL: Minimal single line
  if (n === 'editorial') {
    return (
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xl font-bold text-gray-900" style={hf}>{demo.name}</span>
            <nav className="flex flex-wrap gap-8 text-sm"><NavLinks className="text-gray-500 hover:text-gray-900 transition-colors" /></nav>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; {year} {demo.name}</p><Credit />
          </div>
        </div>
      </footer>
    );
  }

  // BOLD: Big colored footer
  if (n === 'bold') {
    return (
      <footer className="text-white py-12" style={{ backgroundColor: demo.primaryColor }}>
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <span className="text-3xl font-bold uppercase" style={hf}>{demo.icon} {demo.name}</span>
            <nav className="flex flex-wrap gap-6"><NavLinks className="text-white/80 hover:text-white font-bold uppercase text-sm transition-colors" /></nav>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
            <p>&copy; {year} {demo.name}</p>
            <p className="text-sm mt-2">Demo website door <span className="font-semibold text-white">SandeDesign</span></p>
          </div>
        </div>
      </footer>
    );
  }

  // MAGAZINE: Two-row grid, masthead style
  if (n === 'magazine') {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8 border-b border-gray-800">
            <div>
              <span className="text-3xl font-bold uppercase tracking-tight" style={hf}>{demo.name}</span>
              <p className="text-gray-500 text-sm mt-1">{demo.tagline}</p>
            </div>
            <div className="text-sm text-gray-400 text-right">
              <p>{demo.contact.address}</p><p>{demo.contact.phone}</p><p>{demo.contact.email}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm">
            <nav className="flex flex-wrap gap-6"><NavLinks className="text-gray-400 hover:text-white transition-colors" /></nav>
            <div className="text-gray-500"><p>&copy; {year} {demo.name}</p></div>
          </div>
          <div className="text-center mt-4"><Credit color="#999" /></div>
        </div>
      </footer>
    );
  }

  // RETRO: Warm bg, rounded, chunky
  if (n === 'retro') {
    return (
      <footer className="py-12" style={{ backgroundColor: '#2d2418' }}>
        <div className="container text-center">
          <span className="text-3xl">{demo.icon}</span>
          <h4 className="text-2xl font-bold text-white mt-2" style={hf}>{demo.name}</h4>
          <p className="text-white/50 text-sm mt-2 max-w-md mx-auto">{demo.description}</p>
          <nav className="flex flex-wrap justify-center gap-6 mt-6"><NavLinks className="text-white/50 hover:text-white text-sm transition-colors" /></nav>
          <div className="w-16 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: demo.primaryColor }} />
          <p className="text-white/30 text-sm mt-6">&copy; {year} {demo.name}</p>
          <Credit color={demo.primaryColor} />
        </div>
      </footer>
    );
  }

  // DEFAULT: soft, playful, artisan, organic — light minimal footer
  const radius = ['soft','playful','organic'].includes(n) ? 'rounded-full' : '';
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="text-2xl mr-2">{demo.icon}</span>
            <span className="text-xl font-bold text-gray-900" style={hf}>{demo.name}</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm"><NavLinks className="text-gray-500 hover:text-gray-900 transition-colors" /></nav>
          <div className="text-sm text-gray-500 text-center md:text-right"><p>{demo.contact.phone}</p><p>{demo.contact.email}</p></div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <p>&copy; {year} {demo.name}. Alle rechten voorbehouden.</p><Credit />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
