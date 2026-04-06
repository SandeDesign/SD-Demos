import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { demos } from '../config/demos';
import { multiPageDemos } from '../demos/multi-page';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white overflow-x-hidden">
      {/* ═══════════ FLOATING SHAPES ═══════════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-[0.04]"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #a855f7, #ec4899)`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      {/* ═══════════ HEADER ═══════════ */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0b1a]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png"
              alt="SandeDesign"
              className="w-10 h-10"
            />
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SandeDesign</span>
              <span className="block text-[10px] text-gray-500 -mt-1 tracking-wider">Digital Excellence</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Diensten</a>
            <a href="#demos" className="text-sm text-gray-400 hover:text-white transition-colors">Demo's</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">Over Ons</a>
            <a href="#contact" className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[80vh] flex items-center py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-purple-300">48 uur — van nul naar live</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
              Websites die{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">converteren</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Niet zomaar mooi. Gebouwd om bezoekers in klanten te veranderen — razendsnel opgeleverd.
            </p>
            {/* Stats */}
            <div className="flex gap-10 mb-10">
              {[
                { icon: '🌐', value: '50+', label: 'websites live' },
                { icon: '⚡', value: '48 uur', label: 'gemiddelde levertijd' },
                { icon: '📈', value: '99%', label: 'uptime garantie' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-lg">{s.icon}</span>
                  <div>
                    <span className="text-xl font-bold text-white">{s.value}</span>
                    <span className="block text-xs text-gray-500">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5">
                Bekijk pakketten ↓
              </a>
              <a href="#demos" className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition-all">
                Portfolio bekijken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES — 3 GRADIENT CARDS ═══════════ */}
      <section id="services" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Drie pakketten{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Één specialisatie</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Standaard Onepage */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 to-blue-600/80 opacity-90" />
              <div className="relative p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-3">Standaard Onepage</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Jouw bedrijf online in 48 uur. Volledig op maat gebouwd, razendsnel, SEO-klaar. Vanaf €250 excl. BTW, inclusief eigen klantenportaal.
                </p>
                <div className="space-y-2 mb-6">
                  {['Responsive design', 'SEO geoptimaliseerd', 'Contactformulier', 'Hosting inbegrepen', 'Oplevering binnen 48 uur'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-black/20 rounded-xl p-4 mb-6">
                  <span className="text-3xl font-bold">€250</span>
                  <span className="text-white/60 ml-2 text-sm">excl. BTW</span>
                  <span className="block text-xs text-white/50 mt-1">+ €25/maand (hosting & onderhoud)</span>
                </div>
                <Link to={`/demo/${demos[0]?.id || 'kapper'}`} className="inline-flex items-center text-sm font-semibold text-white hover:translate-x-1 transition-transform">
                  Bekijk voorbeelden →
                </Link>
              </div>
            </div>

            {/* Uitgebreid Multi-page */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-pink-400/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-pink-600/80 opacity-90" />
              <div className="relative p-8">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-3">Uitgebreid Multi-page</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  CRM, portaal, SaaS of maatwerk — wij bouwen het. 15+ eigen producten live. Van idee tot productie.
                </p>
                <div className="space-y-2 mb-6">
                  {['Meerdere pagina\'s', 'Bestelsysteem / Booking', 'Admin dashboard', 'Custom functionaliteit', 'Schaalbaar platform'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-black/20 rounded-xl p-4 mb-6">
                  <span className="text-3xl font-bold">Op maat</span>
                  <span className="block text-xs text-white/50 mt-1">Prijs afhankelijk van complexiteit</span>
                </div>
                <a href="#demos-multi" className="inline-flex items-center text-sm font-semibold text-white hover:translate-x-1 transition-transform">
                  Bekijk voorbeelden →
                </a>
              </div>
            </div>

            {/* Demo Showcase */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-orange-400/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 to-orange-500/80 opacity-90" />
              <div className="relative p-8">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3">Live Demo's</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Bekijk onze demo websites in actie. 20 niches, 12 unieke stijlen, 40+ variaties. Kies een branche en ervaar het verschil.
                </p>
                <div className="space-y-2 mb-6">
                  {['20 verschillende branches', '12 unieke visuele stijlen', 'Live interactieve preview', 'Responsive op elk device', 'Direct te bekijken'].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-black/20 rounded-xl p-4 mb-6">
                  <span className="text-3xl font-bold">Gratis</span>
                  <span className="text-white/60 ml-2 text-sm">te bekijken</span>
                  <span className="block text-xs text-white/50 mt-1">Kies je favoriet en we bouwen het</span>
                </div>
                <a href="#demos" className="inline-flex items-center text-sm font-semibold text-white hover:translate-x-1 transition-transform">
                  Bekijk alle demo's ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight">Geen bureau.</h2>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">Een bouwer.</h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>SandeDesign is geen traditioneel webbureau dat PowerPoints maakt en vergaderingen plant. Wij zijn ondernemers die bouwen. We kennen de frustratie van software die niet doet wat je wilt.</p>
                <p>Daarom bouwen we het zelf. Al onze <strong className="text-white">15+ eigen producten</strong> zijn geboren uit problemen die we zelf tegenkwamen op de werkvloer.</p>
                <p>En dat is precies wat we voor jou doen: software bouwen die <strong className="text-white">van jou is</strong>. Geen licentiekosten die elk jaar stijgen. Jij bent eigenaar — wij bouwen, onderhouden en ontwikkelen door.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🛡️', color: 'from-cyan-500 to-teal-500', title: 'Jij bent eigenaar', desc: 'Geen vendor lock-in. De software die we bouwen is van jou. Volledig overdraagbaar, geen verborgen afhankelijkheden.' },
                { icon: '💻', color: 'from-purple-500 to-indigo-500', title: 'Gebouwd uit ervaring', desc: '15+ eigen producten live. Elke oplossing komt voort uit echte bedrijfsproblemen die we zelf hebben opgelost.' },
                { icon: '🚀', color: 'from-pink-500 to-rose-500', title: 'Snel en flexibel', desc: 'Website in 48 uur. Applicatie MVP in 2-4 weken. En als je bedrijf groeit, groeit je software mee.' },
                { icon: '💜', color: 'from-orange-500 to-red-500', title: 'Persoonlijk klantenportaal', desc: 'Elke klant krijgt een eigen dashboard met facturen, tickets, wijzigingsverzoeken en real-time statistieken.' },
              ].map((item, i) => (
                <div key={i} className="group flex gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DEMO GRID — SINGLE PAGE ═══════════ */}
      <section id="demos" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm text-purple-300">🎨 Standaard Onepage Demo's</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Kies je <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">branche</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">Elke demo heeft 2 compleet verschillende stijlen. Klik om te kiezen.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {demos.map((demo, index) => (
              <Link
                key={demo.id}
                to={`/demo/${demo.id}`}
                className="group relative bg-[#12132a] rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                <div className="relative h-36 overflow-hidden">
                  <img src={demo.heroImage} alt={demo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12132a] via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{demo.icon}</span>
                    <h3 className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">{demo.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DEMO GRID — MULTI PAGE ═══════════ */}
      <section id="demos-multi" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <span className="text-sm text-pink-300">⚙️ Uitgebreide Multi-page Demo's</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Complexe <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">applicaties</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">Van restaurant bestelsystemen tot SaaS dashboards. Alles is mogelijk.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {multiPageDemos.map((demo, index) => (
              <Link
                key={demo.id}
                to={demo.path}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{demo.icon}</span>
                    <span className="bg-purple-600/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Multi-page</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{demo.title}</h3>
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

      {/* ═══════════ CONTACT / CTA ═══════════ */}
      <section id="contact" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <span className="text-sm text-green-300">⏱ Reactietijd onder 2 uur</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              Laten we{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">samenwerken</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Kies hoe je ons wilt bereiken. WhatsApp, mail, bellen of onze AI-assistent — we staan voor je klaar.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: '✉️', label: 'Email', gradient: 'from-blue-500 to-cyan-500' },
                { icon: '📞', label: 'Telefoon', gradient: 'from-green-500 to-emerald-500' },
                { icon: '💬', label: 'WhatsApp', gradient: 'from-purple-500 to-violet-500' },
                { icon: '🤖', label: '24/7 Chat', gradient: 'from-orange-500 to-red-500' },
              ].map((c, i) => (
                <div key={i} className={`rounded-2xl p-6 bg-gradient-to-br ${c.gradient} cursor-pointer hover:scale-105 transition-transform text-center`}>
                  <span className="text-3xl block mb-2">{c.icon}</span>
                  <span className="font-bold text-sm">{c.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">⚡ Reactie binnen 2 uur</span>
              <span className="flex items-center gap-2">✅ Geen verplichtingen</span>
              <span className="flex items-center gap-2">🤖 24/7 AI-assistent</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-white/5 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png"
                alt="SandeDesign"
                className="w-8 h-8 opacity-60"
              />
              <span className="text-sm text-gray-600">© {new Date().getFullYear()} SandeDesign — Digital Excellence</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#services" className="hover:text-white transition-colors">Diensten</a>
              <a href="#demos" className="hover:text-white transition-colors">Demo's</a>
              <a href="#about" className="hover:text-white transition-colors">Over Ons</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
