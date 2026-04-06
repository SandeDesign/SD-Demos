import React from 'react';
import { Link } from 'react-router-dom';
import { demos } from '../config/demos';
import { multiPageDemos } from '../demos/multi-page';

const nicheLabels: Record<string, string> = {
  kapper: 'Kapper', restaurant: 'Restaurant', fitness: 'Fitness', advocaat: 'Advocaat',
  tandarts: 'Tandarts', bouwbedrijf: 'Bouwbedrijf', schoonheid: 'Schoonheid', makelaar: 'Makelaar',
  fotograaf: 'Fotograaf', accountant: 'Accountant', bloemist: 'Bloemist', autogarage: 'Autogarage',
  yoga: 'Yoga Studio', bakkerij: 'Bakkerij', dierenarts: 'Dierenarts', elektricien: 'Elektricien',
  schilder: 'Schilder', loodgieter: 'Loodgieter', tuinman: 'Tuinman', schoonmaak: 'Schoonmaak',
};

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0b1a]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png" alt="SandeDesign" className="w-10 h-10" />
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SandeDesign</span>
              <span className="block text-[10px] text-gray-500 -mt-1 tracking-wider">Digital Excellence</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#onepage" className="text-sm text-gray-400 hover:text-white transition-colors">Onepage Demo's</a>
            <a href="#multipage" className="text-sm text-gray-400 hover:text-white transition-colors">Multi-page Demo's</a>
            <Link to="/standaard" className="text-sm text-gray-400 hover:text-white transition-colors">Standaard pakket</Link>
            <Link to="/uitgebreid" className="text-sm text-gray-400 hover:text-white transition-colors">Uitgebreid pakket</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <span className="text-sm text-purple-300">🎨 {demos.length} niches • 12 stijlen • {demos.length * 2}+ variaties</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Demo <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Showcase</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10">
            Bekijk onze demo websites in actie. Klik op een branche, kies een stijl, en ervaar het verschil.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#onepage" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all">
              Onepage Demo's ↓
            </a>
            <a href="#multipage" className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-all">
              Multi-page Demo's
            </a>
          </div>
        </div>
      </section>

      {/* Onepage Demo Grid */}
      <section id="onepage" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              Standaard <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Onepage</span> Demo's
            </h2>
            <p className="text-gray-500">Elke demo heeft 2 compleet verschillende stijlen</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-5 sm:overflow-visible">
            {demos.map((demo) => (
              <Link key={demo.id} to={`/demo/${demo.id}`} className="flex-shrink-0 w-[220px] sm:w-auto snap-start group relative bg-[#12132a] rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img src={demo.heroImage} alt={demo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12132a] via-transparent to-transparent" />
                </div>
                <div className="p-3 flex items-center gap-2">
                  <span className="text-lg">{demo.icon}</span>
                  <h3 className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">{nicheLabels[demo.id] || demo.id} Website</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-page Demo Grid */}
      <section id="multipage" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              Uitgebreide <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Multi-page</span> Demo's
            </h2>
            <p className="text-gray-500">Uitgebreide websites met meerdere pagina's</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible max-w-5xl mx-auto">
            {multiPageDemos.map((demo) => (
              <Link key={demo.id} to={demo.path} className={`flex-shrink-0 w-[85vw] max-w-[340px] sm:w-auto sm:max-w-none snap-start group relative bg-[#12132a] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-15 group-hover:opacity-25 transition-opacity`} />
                <div className="relative p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl sm:text-3xl">{demo.icon}</span>
                    <span className="bg-purple-600/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Multi-page</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{demo.title}</h3>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png" alt="SandeDesign" className="w-8 h-8 opacity-60" />
            <span className="text-sm text-gray-600">© {new Date().getFullYear()} SandeDesign — Digital Excellence</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link to="/standaard" className="hover:text-white transition-colors">Standaard</Link>
            <Link to="/uitgebreid" className="hover:text-white transition-colors">Uitgebreid</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
