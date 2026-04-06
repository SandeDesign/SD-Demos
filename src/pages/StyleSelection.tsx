import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDemoById } from '../config/demos';
import { BackButton } from '../components/BackButton';
import { presetMap } from '../styles/presetMap';
import { presets } from '../styles/presets';

const presetDescriptions: Record<string, { label: string; features: string[] }> = {
  editorial:  { label: 'Editorial',         features: ['Elegante serif lettertypes', 'Asymmetrisch & luchtig', 'Magazine-achtige uitstraling'] },
  brutalist:  { label: 'Brutalist',         features: ['Monospace typografie', 'Harde lijnen & zwarte borders', 'Rauw & ongepolijst'] },
  soft:       { label: 'Soft & Rounded',    features: ['Ronde vormen & zachte schaduwen', 'Pastel accenten', 'Warm & uitnodigend'] },
  corporate:  { label: 'Corporate',         features: ['Strakke sans-serif fonts', 'Professionele structuur', 'Clean & betrouwbaar'] },
  artisan:    { label: 'Artisan',           features: ['Handgemaakt gevoel', 'Warme serif headings', 'Masonry layouts'] },
  playful:    { label: 'Playful',           features: ['Speelse fonts & kleuren', 'Gedraaide elementen', 'Energiek & levendig'] },
  magazine:   { label: 'Magazine',          features: ['Krantenachtige headings', 'Bold condensed typografie', 'Grid-zware layouts'] },
  retro:      { label: 'Retro',             features: ['Vintage serif lettertypes', 'Warme kleurpaletten', 'Nostalgische sfeer'] },
  luxe:       { label: 'Luxe',              features: ['Donkere achtergronden', 'Elegante serif details', 'Premium & exclusief'] },
  tech:       { label: 'Tech',              features: ['Futuristische fonts', 'Donker thema met neon', 'Geometrische vormen'] },
  organic:    { label: 'Organic',           features: ['Natuurlijke aarde-tinten', 'Vloeiende vormen', 'Rustgevend & warm'] },
  bold:       { label: 'Bold',              features: ['Oversized typografie', 'Hoog contrast', 'Kleurblokken & impact'] },
};

