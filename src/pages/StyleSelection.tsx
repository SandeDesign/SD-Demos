import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getDemoById } from '../config/demos';

const StyleSelection = () => {
  const { demoId } = useParams<{ demoId: string }>();
  const navigate = useNavigate();
  const demo = getDemoById(demoId || '');

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Demo niet gevonden</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            Terug naar Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                SD
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 font-serif">SandeDesign</span>
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Terug
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-16">
        {/* Demo Info */}
        <div className="text-center mb-12">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6"
            style={{ backgroundColor: demo.primaryColorLight }}
          >
            {demo.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            {demo.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            {demo.tagline}
          </p>
          <p className="text-gray-500">
            {demo.description}
          </p>
        </div>

        {/* Style Selection Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Kies uw stijl
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Welke stijl spreekt u aan?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Elke stijl heeft een unieke uitstraling en vormgeving. Klik op een stijl om de volledige demo te bekijken.
          </p>
        </div>

        {/* Style Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Style 1 */}
          <Link
            to={`/demo/${demo.id}/style-1`}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={demo.heroImage}
                alt={`${demo.name} - Stijl 1`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-sm font-semibold mb-2">
                  Modern & Minimalistisch
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stijl 1</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Strakke lijnen en moderne uitstraling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Lichte kleurenpallet met accenten</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Focus op gebruiksvriendelijkheid</span>
                </li>
              </ul>

              <div
                className="inline-flex items-center font-semibold px-6 py-3 rounded-xl transition-all group-hover:translate-x-2"
                style={{
                  backgroundColor: demo.primaryColorLight,
                  color: demo.primaryColor
                }}
              >
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
            className="group bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={demo.heroImage}
                alt={`${demo.name} - Stijl 2`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-sm font-semibold mb-2">
                  Bold & Dynamisch
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stijl 2</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Krachtige visuals en animaties</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Donkere thema's met contrast</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Opvallende call-to-actions</span>
                </li>
              </ul>

              <div
                className="inline-flex items-center font-semibold px-6 py-3 rounded-xl transition-all group-hover:translate-x-2 bg-purple-100 text-purple-600"
              >
                Bekijk Stijl 2
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Let op: Demo Omgeving</h3>
            <p className="text-gray-700">
              Deze website wordt getoond als voorbeeld. Alle content en functionaliteiten kunnen volledig worden aangepast aan uw wensen en huisstijl.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800 mt-16">
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

export default StyleSelection;
