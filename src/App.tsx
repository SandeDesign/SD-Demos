import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import StyleSelection from './pages/StyleSelection';
import DemoPage from './pages/DemoPage';
import {
  RestaurantProDemo,
  FashionStoreDemo,
  HotelBookingDemo,
  FitnessPortalDemo,
  BlogMagazineDemo,
} from './demos/multi-page';

function App() {
  useEffect(() => {
    // Add smooth scrolling for all anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).matches('a[href^="#"]')) {
        handleClick(e);
      }
    });

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* Multi-page demos */}
        <Route path="/demo/restaurant-pro/*" element={<RestaurantProDemo />} />
        <Route path="/demo/fashion-store" element={<FashionStoreDemo />} />
        <Route path="/demo/hotel-booking" element={<HotelBookingDemo />} />
        <Route path="/demo/fitness-portal" element={<FitnessPortalDemo />} />
        <Route path="/demo/blog-magazine" element={<BlogMagazineDemo />} />

        {/* Single-page demos (existing) */}
        <Route path="/demo/:demoId" element={<StyleSelection />} />
        <Route path="/demo/:demoId/:styleId" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
