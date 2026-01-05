import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';

const galleryImages: Record<string, string[]> = {
  kapper: [
    'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3993435/pexels-photo-3993435.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  restaurant: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600',
  ],
  fitness: [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600',
  ],
  advocaat: [
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=600',
  ],
  tandarts: [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600',
  ],
  bouwbedrijf: [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1590644842665-a8d8ea06f178?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=600',
  ],
  schoonheid: [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=600',
  ],
  makelaar: [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600',
  ],
  fotograaf: [
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=600',
  ],
  accountant: [
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600',
  ],
  bloemist: [
    'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600',
  ],
  autogarage: [
    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1632823469883-d8574d0c4b45?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600',
  ],
  yoga: [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1599447292530-d728c6eb863e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=600',
  ],
  bakkerij: [
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1612182062033-6e39e4d6c9da?auto=format&fit=crop&w=600',
  ],
  dierenarts: [
    'https://images.unsplash.com/photo-1530041539828-114de669390e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600',
  ],
  elektricien: [
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1622069166922-da90cc652726?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600',
  ],
  schilder: [
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1609767777707-099a9ef41e1b?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600',
  ],
  loodgieter: [
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600',
  ],
  tuinman: [
    'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1584735175097-719d848f8449?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600',
  ],
  schoonmaak: [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600',
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600',
  ],
};

const Gallery = () => {
  const { demo } = useDemo();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const images = galleryImages[demo.id] || galleryImages.kapper;

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
    <section id="gallery" ref={sectionRef} className="py-20 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold uppercase rounded-full"
            style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}
          >
            {demo.navLinks.find(l => l.href === '#gallery')?.label || 'Gallerij'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onze <span style={{ color: demo.primaryColor }}>Werkzaamheden</span>
          </h2>
          <p className="text-gray-600">
            Bekijk een selectie van ons werk en onze sfeer.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg transition-all duration-700 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image}
                alt={`${demo.name} - Afbeelding ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
