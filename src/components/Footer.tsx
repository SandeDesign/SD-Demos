import React from 'react';
import { useDemo } from '../context/DemoContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { demo } = useDemo();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-2">{demo.icon}</span>
              <span className="text-2xl font-bold">{demo.name}</span>
            </div>
            <p className="text-gray-400 mb-4">{demo.description}</p>
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
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  ← Alle Demo's
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {demo.name}. Alle rechten voorbehouden.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Demo website door <span style={{ color: demo.primaryColor }}>SandeDesign</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
