import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DemoProvider } from '../context/DemoContext';
import { getDemoById } from '../config/demos';
import { BackButton } from '../components/BackButton';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Footer from '../components/Footer';

const DemoContent = () => {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <BackButton />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

const DemoPage = () => {
  const { demoId, styleId } = useParams<{ demoId: string; styleId: string }>();
  const demo = getDemoById(demoId || 'kapper');

  useEffect(() => {
    if (demo) {
      const styleText = styleId === 'style-2' ? ' - Stijl 2' : ' - Stijl 1';
      document.title = `${demo.name}${styleText} | ${demo.tagline}`;
    }
    window.scrollTo(0, 0);
  }, [demo, styleId]);

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Demo niet gevonden</p>
      </div>
    );
  }

  if (!styleId || (styleId !== 'style-1' && styleId !== 'style-2')) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Ongeldige stijl</p>
      </div>
    );
  }

  return (
    <DemoProvider demoId={demoId || 'kapper'} styleId={styleId}>
      <DemoContent />
    </DemoProvider>
  );
};

export default DemoPage;
