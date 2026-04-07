import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isPrimary?: boolean;
}

interface SiteHeaderProps {
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const SiteHeader = ({ navItems, ctaLabel, ctaHref }: SiteHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith('#') || href.startsWith('http')) return false;
    return location.pathname === href;
  };

  const renderLink = (item: NavItem, className: string, onClick?: () => void) => {
    if (item.isExternal) {
      return <a href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{item.label}</a>;
    }
    if (item.href.startsWith('#')) {
      return <a href={item.href} className={className} onClick={onClick}>{item.label}</a>;
    }
    return <Link to={item.href} className={`${className} ${isActive(item.href) ? 'text-white' : ''}`} onClick={onClick}>{item.label}</Link>;
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0b1a]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png" alt="SandeDesign" className="w-10 h-10" />
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SandeDesign</span>
              <span className="block text-[10px] text-gray-500 -mt-1 tracking-wider">Digital Excellence</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.filter(n => !n.isPrimary).map((item, i) => (
              <React.Fragment key={i}>
                {renderLink(item, 'text-sm text-gray-400 hover:text-white transition-colors')}
              </React.Fragment>
            ))}
            {ctaHref && ctaLabel && (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                {ctaLabel}
              </a>
            )}
          </nav>

          {/* Mobile hamburger */}
          <button className="md:hidden relative w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />

        {/* Slide-in panel */}
        <div className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-[#0d0e20] border-l border-white/10 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <div className="flex items-center gap-2">
              <img src="https://fl-group.org/wp-content/uploads/2025/03/New-Logo-SandeDesign-150x150.png" alt="" className="w-8 h-8" />
              <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Menu</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Nav items */}
          <nav className="px-4 py-6 space-y-1">
            {navItems.filter(n => !n.isPrimary).map((item, i) => (
              <React.Fragment key={i}>
                {renderLink(
                  item,
                  `flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all ${
                    isActive(item.href) ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`,
                  () => setIsOpen(false)
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Divider */}
          <div className="mx-6 border-t border-white/5" />

          {/* Quick links */}
          <div className="px-4 py-6 space-y-1">
            <Link to="/standaard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-white hover:bg-white/5 transition-all" onClick={() => setIsOpen(false)}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs">🔗</span>
              Standaard Onepage
            </Link>
            <Link to="/uitgebreid" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-white hover:bg-white/5 transition-all" onClick={() => setIsOpen(false)}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs">⚡</span>
              Uitgebreid Platform
            </Link>
            <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-white hover:bg-white/5 transition-all" onClick={() => setIsOpen(false)}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs">🎨</span>
              Demo Showcase
            </Link>
          </div>

          {/* CTA bottom */}
          {ctaHref && ctaLabel && (
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5 bg-[#0d0e20]">
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all" onClick={() => setIsOpen(false)}>
                {ctaLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
