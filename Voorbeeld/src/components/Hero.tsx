import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen text-white bg-gray-900"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container relative z-10 text-center">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Waar <span className="text-amber-500">Vakmanschap</span> <span className="text-amber-500">Precisie</span> Ontmoet
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-300 md:text-xl">
            Scherpe fades. Soepele service. Klassiek barbieren opnieuw gedefinieerd.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="#book" className="btn btn-primary">
              Nu Boeken
            </a>
            <a href="#services" className="btn btn-secondary">
              Onze Diensten
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-8">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 text-white bg-amber-600 rounded-full animate-bounce"
          aria-label="Scroll naar Over Ons sectie"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;