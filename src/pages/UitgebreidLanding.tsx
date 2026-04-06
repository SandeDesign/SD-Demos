import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { multiPageDemos } from '../demos/multi-page';

const previewPaths = [
  '/demo/restaurant-pro', '/demo/fashion-store', '/demo/hotel-booking',
  '/demo/fitness-portal', '/demo/blog-magazine', '/demo/saas-dashboard',
];

const UitgebreidLanding = () => {
  const [currentPreview, setCurrentPreview] = useState(0);
  const [fullPreview, setFullPreview] = useState<string | null>(null);

  const nextPreview = useCallback(() => {
    setCurrentPreview(i => (i + 1) % previewPaths.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextPreview, 6000);
    return () => clearInterval(timer);
  }, [nextPreview]);

  const iframeSrc = previewPaths[currentPreview];

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
            <Link to="/standaard" className="text-sm text-gray-400 hover:text-white transition-colors">Onepage</Link>
            <a href="#voorbeelden" className="text-sm text-gray-400 hover:text-white transition-colors">Voorbeelden</a>
            <a href="https://www.sandedesign.nl/website-aanvraag/uitgebreid" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                <span className="text-sm text-pink-300">Multi-page websites op maat</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
                Uitgebreide{' '}
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">platforms</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                Meer dan een onepage nodig? Multi-page websites met bestelsystemen, reserveringen, dashboards en meer.
              </p>
              <div className="flex gap-10 mb-10">
                {[
                  { icon: '📄', value: '9+', label: 'demo projecten' },
                  { icon: '🛒', value: 'Op maat', label: 'gebouwd' },
                  { icon: '🚀', value: '2-4 wk', label: 'levertijd' },
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
                <a href="#pakket" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all">
                  Bekijk pakketten ↓
                </a>
                <a href="#voorbeelden" className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-all">
                  Voorbeelden
                </a>
              </div>
            </div>
            {/* Browser mockup — rotating, full fill */}
            <div className="relative hidden lg:block">
              <div className="bg-[#1a1b2e] rounded-2xl border border-white/10 shadow-2xl overflow-hidden cursor-pointer" onClick={() => setFullPreview(iframeSrc)}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4 px-3 py-1 rounded bg-white/5 text-xs text-gray-500 text-center">jouwplatform.nl</div>
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full">LIVE</span>
                </div>
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
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                  <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-xl">Klik om te vergroten</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4">
                {previewPaths.map((_, i) => (
                  <button key={i} onClick={() => setCurrentPreview(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentPreview ? 'w-6 bg-pink-400' : 'bg-white/20 hover:bg-white/40'}`} />
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-xl mb-6">⚡</div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Uitgebreid</h2>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Platform</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Voor blogs, membership sites en complexe platforms. Multi-page websites met CMS, custom features en uitgebreide integraties.
              </p>
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-6 mb-6">
                <span className="text-5xl font-extrabold">€450</span>
                <span className="text-white/60 ml-2">excl. BTW</span>
                <p className="text-sm text-white/50 mt-2">+ €50/maand (hosting, onderhoud & updates)</p>
              </div>
              <a href="https://www.sandedesign.nl/website-aanvraag/uitgebreid" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all">
                Start maatwerk aanvraag ⚡
              </a>
            </div>
            <div className="bg-[#12132a] rounded-2xl border border-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Wat je krijgt:</h3>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-bold rounded-full uppercase">Populair</span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: '📄', title: 'Multi-page', desc: "Onbeperkt pagina's" },
                  { icon: '📝', title: 'CMS Integratie', desc: 'Beheer je content' },
                  { icon: '📊', title: 'Analytics', desc: 'Uitgebreide statistieken' },
                  { icon: '⚙️', title: 'Custom Features', desc: 'Maatwerk functionaliteit' },
                ].map((f, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 flex items-center justify-center text-xl">{f.icon}</div>
                    <h4 className="font-semibold text-sm">{f.title}</h4>
                    <p className="text-xs text-gray-500">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {["Onbeperkt aantal pagina's", 'Custom design & branding', 'Content Management Systeem', 'Gebruikers & rechten beheer', 'API integraties', 'Geavanceerde SEO optimalisatie', 'Maandelijks onderhoud & updates', 'Priority support'].map((f, i) => (
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

      {/* Voorbeelden */}
      <section id="voorbeelden" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Laat je <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">inspireren</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Dit zijn voorbeelden van wat mogelijk is. Elke website wordt volledig op maat gemaakt voor jouw situatie.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible max-w-5xl mx-auto">
            {multiPageDemos.map((demo) => (
              <Link key={demo.id} to={demo.path} className={`flex-shrink-0 w-[85vw] max-w-[340px] sm:w-auto sm:max-w-none snap-start group relative bg-[#12132a] rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-15 group-hover:opacity-25 transition-opacity`} />
                <div className="relative p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl sm:text-3xl">{demo.icon}</span>
                    <span className="bg-pink-600/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Multi-page</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">{demo.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">{demo.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {demo.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">{f}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-8">Elk project wordt volledig op maat gebouwd — deze demo's zijn ter inspiratie.</p>
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
            <Link to="/standaard" className="px-4 py-2 text-sm font-semibold border border-white/20 rounded-lg hover:bg-white/5 transition-all">Onepage</Link>
            <a href="https://www.sandedesign.nl/website-aanvraag/uitgebreid" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg transition-all">
              Website aanvragen ⚡
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UitgebreidLanding;
