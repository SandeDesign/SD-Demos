import React, { useEffect, useRef, useState } from 'react';

const servicesList = [
  {
    id: 1,
    title: 'Klassieke Knipbeurt',
    price: 35,
    description: 'Onze signature knipbeurt inclusief consult, wassen en styling.',
    duration: '45 min',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Skin Fade',
    price: 45,
    description: 'Precisie fade techniek met naadloze overgangen en strakke lijnen.',
    duration: '45 min',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6v12"></path>
        <path d="M15 6v12"></path>
        <path d="M3 6a6 6 0 0 0 6 6 6 6 0 0 0 6-6"></path>
        <path d="M21 6a6 6 0 0 0-6 6 6 6 0 0 0-6 6"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Baard Styling',
    price: 30,
    description: 'Vorm en definieer je baard voor een scherpe, onderscheidende look.',
    duration: '30 min',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 2 4 10 3-6 1.5 3.5L20 8"></path>
        <path d="M19 17a7 7 0 0 1-14 0"></path>
        <path d="M17 17a5 5 0 0 0-10 0"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Hot Towel Scheerbeurt',
    price: 40,
    description: 'Klassieke scheerbeurt met open mes en warme handdoek behandeling.',
    duration: '40 min',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 21h10V10H7Z"></path>
        <path d="M21 10 7 3v7l7 1Z"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Vader & Zoon',
    price: 60,
    description: 'Speciaal pakket voor vader en zoon knippen. Versterk de band terwijl jullie er scherp uitzien.',
    duration: '60 min',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        <path d="M21 21v-2a4 4 0 0 0-3-3.85"></path>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Haar & Baard Combo',
    price: 65,
    description: 'Compleet verzorgingspakket met knipbeurt en baard trimmen of scheren.',
    duration: '60 min',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16"></path>
        <path d="M4 10h16"></path>
        <path d="M4 14h16"></path>
        <path d="M4 18h16"></path>
      </svg>
    )
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
  
  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gray-100"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-amber-600 uppercase bg-amber-100 rounded-full">
            Onze Diensten
          </span>
          <h2 className="section-title">
            Premium <span className="text-amber-600">Verzorgingsservice</span>
          </h2>
          <p className="section-subtitle">
            Ontdek ons aanbod van professionele verzorgingsdiensten, ontworpen om jouw stijl naar een hoger niveau te tillen.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div 
              key={service.id}
              className={`relative p-6 bg-white rounded-lg shadow-lg transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 px-4 py-2 text-white transform translate-y-[-50%] bg-amber-600 rounded-full">
                €{service.price}
              </div>
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-amber-600 bg-amber-100 rounded-lg">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <div className="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{service.duration}</span>
              </div>
              <a 
                href="#book" 
                className="inline-block w-full py-3 mt-6 text-center text-white transition-colors duration-300 bg-gray-800 rounded-md hover:bg-amber-600"
              >
                Nu Boeken
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;