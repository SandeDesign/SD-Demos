import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDemoById } from '../config/demos';

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

  return (
    <div className="min-h-screen bg-[#0a0b1a]">
      {/* Main Content - Only Style Cards */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Style Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Style 1 */}
            <Link
              to={`/demo/${demo.id}/style-1`}
              className="group bg-[#1a1b2e] rounded-2xl shadow-xl overflow-hidden border-2 border-purple-500/20 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={demo.heroImage}
                  alt={`${demo.name} - Stijl 1`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg text-sm font-semibold mb-2">
                    Modern & Minimalistisch
                  </span>
                </div>

                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-blue-600/90 flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Stijl 1</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Strakke lijnen en moderne uitstraling</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Lichte kleurenpallet met accenten</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Focus op gebruiksvriendelijkheid</span>
                  </li>
                </ul>

                <div className="inline-flex items-center font-semibold px-6 py-3 rounded-xl transition-all group-hover:translate-x-2 bg-blue-500/20 text-blue-400">
                  Bekijk Stijl 1
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Style 2 */}
            <Link
              to={`/demo/${demo.id}/style-2`}
              className="group bg-[#1a1b2e] rounded-2xl shadow-xl overflow-hidden border-2 border-purple-500/20 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={demo.heroImage}
                  alt={`${demo.name} - Stijl 2`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg text-sm font-semibold mb-2">
                    Bold & Dynamisch
                  </span>
                </div>

                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-purple-600/90 flex items-center justify-center shadow-xl shadow-purple-500/50">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Stijl 2</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Krachtige visuals en animaties</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Donkere thema's met contrast</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Opvallende call-to-actions</span>
                  </li>
                </ul>

                <div className="inline-flex items-center font-semibold px-6 py-3 rounded-xl transition-all group-hover:translate-x-2 bg-purple-500/20 text-purple-400">
                  Bekijk Stijl 2
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </Link>
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

export default StyleSelection;
