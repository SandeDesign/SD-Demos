import React, { useEffect, useRef, useState } from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Man met stijlvolle kapsel',
    size: 'lg'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Barbier knipt haar',
    size: 'sm'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up van baardtrim',
    size: 'md'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Barbiergereedschap netjes gerangschikt',
    size: 'sm'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1570804/pexels-photo-1570804.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Klant krijgt scheerbehandeling',
    size: 'md'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern barbier interieur',
    size: 'lg'
  }
];

const Gallery = () => {
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
  
  const getImageSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'col-span-1 row-span-1';
      case 'md':
        return 'col-span-1 row-span-1 md:col-span-1 md:row-span-2';
      case 'lg':
        return 'col-span-1 row-span-1 md:col-span-2 md:row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };
  
  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-amber-600 uppercase bg-amber-100 rounded-full">
            Onze Gallerij
          </span>
          <h2 className="section-title">
            Onze <span className="text-amber-600">Meesterwerken</span>
          </h2>
          <p className="section-subtitle">
            Bekijk onze gallerij van transformaties en laat je inspireren voor je volgende bezoek.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`${getImageSize(image.size)} overflow-hidden rounded-lg transition-all duration-700 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full group">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <div className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-md">
                    Bekijk Groter
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#book" className="btn btn-primary">
            Boek Je Transformatie
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;