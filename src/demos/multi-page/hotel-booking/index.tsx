import { useState } from 'react';
import { Calendar, Users, Star, Check, MapPin, Wifi, Coffee, Dumbbell } from 'lucide-react';
import { BackButton } from '../../../components/BackButton';
import { hotelBookingConfig } from './config';

export const HotelBookingDemo = () => {
  const config = hotelBookingConfig;
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleBooking = () => {
    setBookingComplete(true);
    setTimeout(() => {
      setBookingComplete(false);
      setSelectedRoom(null);
    }, 3000);
  };

  const room = selectedRoom ? config.rooms.find(r => r.id === selectedRoom) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <BackButton />
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{config.name}</h1>
          <p className="text-amber-200">{config.tagline}</p>
        </div>
      </header>

      {/* Hero with Booking Form */}
      <section className="relative -mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Reserveer Uw Kamer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  Gasten
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                >
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'gast' : 'gasten'}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition">
                  Zoek Beschikbaarheid
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Hotel Voorzieningen</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {config.hotelAmenities.map((amenity, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Onze Kamers & Suites</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Kies uit onze collectie van luxueuze accommodaties
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                  {room.featured && (
                    <span className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold">
                      ⭐ Featured
                    </span>
                  )}
                  {room.luxury && (
                    <span className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
                      👑 Luxury
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                      <p className="text-gray-600">{room.size}m² | Max {room.maxGuests} gasten</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-amber-600">€{room.price}</p>
                      <p className="text-sm text-gray-600">per nacht</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{room.description}</p>

                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Voorzieningen:</p>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 4 && (
                        <span className="text-amber-600 text-sm px-3 py-1">
                          +{room.amenities.length - 4} meer
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedRoom(room.id)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    Reserveer Nu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Gast Beoordelingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {config.reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {selectedRoom && room && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8">
            {!bookingComplete ? (
              <>
                <h2 className="text-3xl font-bold mb-6">{room.name}</h2>

                <div className="bg-amber-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Check-in</p>
                      <p className="font-semibold">{checkIn || 'Selecteer datum'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Check-out</p>
                      <p className="font-semibold">{checkOut || 'Selecteer datum'}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-lg font-semibold">Totaal</span>
                    <span className="text-3xl font-bold text-amber-600">€{room.price * 2}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Indicatief voor 2 nachten</p>
                </div>

                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Volledige naam"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email adres"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Telefoonnummer"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-600 focus:outline-none"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedRoom(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition"
                  >
                    Annuleer
                  </button>
                  <button
                    onClick={handleBooking}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    Bevestig Reservering
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Reservering Bevestigd!</h3>
                <p className="text-gray-600 mb-2">Bedankt voor uw boeking bij {config.name}</p>
                <p className="text-sm text-gray-500">U ontvangt een bevestigingsmail</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">{config.name}</h3>
              <p className="text-gray-400">{config.tagline}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                {config.contact.address}
              </p>
              <p className="text-gray-400 mt-2">{config.contact.phone}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <p className="text-gray-400">✓ Online Kamer Boeken</p>
              <p className="text-gray-400">✓ Real-time Beschikbaarheid</p>
              <p className="text-gray-400">✓ Direct Bevestiging</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2024 {config.name}. Hotel Booking Systeem Demo.
          </div>
        </div>
      </footer>
    </div>
  );
};

export { hotelBookingConfig } from './config';
