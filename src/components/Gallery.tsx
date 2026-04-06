import React, { useEffect, useRef, useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';

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
  const preset = usePreset();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const images = galleryImages[demo.id] || galleryImages.kapper;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const hf = { fontFamily: 'var(--font-heading)' };
  const galleryLabel = demo.navLinks.find(l => l.href === '#gallery')?.label || 'Gallerij';
  const anim = (i: number) => `transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
  const dl = (i: number) => ({ transitionDelay: `${i * 80}ms` });

  // 1. EDITORIAL: featured-first, first image 2col+2row, clean minimal
  if (preset.name === 'editorial') {
    return (
      <section id="gallery" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container max-w-5xl">
          <span className="text-sm uppercase tracking-[0.3em] mb-4 block" style={{ color: demo.primaryColor }}>{galleryLabel}</span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16" style={hf}>Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {images.map((img, i) => (
              <div key={i} className={`overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''} ${anim(i)}`} style={dl(i)}>
                <img src={img} alt={`${demo.name} ${i+1}`} className={`w-full ${i === 0 ? 'h-[500px]' : 'h-48 md:h-64'} object-cover hover:scale-105 transition-transform duration-700`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. BRUTALIST: no gap, no radius, full-bleed grid, grayscale hover
  if (preset.name === 'brutalist') {
    return (
      <section id="gallery" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="border-b-4 border-black pb-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight" style={hf}>{galleryLabel} <span style={{ color: demo.primaryColor }}>_</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden ${anim(i)} group`} style={dl(i)}>
              <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 3. SOFT: rounded-3xl cards, generous gap, pastel bg, soft shadows
  if (preset.name === 'soft') {
    return (
      <section id="gallery" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-5 py-2 mb-4 text-sm font-semibold rounded-full" style={{ backgroundColor: demo.primaryColorLight, color: demo.primaryColor }}>{galleryLabel}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900" style={hf}>Onze Sfeer</h2>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-3xl shadow-xl shadow-gray-200/50 ${anim(i)} hover:shadow-2xl transition-shadow`} style={dl(i)}>
                <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 4. CORPORATE: clean 3-col with numbered overlay captions
  if (preset.name === 'corporate') {
    return (
      <section id="gallery" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-4 py-2 mb-4 rounded text-sm font-semibold border" style={{ borderColor: demo.primaryColor, color: demo.primaryColor }}>{galleryLabel}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900" style={hf}>Ons Werk</h2>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-lg group ${anim(i)}`} style={dl(i)}>
                <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end p-4">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{demo.name} — {i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 5. ARTISAN: CSS columns masonry, varying heights
  if (preset.name === 'artisan') {
    const heights = ['h-48', 'h-72', 'h-56', 'h-80', 'h-52', 'h-64'];
    return (
      <section id="gallery" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-[0.2em] mb-4 block" style={{ color: demo.primaryColor }}>✦ {galleryLabel} ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={hf}>Ons Ambacht</h2>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div key={i} className={`break-inside-avoid overflow-hidden rounded-lg ${anim(i)}`} style={dl(i)}>
                <img src={img} alt={`${demo.name} ${i+1}`} className={`w-full ${heights[i % 6]} object-cover hover:scale-110 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 6. PLAYFUL: tilted polaroid cards with captions
  if (preset.name === 'playful') {
    const rots = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1'];
    return (
      <section id="gallery" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900" style={hf}>Kijk dan! 📸</h2>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <div key={i} className={`bg-white p-3 shadow-xl ${rots[i%6]} hover:rotate-0 hover:scale-105 transition-all ${anim(i)}`} style={dl(i)}>
                <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-56 object-cover" />
                <p className="text-center text-sm text-gray-500 mt-2 font-medium">{demo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 7. MAGAZINE: hero image + small grid, magazine cover style
  if (preset.name === 'magazine') {
    return (
      <section id="gallery" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 uppercase tracking-tight mb-8" style={hf}>{galleryLabel}</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className={`col-span-3 md:col-span-2 row-span-2 overflow-hidden ${anim(0)}`} style={dl(0)}>
              <img src={images[0]} alt={`${demo.name} 1`} className="w-full h-[400px] md:h-[540px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {images.slice(1).map((img, i) => (
              <div key={i+1} className={`overflow-hidden ${anim(i+1)}`} style={dl(i+1)}>
                <img src={img} alt={`${demo.name} ${i+2}`} className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 8. RETRO: rounded cards, warm bg, double-border effect
  if (preset.name === 'retro') {
    return (
      <section id="gallery" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: '#fdf6ec' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900" style={hf}>Gallerij</h2>
            <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: demo.primaryColor }} />
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-xl border-4 border-white shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] transition-all ${anim(i)}`} style={dl(i)}>
                <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 9. LUXE: dark bg, elegant spacing, thin borders, hover reveal
  if (preset.name === 'luxe') {
    return (
      <section id="gallery" ref={sectionRef} className="bg-[#0a0a0a]" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.4em] mb-4 block" style={{ color: demo.primaryColor }}>{galleryLabel}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={hf}>Portfolio</h2>
          </div>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <div key={i} className={`overflow-hidden border border-white/10 group ${anim(i)}`} style={dl(i)}>
                <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-64 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 10. TECH: dark bg, glowing borders on hover, grid overlay feel
  if (preset.name === 'tech') {
    return (
      <section id="gallery" ref={sectionRef} className="bg-slate-900" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest mb-2 block" style={{ color: demo.primaryColor }}>// {galleryLabel}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={hf}>Visueel_</h2>
          </div>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-lg border border-slate-700 group hover:border-transparent transition-all ${anim(i)}`} style={{ ...dl(i) }}>
                <div className="group-hover:shadow-[0_0_20px_rgba(var(--tw-shadow-color),0.3)] transition-shadow" style={{ '--tw-shadow-color': demo.primaryColor } as React.CSSProperties}>
                  <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 11. ORGANIC: blob-shaped images, earth tones, flowing
  if (preset.name === 'organic') {
    const radii = ['60% 40% 30% 70% / 50% 60% 40% 50%', '40% 60% 70% 30% / 60% 40% 50% 50%', '50% 50% 40% 60% / 40% 60% 50% 50%', '30% 70% 50% 50% / 60% 40% 60% 40%', '70% 30% 60% 40% / 40% 60% 40% 60%', '50% 50% 30% 70% / 50% 50% 60% 40%'];
    return (
      <section id="gallery" ref={sectionRef} style={{ padding: 'var(--section-spacing) 0', backgroundColor: 'var(--section-bg-alt)' }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={hf}>Natuurlijk Mooi</h2>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
            {images.map((img, i) => (
              <div key={i} className={`overflow-hidden hover:scale-105 transition-all ${anim(i)}`} style={{ borderRadius: radii[i % 6], ...dl(i) }}>
                <img src={img} alt={`${demo.name} ${i+1}`} className="w-full h-48 md:h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 12. BOLD: full-width alternating large/small, high contrast
  return (
    <section id="gallery" ref={sectionRef} className="bg-white" style={{ padding: 'var(--section-spacing) 0' }}>
      <div className="container">
        <h2 className="text-5xl md:text-8xl font-bold text-gray-900 uppercase mb-8" style={hf}>
          <span style={{ color: demo.primaryColor }}>{galleryLabel}</span>
        </h2>
      </div>
      <div className="space-y-2">
        {images.map((img, i) => (
          <div key={i} className={`overflow-hidden ${i % 3 === 0 ? 'w-full' : 'w-full md:w-3/4 md:ml-auto'} ${anim(i)}`} style={dl(i)}>
            <img src={img} alt={`${demo.name} ${i+1}`} className={`w-full ${i % 3 === 0 ? 'h-64 md:h-96' : 'h-48 md:h-64'} object-cover hover:scale-105 transition-transform duration-700`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
