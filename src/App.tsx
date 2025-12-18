import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DemoPage from './pages/DemoPage';

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
        <Route path="/demo/:demoId" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
