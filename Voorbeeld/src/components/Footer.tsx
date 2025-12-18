import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = [
  {
    title: 'Snelle Links',
    links: [
      { name: 'Home', url: '#home' },
      { name: 'Over Ons', url: '#about' },
      { name: 'Diensten', url: '#services' },
      { name: 'Gallerij', url: '#gallery' },
      { name: 'Recensies', url: '#testimonials' },
      { name: 'Contact', url: '#contact' }
    ]
  },
  {
    title: 'Diensten',
    links: [
      { name: 'Klassieke Knipbeurt', url: '#services' },
      { name: 'Skin Fade', url: '#services' },
      { name: 'Baard Styling', url: '#services' },
      { name: 'Hot Towel Scheerbeurt', url: '#services' },
      { name: 'Vader & Zoon', url: '#services' },
      { name: 'Haar & Baard Combo', url: '#services' }
    ]
  },
  {
    title: 'Juridisch',
    links: [
      { name: 'Privacybeleid', url: '#' },
      { name: 'Algemene Voorwaarden', url: '#' },
      { name: 'Cookiebeleid', url: '#' },
      { name: 'FAQ', url: '#' }
    ]
  }
];

const socialLinks = [
  { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com' },
  { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://facebook.com' },
  { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 pb-8 border-b border-gray-800 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Scissors size={32} className="text-amber-500 mr-2" />
              <span className="text-2xl font-bold font-serif">Nova Barber</span>
            </div>
            <p className="mb-6 text-gray-400 max-w-sm">
              Nova Barber is meer dan een barbershop – het is een premium verzorgingservaring waar traditie innovatie ontmoet. Onze meester-barbiers combineren klassieke technieken met moderne stijlen.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors duration-300 bg-gray-800 rounded-full hover:bg-amber-600 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Volg ons op ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="mb-4 text-lg font-bold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}
                      className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 text-center text-gray-400">
          <p>© {currentYear} Nova Barber. Alle rechten voorbehouden.</p>
          <p className="mt-2 text-sm">
            Met precisie ontworpen voor de moderne gentleman.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;