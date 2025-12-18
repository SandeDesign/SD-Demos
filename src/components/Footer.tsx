import React from 'react';
import { useDemo } from '../context/DemoContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { demo, styleId } = useDemo();
  const isStyle2 = styleId === 'style-2';

  return (
    <footer className={`${isStyle2 ? 'bg-black border-t border-purple-500/20' : 'bg-gray-900'} text-white py-12`}>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 group">
              <span className={`text-3xl mr-2 transition-transform group-hover:scale-110 ${isStyle2 ? 'drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]' : ''}`}>{demo.icon}</span>
              <span className="text-2xl font-bold">{demo.name}</span>
            </div>
            <p className={`mb-4 ${isStyle2 ? 'text-gray-300' : 'text-gray-400'}`}>{demo.description}</p>
            <p className={`${isStyle2 ? 'text-gray-400' : 'text-gray-400'}`}>{demo.tagline}</p>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-4 ${isStyle2 ? 'text-white' : ''}`}>Contact</h4>
            <ul className={`space-y-2 ${isStyle2 ? 'text-gray-300' : 'text-gray-400'}`}>
              <li className={isStyle2 ? 'hover:text-purple-400 transition-colors' : ''}>{demo.contact.address}</li>
              <li className={isStyle2 ? 'hover:text-purple-400 transition-colors' : ''}>{demo.contact.phone}</li>
              <li className={isStyle2 ? 'hover:text-purple-400 transition-colors' : ''}>{demo.contact.email}</li>
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-4 ${isStyle2 ? 'text-white' : ''}`}>Links</h4>
            <ul className="space-y-2">
              {demo.navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`transition-all ${
                      isStyle2
                        ? 'text-gray-300 hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className={`transition-all ${
                    isStyle2
                      ? 'text-gray-300 hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ← Alle Demo's
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-12 pt-8 text-center ${isStyle2 ? 'border-t border-purple-500/20' : 'border-t border-gray-800'}`}>
          <p className={isStyle2 ? 'text-gray-300' : 'text-gray-400'}>
            &copy; {new Date().getFullYear()} {demo.name}. Alle rechten voorbehouden.
          </p>
          <p className={`text-sm mt-2 ${isStyle2 ? 'text-gray-400' : 'text-gray-500'}`}>
            Demo website door{' '}
            <span
              style={{ color: demo.primaryColor }}
              className={isStyle2 ? 'drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]' : ''}
            >
              SandeDesign
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
