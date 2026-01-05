import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="hidden sm:inline">Terug</span>
    </button>
  );
};
