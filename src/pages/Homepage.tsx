import React from 'react';
import { Link } from 'react-router-dom';
import { demos } from '../config/demos';
import { multiPageDemos } from '../demos/multi-page';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b1a]">
      {/* Main Content - Only Cards */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Multi-Page Demos Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ✨ Multi-Page Demo Websites
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                Uitgebreide demo websites met meerdere pagina's en volledige functionaliteit zoals bestelsystemen, boekingen, webshops en meer
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {multiPageDemos.map((demo, index) => (
                <Link
                  key={demo.id}
                  to={demo.path}
                  className="group relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl overflow-hidden border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-20`}></div>

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl mb-4">{demo.icon}</div>
                      <span className="bg-purple-600/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MULTI-PAGE
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition">
                      {demo.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {demo.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-purple-300 mb-2">Features:</p>
                      {demo.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-purple-500/30">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-purple-300 font-semibold">Bekijk Demo →</span>
                        <span className="text-gray-400">Volledig Functioneel</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-purple-500/30 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-500/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0a0b1a] px-6 text-gray-400 text-sm font-semibold">ONE-PAGE DEMOS</span>
            </div>
          </div>

          {/* Single-Page Demo Cards Grid */}
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

      {/* Footer - Only Small Logo */}
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

export default Homepage;
