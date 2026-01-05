import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ShoppingCart } from 'lucide-react';
import { restaurantProConfig } from '../config';

interface HeaderProps {
  cartItemCount?: number;
}

export const Header = ({ cartItemCount = 0 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const config = restaurantProConfig;
  const baseUrl = '/demo/restaurant-pro';

  const isActive = (path: string) => {
    const fullPath = baseUrl + path;
    return location.pathname === fullPath;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={`tel:${config.contact.phone}`} className="flex items-center gap-2 hover:text-amber-200 transition">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{config.contact.phone}</span>
              </a>
              <a href={`mailto:${config.contact.email}`} className="flex items-center gap-2 hover:text-amber-200 transition">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">{config.contact.email}</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span className="text-amber-100">Ma-Vr: {config.contact.hours.weekday} | Za-Zo: {config.contact.hours.weekend}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={baseUrl} className="text-2xl md:text-3xl font-bold text-amber-700 hover:text-amber-600 transition">
            {config.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {config.navigation.map((link) => (
              <Link
                key={link.path}
                to={baseUrl + link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-700 border-b-2 border-amber-700'
                    : 'text-gray-700 hover:text-amber-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={`${baseUrl}/order`}
              className="relative p-2 text-gray-700 hover:text-amber-700 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-amber-700 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {config.navigation.map((link) => (
                <Link
                  key={link.path}
                  to={baseUrl + link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-amber-700 border-l-4 border-amber-700 pl-4'
                      : 'text-gray-700 hover:text-amber-700 pl-4'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={`${baseUrl}/order`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 font-medium text-gray-700 hover:text-amber-700 pl-4 py-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Winkelwagen ({cartItemCount})
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
