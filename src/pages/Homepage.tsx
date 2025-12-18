import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { demos } from '../config/demos';

const Homepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0b1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b1a]/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png"
                alt="SandeDesign"
                className="w-10 h-10"
              />
              <div>
                <div className="text-white font-bold text-lg">SandeDesign</div>
                <div className="text-purple-400 text-xs">Digital Excellence</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="https://sandedesign.nl" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="https://sandedesign.nl/#diensten" className="text-gray-300 hover:text-white transition-colors">
                Diensten
              </a>
              <a href="https://sandedesign.nl/#portfolio" className="text-purple-400 font-semibold">
                Live Demo's
              </a>
              <a
                href="https://sandedesign.nl/#contact"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Voorbeelden</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Bekijk onze websites live. Klik op een preview om hem fullscreen te openen.
            </p>
          </div>

          {/* Demo Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, index) => (
              <Link
                key={demo.id}
                to={`/demo/${demo.id}`}
                className="group relative bg-[#1a1b2e] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Preview Image */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={demo.heroImage}
                    alt={demo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 bg-[#1a1b2e]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold mb-1">{demo.name}</h3>
                      <p className="text-gray-400 text-sm">{demo.description}</p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: demo.primaryColorLight }}
                    >
                      {demo.icon}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile FAB Menu */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center text-white hover:shadow-xl hover:shadow-purple-500/70 transition-all"
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed bottom-24 right-6 bg-[#1a1b2e] rounded-2xl shadow-2xl border border-purple-500/30 p-4 space-y-2 min-w-[200px]" onClick={(e) => e.stopPropagation()}>
            <a
              href="https://sandedesign.nl"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors"
            >
              🏠 Home
            </a>
            <a
              href="https://sandedesign.nl/#diensten"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors"
            >
              ⚡ Diensten
            </a>
            <div className="block px-4 py-3 text-purple-400 font-semibold">
              👁️ Live Demo's
            </div>
            <a
              href="https://sandedesign.nl/#contact"
              className="block px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-center hover:shadow-lg transition-all"
            >
              📧 Contact
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-[#0a0b1a] border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png"
              alt="SandeDesign"
              className="w-8 h-8 mr-2"
            />
            <span className="text-lg font-bold text-white">SandeDesign</span>
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
