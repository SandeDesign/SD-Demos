import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'James de Vries',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Nova Barber heeft mijn verzorgingservaring compleet veranderd. De aandacht voor detail en persoonlijke service is ongeëvenaard. Ik vertrouw niemand anders met mijn haar.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael van der Berg',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Ik ben bij veel barbershops geweest, maar geen enkele is te vergelijken met de ervaring bij Nova Barber. De hot towel scheerbeurt is een must-try luxe die elke man zou moeten ervaren.',
    rating: 5
  },
  {
    id: 3,
    name: 'Robert Jansen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Vanaf het moment dat je binnenstapt, weet je dat je in goede handen bent. De sfeer, expertise en resultaten zijn consistent uitstekend. Zeer aanbevolen!',
    rating: 5
  },
  {
    id: 4,
    name: 'David Bakker',
    avatar: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Het team bij Nova Barber knipt niet alleen haar - ze creëren zelfvertrouwen. Ik vertrek altijd met een geweldig gevoel. Elke cent waard.',
    rating: 4
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={index < rating ? '#F59E0B' : 'none'}
        stroke={index < rating ? '#F59E0B' : '#CBD5E1'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ));
  };
  
  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-amber-600 uppercase bg-amber-100 rounded-full">
            Recensies
          </span>
          <h2 className="section-title text-white">
            Wat Onze <span className="text-amber-500">Klanten</span> Zeggen
          </h2>
          <p className="section-subtitle text-gray-400">
            Hoor van onze tevreden klanten over hun ervaring bij Nova Barber.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="min-w-full px-4"
                  >
                    <div 
                      className={`p-8 bg-gray-800 rounded-lg shadow-xl transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      }`}
                    >
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 mr-4 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <div className="flex mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-gray-300 italic">"{testimonial.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-amber-500 w-8' : 'bg-gray-500'
                }`}
                aria-label={`Ga naar recensie ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full shadow-lg focus:outline-none hover:bg-amber-600 transition-colors duration-300"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Vorige recensie"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full shadow-lg focus:outline-none hover:bg-amber-600 transition-colors duration-300"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
            aria-label="Volgende recensie"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;