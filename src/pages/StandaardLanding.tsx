import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { demos } from '../config/demos';

const previewDemos = demos.slice(0, 8).flatMap(d => [
  { id: d.id, style: 'style-1', label: `${d.icon} ${d.name}` },
  { id: d.id, style: 'style-2', label: `${d.icon} ${d.name} Alt` },
]);

const StandaardLanding = () => {
  const [currentPreview, setCurrentPreview] = useState(0);
  const [fullPreview, setFullPreview] = useState<string | null>(null);

  const nextPreview = useCallback(() => {
    setCurrentPreview(i => (i + 1) % previewDemos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextPreview, 6000);
    return () => clearInterval(timer);
  }, [nextPreview]);

  const current = previewDemos[currentPreview];
  const iframeSrc = `/demo/${current.id}/${current.style}`;

  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white overflow-x-hidden">
      {/* Fullscreen preview modal */}
      {fullPreview && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setFullPreview(null)}>
          <div className="relative w-full max-w-6xl h-[85vh] bg-[#1a1b2e] rounded-2xl overflow-hidden border border-white/10" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-gray-500">Preview</span>
              <button onClick={() => setFullPreview(null)} className="text-gray-400 hover:text-white text-lg font-bold px-2">✕</button>
            </div>
            <iframe src={fullPreview} title="Preview" className="w-full h-full border-0" />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0b1a]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png" alt="SandeDesign" className="w-10 h-10" />
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SandeDesign</span>
              <span className="block text-[10px] text-gray-500 -mt-1 tracking-wider">Digital Excellence</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/uitgebreid" className="text-sm text-gray-400 hover:text-white transition-colors">Uitgebreid</Link>
            <a href="#voorbeelden" className="text-sm text-gray-400 hover:text-white transition-colors">Voorbeelden</a>
            <a href="https://www.sandedesign.nl/website-aanvraag/standaard" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Start aanvraag
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-300">48 uur — van nul naar live</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
                Websites die{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">converteren</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                Niet zomaar mooi. Gebouwd om bezoekers in klanten te veranderen — razendsnel opgeleverd.
              </p>
              <div className="flex gap-10 mb-10">
                {[
                  { icon: '🌐', value: '50+', label: 'websites live' },
                  { icon: '⚡', value: '48 uur', label: 'gemiddelde levertijd' },
                  { icon: '📈', value: '99%', label: 'uptime garantie' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-1">
                      <span>{s.icon}</span>
                      <span className="text-xl font-bold">{s.value}</span>
                    </div>
                    <span className="text-xs text-gray-500">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#pakket" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all">
                  Bekijk pakketten ↓
                </a>
                <a href="#voorbeelden" className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-all">
                  Voorbeelden
                </a>
              </div>
            </div>
            {/* Browser mockup — rotating previews, full container fill */}
            <div className="relative hidden lg:block">
              <div className="bg-[#1a1b2e] rounded-2xl border border-white/10 shadow-2xl overflow-hidden cursor-pointer" onClick={() => setFullPreview(iframeSrc)}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4 px-3 py-1 rounded bg-white/5 text-xs text-gray-500 text-center">jouwbedrijf.nl</div>
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full">LIVE</span>
                </div>
                {/* Iframe scaled to fill entire container */}
                <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
                  <iframe
                    key={iframeSrc}
                    src={iframeSrc}
                    title="Preview"
                    className="absolute top-0 left-0 border-0 pointer-events-none"
                    style={{ width: '250%', height: '250%', transform: 'scale(0.4)', transformOrigin: 'top left' }}
                    loading="lazy"
                    tabIndex={-1}
                  />
                </div>
                {/* Click to expand overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                  <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-xl">Klik om te vergroten</span>
                </div>
              </div>
              {/* Navigation dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {previewDemos.slice(0, 8).map((_, i) => (
                  <button key={i} onClick={() => setCurrentPreview(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentPreview ? 'w-6 bg-cyan-400' : 'bg-white/20 hover:bg-white/40'}`} />
                ))}
              </div>
              <p className="text-center text-xs text-gray-600 mt-2">Automatisch roulerend • klik voor volledig scherm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pakket */}
      <section id="pakket" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto items-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl mb-6">🔗</div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Standaard</h2>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Onepage</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Perfect voor freelancers en kleine bedrijven die snel en professioneel online willen zijn. Moderne, responsive onepage website — opgeleverd binnen 48 uur.
              </p>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6 mb-6">
                <span className="text-5xl font-extrabold">€250</span>
                <span className="text-white/60 ml-2">excl. BTW</span>
                <p className="text-sm text-white/50 mt-2">+ €25/maand (hosting & onderhoud inbegrepen)</p>
              </div>
              <a href="https://www.sandedesign.nl/website-aanvraag/standaard" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all">
                Start aanvraag ⚡
              </a>
            </div>
            <div className="bg-[#12132a] rounded-2xl border border-white/5 p-8">
              <h3 className="text-xl font-bold mb-6">Wat je krijgt:</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: '📱', title: 'Responsive Design', desc: 'Perfect op alle apparaten' },
                  { icon: '🔍', title: 'SEO Optimized', desc: 'Vindbaar in Google' },
                  { icon: '✉️', title: 'Contactformulier', desc: 'Met spam bescherming' },
                  { icon: '🌐', title: 'Hosting Included', desc: 'Hosting inbegrepen' },
                ].map((f, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 flex items-center justify-center text-xl">{f.icon}</div>
                    <h4 className="font-semibold text-sm">{f.title}</h4>
                    <p className="text-xs text-gray-500">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {['Modern responsive design', 'SEO basis optimalisatie', 'Contactformulier met bevestiging', 'Hosting & SSL certificaat', 'Google Analytics setup', 'Performance optimalisatie', 'Oplevering binnen 48 uur'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voorbeelden — as inspiration, not branch-specific */}
      <section id="voorbeelden" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Laat je <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">inspireren</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Dit zijn voorbeelden van wat mogelijk is. Elke website wordt volledig op maat gemaakt — de stijl is vrij te kiezen, ongeacht je branche.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible">
            {demos.map((demo) => (
              <Link key={demo.id} to={`/demo/${demo.id}`} className="flex-shrink-0 w-[220px] sm:w-auto snap-start group relative bg-[#12132a] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img src={demo.heroImage} alt={demo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12132a] via-transparent to-transparent" />
                </div>
                <div className="p-3 flex items-center gap-2">
                  <span className="text-lg">{demo.icon}</span>
                  <h3 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">{demo.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-8">Elke stijl is toepasbaar op elke branche — dit zijn slechts impressies ter inspiratie.</p>
        </div>
      </section>

      {/* Sticky bottom bar */}
      <div className="sticky bottom-0 z-40 bg-[#12132a]/95 backdrop-blur-lg border-t border-white/5 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span>⚡</span>
            <span className="text-white font-semibold">Website nodig?</span>
            <span className="text-gray-500 hidden sm:inline">Standaard of Uitgebreid | Vanaf €250</span>
          </div>
          <div className="flex gap-3">
            <Link to="/uitgebreid" className="px-4 py-2 text-sm font-semibold border border-white/20 rounded-lg hover:bg-white/5 transition-all">Uitgebreid</Link>
            <a href="https://www.sandedesign.nl/website-aanvraag/standaard" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg transition-all">
              Aanvragen ⚡
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandaardLanding;
