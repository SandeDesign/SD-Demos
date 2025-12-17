import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img 
              src="https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Hoofd Barbier" 
              className="object-cover w-full h-full rounded-lg shadow-xl"
              style={{ maxHeight: '600px' }}
            />
          </div>
          
          <div 
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-amber-600 uppercase bg-amber-100 rounded-full">
              Over Nova Barber
            </span>
            <h2 className="section-title">
              Creëren van <span className="text-amber-600">Vertrouwen</span>, Één Knipbeurt per Keer
            </h2>
            <p className="mb-6 text-gray-700">
              Nova Barber is meer dan alleen een barbershop – het is een eerbetoon aan de kunst van mannelijke verzorging. Opgericht in 2020, hebben we ons snel gevestigd als dé premium bestemming voor mannen die excellentie eisen in elk aspect van hun verzorgingservaring.
            </p>
            <p className="mb-6 text-gray-700">
              Ons team van meester-barbiers combineert traditionele technieken met moderne stijlen om een ervaring te bieden die het gewone overstijgt. Wij geloven dat de juiste knipbeurt niet alleen je uiterlijk kan transformeren, maar ook je zelfvertrouwen.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-amber-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Premium Gereedschap</h3>
                  <p className="text-gray-600">Alleen het beste materiaal voor perfecte precisie.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-amber-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                    <path d="M16 2H8.5A5.5 5.5 0 0 0 3 7.5V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M8 12h8"></path>
                    <path d="M8 16h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Gecertificeerde Experts</h3>
                  <p className="text-gray-600">Professioneel opgeleide en gediplomeerde barbiers.</p>
                </div>
              </div>
            </div>
            
            <a href="#services" className="btn btn-primary">
              Ontdek Onze Diensten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;