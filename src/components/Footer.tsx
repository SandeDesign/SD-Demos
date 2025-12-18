import React from 'react';
import { useDemo } from '../context/DemoContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { demo, styleId } = useDemo();
  const isStyle2 = styleId === 'style-2';

  // Style 2: Minimal centered footer
  if (isStyle2) {
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          {/* Centered content */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and brand */}
            <div className="flex items-center justify-center mb-6 group">
              <span className="text-4xl mr-3 transition-transform group-hover:scale-110">{demo.icon}</span>
              <span className="text-3xl font-bold">{demo.name}</span>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {demo.description}
            </p>

            {/* Contact info in horizontal layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {demo.contact.address}
              </span>
              <span className="hidden md:block text-gray-600">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {demo.contact.phone}
              </span>
              <span className="hidden md:block text-gray-600">•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {demo.contact.email}
              </span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
              {demo.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Alle Demo's
              </Link>
            </div>

            {/* Divider */}
            <div className="w-24 h-1 rounded-full mx-auto mb-8" style={{ backgroundColor: demo.primaryColor }}></div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {demo.name}. Alle rechten voorbehouden.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Demo website door <span style={{ color: demo.primaryColor }} className="font-semibold">SandeDesign</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Style 1: Traditional grid footer
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 group">
              <span className="text-3xl mr-2 transition-transform group-hover:scale-110">{demo.icon}</span>
              <span className="text-2xl font-bold">{demo.name}</span>
            </div>
            <p className="mb-4 text-gray-400">{demo.description}</p>
            <p className="text-gray-400">{demo.tagline}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{demo.contact.address}</li>
              <li>{demo.contact.phone}</li>
              <li>{demo.contact.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              {demo.navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-all"
                >
                  ← Alle Demo's
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {demo.name}. Alle rechten voorbehouden.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Demo website door{' '}
            <span style={{ color: demo.primaryColor }}>
              SandeDesign
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
