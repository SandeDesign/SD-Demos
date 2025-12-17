import React, { useEffect, useRef, useState } from 'react';

const contactInfo = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    title: 'Bel Ons',
    info: '(123) 456-7890',
    action: 'tel:+31234567890'
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    title: 'E-mail Ons',
    info: 'info@novabarber.nl',
    action: 'mailto:info@novabarber.nl'
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: 'Bezoek Ons',
    info: 'Barbierstraat 123, 1234 AB Amsterdam',
    action: 'https://maps.google.com'
  }
];

const hours = [
  { day: 'Maandag', hours: '9:00 - 19:00' },
  { day: 'Dinsdag', hours: '9:00 - 19:00' },
  { day: 'Woensdag', hours: '9:00 - 19:00' },
  { day: 'Donderdag', hours: '9:00 - 21:00' },
  { day: 'Vrijdag', hours: '9:00 - 21:00' },
  { day: 'Zaterdag', hours: '8:00 - 18:00' },
  { day: 'Zondag', hours: 'Gesloten' }
];

const Location = () => {
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
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gray-100"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-amber-600 uppercase bg-amber-100 rounded-full">
            Locatie & Contact
          </span>
          <h2 className="section-title">
            Vind <span className="text-amber-600">Ons</span>
          </h2>
          <p className="section-subtitle">
            Bezoek onze premium barbershop of neem contact op om een afspraak te maken.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Contactgegevens</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-amber-600 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold">{item.title}</h4>
                      <a 
                        href={item.action} 
                        className="text-gray-600 transition-colors duration-300 hover:text-amber-600"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Openingstijden</h3>
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between py-2 border-b border-gray-200 last:border-0"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={item.day === 'Zondag' ? 'text-red-500 font-medium' : 'text-gray-600'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#book" 
                  className="inline-block w-full py-3 text-center text-white bg-amber-600 rounded-md hover:bg-amber-700"
                >
                  Maak een Afspraak
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="overflow-hidden rounded-lg shadow-lg h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48371.66637295465!2d-74.01358825950104!3d40.71277032826299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1627309792727!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Nova Barber Locatie"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;