import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'BarberX | Where Craft Meets Precision';
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="font-sans text-gray-900 antialiased">
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
}

export default App;