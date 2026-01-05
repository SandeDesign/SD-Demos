import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { restaurantProConfig } from '../config';
import { ContactForm } from '../types';

export const Contact = () => {
  const config = restaurantProConfig;
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Neem Contact Op
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Vragen, opmerkingen of speciale verzoeken? We horen graag van u
          </p>
        </div>
      </section>

      <div className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600">{config.contact.address}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(config.contact.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-semibold text-sm mt-2 inline-block"
                    >
                      Bekijk op kaart →
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Telefoon</h3>
                    <a
                      href={`tel:${config.contact.phone}`}
                      className="text-gray-600 hover:text-amber-600 transition"
                    >
                      {config.contact.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Ma-Vr: 10:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
                    <a
                      href={`mailto:${config.contact.email}`}
                      className="text-gray-600 hover:text-amber-600 transition break-all"
                    >
                      {config.contact.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Reactie binnen 24 uur
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 mb-3">Openingstijden</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maandag - Vrijdag</span>
                        <span className="font-semibold text-amber-600">
                          {config.contact.hours.weekday}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zaterdag - Zondag</span>
                        <span className="font-semibold text-amber-600">
                          {config.contact.hours.weekend}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Stuur Ons Een Bericht
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Bericht Verzonden!
                  </h3>
                  <p className="text-green-700">
                    Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition"
                        placeholder="Uw naam"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition"
                        placeholder="uw@email.nl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition"
                        placeholder="+31 6 12345678"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Onderwerp *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition"
                      >
                        <option value="">Kies een onderwerp</option>
                        <option value="reservation">Reservering</option>
                        <option value="catering">Catering</option>
                        <option value="private-dining">Private Dining</option>
                        <option value="complaint">Klacht</option>
                        <option value="compliment">Compliment</option>
                        <option value="other">Anders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition resize-none"
                      placeholder="Vertel ons waar we u mee kunnen helpen..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Verstuur Bericht
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Demo functionaliteit - bericht wordt niet echt verzonden
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.0791193929596!2d4.880439915749!3d52.37583597978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609e4c03c0b67%3A0x6ad557cfeb2ca5b7!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
