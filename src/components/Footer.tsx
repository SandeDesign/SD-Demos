import React from 'react';
import { useDemo } from '../context/DemoContext';
import { usePreset } from '../hooks/usePreset';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { demo } = useDemo();
  const preset = usePreset();

  const headingFont = { fontFamily: 'var(--font-heading)' };

  // --- MINIMAL-LINE: Simple, light background footer ---
  if (preset.footerLayout === 'minimal-line') {
    return (
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center group">
              <span className="text-2xl mr-2 transition-transform group-hover:scale-110">{demo.icon}</span>
              <span className="text-xl font-bold text-gray-900" style={headingFont}>{demo.name}</span>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {demo.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link to="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                Alle Demo's
              </Link>
            </nav>

            {/* Contact */}
            <div className="text-sm text-gray-500 text-center md:text-right">
              <p>{demo.contact.phone}</p>
              <p>{demo.contact.email}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {demo.name}. Alle rechten voorbehouden.</p>
            <p>Demo website door <span style={{ color: demo.primaryColor }} className="font-semibold">SandeDesign</span></p>
          </div>
        </div>
      </footer>
    );
  }

  // --- DARK-FULL (default): Traditional grid footer ---
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 group">
              <span className="text-3xl mr-2 transition-transform group-hover:scale-110">{demo.icon}</span>
              <span className="text-2xl font-bold" style={headingFont}>{demo.name}</span>
            </div>
            <p className="mb-4 text-gray-400">{demo.description}</p>
            <p className="text-gray-400">{demo.tagline}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={headingFont}>Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{demo.contact.address}</li>
              <li>{demo.contact.phone}</li>
              <li>{demo.contact.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={headingFont}>Links</h4>
            <ul className="space-y-2">
              {demo.navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-all">
                  ← Alle Demo's
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} {demo.name}. Alle rechten voorbehouden.</p>
          <p className="text-sm mt-2 text-gray-500">
            Demo website door <span style={{ color: demo.primaryColor }}>SandeDesign</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