const PresetPreview = ({ presetName, demo, style }: { presetName: string; demo: any; style: number }) => {
  const preset = presets[presetName as keyof typeof presets];
  if (!preset) return null;

  const isDark = ['luxe', 'tech'].includes(presetName);
  const bgColor = isDark ? '#0a0a0a' : presetName === 'brutalist' ? '#fff' : presetName === 'bold' ? demo.primaryColor : '#fafafa';
  const textColor = isDark || presetName === 'bold' ? '#fff' : '#111';

  return (
    <div className="relative h-64 overflow-hidden" style={{ backgroundColor: bgColor, fontFamily: preset.fonts.body }}>
      {/* Mini hero preview */}
      <div className="absolute inset-0">
        {/* Background image with varying treatment per preset */}
        {['soft', 'artisan', 'magazine', 'retro'].includes(presetName) && (
          <img src={demo.heroImage} alt="" className="w-full h-full object-cover opacity-30" />
        )}
        {['editorial', 'organic'].includes(presetName) && (
          <img src={demo.heroImage} alt="" className="w-full h-full object-cover opacity-10 blur-sm" />
        )}
        {presetName === 'luxe' && (
          <img src={demo.heroImage} alt="" className="w-full h-full object-cover opacity-15" />
        )}
        {presetName === 'tech' && (
          <>
            <img src={demo.heroImage} alt="" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </>
        )}
        {presetName === 'brutalist' && (
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <img src={demo.heroImage} alt="" className="w-full h-full object-cover" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
          </div>
        )}
        {presetName === 'corporate' && (
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <img src={demo.heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          </div>
        )}
        {presetName === 'bold' && (
          <img src={demo.heroImage} alt="" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        )}
        {presetName === 'playful' && (
          <>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: demo.primaryColor }} />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10" style={{ backgroundColor: demo.primaryColor }} />
          </>
        )}
      </div>

      {/* Text content preview */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        {presetName === 'brutalist' && (
          <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: demo.primaryColor }} />
        )}

        <div>
          <span className="text-xs uppercase tracking-wider opacity-60 mb-1 block" style={{ color: isDark || presetName === 'bold' ? 'rgba(255,255,255,0.6)' : demo.primaryColor }}>
            {demo.icon} {demo.name}
          </span>
          <h3
            className={`font-bold leading-tight mb-2 ${presetName === 'bold' ? 'text-3xl' : presetName === 'magazine' ? 'text-3xl uppercase' : presetName === 'brutalist' ? 'text-2xl uppercase tracking-tight' : 'text-2xl'}`}
            style={{ fontFamily: preset.fonts.heading, color: textColor }}
          >
            {demo.heroTitle}
          </h3>
          <p className="text-sm opacity-60 line-clamp-2" style={{ color: textColor }}>
            {demo.heroSubtitle}
          </p>

          {/* Mini CTA preview */}
          <div className="flex gap-2 mt-3">
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold text-white ${presetName === 'brutalist' ? 'rounded-none' : presetName === 'soft' || presetName === 'playful' ? 'rounded-full' : 'rounded'}`}
              style={{ backgroundColor: isDark || presetName === 'bold' ? '#fff' : demo.primaryColor, color: isDark || presetName === 'bold' ? demo.primaryColor : '#fff' }}
            >
              {demo.ctaText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyleSelection = () => {
  const { demoId } = useParams<{ demoId: string }>();
  const demo = getDemoById(demoId || '');

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0b1a]">
        <div className="text-center">
          <p className="text-xl text-gray-400 mb-4">Demo niet gevonden</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            Terug naar Demo's
          </Link>
        </div>
      </div>
    );
  }

  const mapping = presetMap[demo.id];
  const preset1Name = mapping?.style1 || 'corporate';
  const preset2Name = mapping?.style2 || 'soft';
  const desc1 = presetDescriptions[preset1Name] || presetDescriptions.corporate;
  const desc2 = presetDescriptions[preset2Name] || presetDescriptions.soft;

  const colors = [
    { border: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500', hoverShadow: 'hover:shadow-blue-500/20', accent: 'text-blue-400', accentBg: 'bg-blue-500/20' },
    { border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500', hoverShadow: 'hover:shadow-purple-500/40', accent: 'text-purple-400', accentBg: 'bg-purple-500/20' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1a]">
      <BackButton />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-4xl mb-3 block">{demo.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{demo.name}</h1>
            <p className="text-gray-400">Kies een stijl die bij jou past</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {[
              { styleId: 'style-1', presetName: preset1Name, desc: desc1, color: colors[0], num: 1 },
              { styleId: 'style-2', presetName: preset2Name, desc: desc2, color: colors[1], num: 2 },
            ].map(({ styleId, presetName, desc, color, num }) => (
              <Link
                key={styleId}
                to={`/demo/${demo.id}/${styleId}`}
                className={`group bg-[#1a1b2e] rounded-2xl shadow-xl overflow-hidden border-2 ${color.border} ${color.hoverBorder} hover:shadow-2xl ${color.hoverShadow} hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Live-style preview */}
                <PresetPreview presetName={presetName} demo={demo} style={num} />

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">Stijl {num}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${color.accentBg} ${color.accent}`}>
                      {desc.label}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {desc.features.map((f, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <svg className={`w-5 h-5 ${color.accent} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`inline-flex items-center font-semibold px-6 py-3 rounded-xl transition-all group-hover:translate-x-2 ${color.accentBg} ${color.accent}`}>
                    Bekijk Stijl {num}
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-6 bg-[#0a0b1a]">
        <div className="container mx-auto px-4 text-center">
          <img
            src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png"
            alt="SandeDesign"
            className="w-12 h-12 mx-auto opacity-50"
          />
        </div>
      </footer>
    </div>
  );
};

export default StyleSelection;
