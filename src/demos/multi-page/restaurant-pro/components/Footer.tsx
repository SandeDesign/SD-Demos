import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { restaurantProConfig } from '../config';

export const Footer = () => {
  const config = restaurantProConfig;
  const baseUrl = '/demo/restaurant-pro';

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">{config.name}</h3>
            <p className="text-gray-300 mb-4">
              {config.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Ervaar culinaire perfectie in het hart van Amsterdam
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Snelle Links</h4>
            <ul className="space-y-2">
              {config.navigation.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link
                    to={baseUrl + link.path}
                    className="text-gray-300 hover:text-amber-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{config.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href={`tel:${config.contact.phone}`} className="text-gray-300 hover:text-amber-400 transition">
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${config.contact.email}`} className="text-gray-300 hover:text-amber-400 transition">
                  {config.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Openingstijden</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Maandag - Vrijdag</p>
                  <p className="text-amber-400 font-semibold">{config.contact.hours.weekday}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Zaterdag - Zondag</p>
                  <p className="text-amber-400 font-semibold">{config.contact.hours.weekend}</p>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-amber-400">Volg Ons</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-amber-400 transition" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {config.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition">
                Privacy Beleid
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition">
                Algemene Voorwaarden
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition">
                Cookie Beleid
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
