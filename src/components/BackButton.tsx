import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-6 left-6 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      style={{ zIndex: 999999 }}
      aria-label="Ga terug"
    >
      <ArrowLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
    </button>
  );
};
