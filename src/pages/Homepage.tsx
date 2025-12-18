import React from 'react';
import { Link } from 'react-router-dom';
import { demos } from '../config/demos';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b1a]">
      {/* Main Content - Only Cards */}
      <main className="py-16">
        <div className="container mx-auto px-4">
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
