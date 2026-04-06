import React from 'react';
import { Link } from 'react-router-dom';
import { multiPageDemos } from '../demos/multi-page';

const UitgebreidLanding = () => {
  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white overflow-x-hidden">
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
            <Link to="/standaard" className="text-sm text-gray-400 hover:text-white transition-colors">Standaard</Link>
            <a href="#projecten" className="text-sm text-gray-400 hover:text-white transition-colors">Voorbeelden</a>
            <a href="https://www.sandedesign.nl/contact" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
                <span className="text-sm text-pink-300">⚙️ Uitgebreide websites op maat</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
                Uitgebreide{' '}
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">websites</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
                Meer dan een onepage nodig? Multi-page websites met bestelsystemen, reserveringen, dashboards en meer. Volledig op maat gebouwd.
              </p>
              <div className="flex gap-10 mb-10">
                {[
                  { icon: '📄', value: '9+', label: 'demo projecten' },
                  { icon: '🛒', value: 'Alles', label: 'op maat gebouwd' },
                  { icon: '🚀', value: '2-4', label: 'weken levertijd' },
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
                <a href="https://www.sandedesign.nl/contact" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all">
                  Bespreek je project
                </a>
                <a href="#projecten" className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-all">
                  Bekijk voorbeelden
                </a>
              </div>
            </div>
            {/* Preview right side with multi-page demo */}
            <div className="relative hidden lg:block">
              <div className="bg-[#1a1b2e] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4 px-3 py-1 rounded bg-white/5 text-xs text-gray-500 text-center">jouwwebshop.nl</div>
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full">LIVE</span>
                </div>
                <div className="relative h-[350px] overflow-hidden">
                  <iframe
                    src="/demo/restaurant-pro"
                    title="Preview"
                    className="w-[1440px] h-[900px] border-0 pointer-events-none"
                    style={{ transform: 'scale(0.38)', transformOrigin: 'top left' }}
                    loading="lazy"
                    tabIndex={-1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projecten grid */}
      <section id="projecten" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Bekijk onze <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">voorbeelden</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">Uitgebreide multi-page websites. Klik om ze live te bekijken.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {multiPageDemos.map((demo) => (
              <Link key={demo.id} to={demo.path} className="group relative bg-[#12132a] rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-15 group-hover:opacity-25 transition-opacity`} />
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{demo.icon}</span>
                    <span className="bg-pink-600/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Multi-page</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">{demo.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{demo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {demo.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">{f}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
            <Link to="/standaard" className="px-4 py-2 text-sm font-semibold border border-white/20 rounded-lg hover:bg-white/5 transition-all">Standaard</Link>
            <a href="https://www.sandedesign.nl/contact" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg transition-all">
              Contact ⚡
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UitgebreidLanding;
