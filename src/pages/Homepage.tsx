import React from 'react';
import { Link } from 'react-router-dom';
import { demos } from '../config/demos';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        </div>

        <div className="container relative z-10 text-center py-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              SD
            </div>
            <span className="ml-3 text-2xl font-bold text-white font-serif">SandeDesign</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            Professionele Website <span className="text-blue-400">Demo's</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Ontdek onze collectie van moderne, responsive website templates.
            Elke demo is ontworpen om te inspireren en te overtuigen.
          </p>

          <a
            href="#demos"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            Bekijk Demo's
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Demos Grid */}
      <section id="demos" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Onze Demo Collectie
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Klik op een demo om de volledige website ervaring te bekijken.
              Elke template is volledig responsive en klaar voor aanpassing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, index) => (
              <Link
                key={demo.id}
                to={`/demo/${demo.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={demo.heroImage}
                    alt={demo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span
                    className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white rounded-full"
                    style={{ backgroundColor: demo.primaryColor }}
                  >
                    {demo.id === 'kapper' ? 'Populair' :
                     demo.id === 'restaurant' ? 'Nieuw' :
                     demo.id === 'fitness' ? 'Trending' : 'Demo'}
                  </span>
                </div>

                <div className="p-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: demo.primaryColorLight }}
                  >
                    {demo.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{demo.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{demo.description}</p>

                  <div
                    className="inline-flex items-center font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: demo.primaryColorLight,
                      color: demo.primaryColor
                    }}
                  >
                    Bekijk Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Interesse in een van deze designs?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Neem contact met ons op voor een op maat gemaakte website voor jouw bedrijf.
          </p>
          <a
            href="mailto:info@sandedesign.nl"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Neem Contact Op
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              SD
            </div>
            <span className="ml-2 text-lg font-bold text-white font-serif">SandeDesign</span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SandeDesign. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
