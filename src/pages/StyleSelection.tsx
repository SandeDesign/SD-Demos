import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDemoById } from '../config/demos';
import { BackButton } from '../components/BackButton';
import { presetMap } from '../styles/presetMap';

const presetLabels: Record<string, string> = {
  editorial: 'Editorial', brutalist: 'Brutalist', soft: 'Soft & Rounded',
  corporate: 'Corporate', artisan: 'Artisan', playful: 'Playful',
  magazine: 'Magazine', retro: 'Retro', luxe: 'Luxe',
  tech: 'Tech', organic: 'Organic', bold: 'Bold',
};

const StyleSelection = () => {
  const { demoId } = useParams<{ demoId: string }>();
  const demo = getDemoById(demoId || '');

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0b1a]">
        <div className="text-center">
          <p className="text-xl text-gray-400 mb-4">Demo niet gevonden</p>
          <Link to="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
            Terug naar Demo's
          </Link>
        </div>
      </div>
    );
  }

  const mapping = presetMap[demo.id];
  const preset1 = mapping?.style1 || 'corporate';
  const preset2 = mapping?.style2 || 'soft';

  const styles = [
    { id: 'style-1', preset: preset1, num: 1, accent: 'blue' },
    { id: 'style-2', preset: preset2, num: 2, accent: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1a]">
      <BackButton />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-4xl mb-3 block">{demo.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{demo.name}</h1>
            <p className="text-gray-400">Kies een stijl die bij jou past</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {styles.map(({ id, preset, num, accent }) => (
              <Link
                key={id}
                to={`/demo/${demo.id}/${id}`}
                className={`group bg-[#1a1b2e] rounded-2xl shadow-xl overflow-hidden border-2 ${
                  accent === 'blue'
                    ? 'border-blue-500/20 hover:border-blue-500 hover:shadow-blue-500/20'
                    : 'border-purple-500/20 hover:border-purple-500 hover:shadow-purple-500/40'
                } hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Live iframe preview */}
                <div className="relative h-[400px] overflow-hidden bg-gray-900">
                  <iframe
                    src={`/demo/${demo.id}/${id}`}
                    title={`${demo.name} - Stijl ${num}`}
                    className="w-[1440px] h-[900px] border-0 pointer-events-none"
                    style={{
                      transform: 'scale(0.42)',
                      transformOrigin: 'top left',
                      width: '1440px',
                      height: '900px',
                    }}
                    loading="lazy"
                    tabIndex={-1}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-xl">
                      Bekijk Stijl {num} →
                    </span>
                  </div>
                </div>

                {/* Info bar */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">Stijl {num}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      accent === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {presetLabels[preset] || preset}
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${accent === 'blue' ? 'text-blue-400' : 'text-purple-400'} group-hover:translate-x-2 transition-transform`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

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
