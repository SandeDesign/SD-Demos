import { useState } from 'react';
import {
  Search, MapPin, Calendar, Users, Star, Plane,
  Sun, Mountain, Building2, Compass, Heart, Check
} from 'lucide-react';
import { BackButton } from '../../../components/BackButton';
import { travelScapeConfig } from './config';
import { Destination } from './types';

export const TravelScapeDemo = () => {
  const config = travelScapeConfig;
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [travelers, setTravelers] = useState(2);

  const filteredDestinations = config.destinations.filter(dest => {
    const matchesType = selectedType === 'all' || dest.type === selectedType;
    const matchesSearch = searchTerm === '' ||
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'beach': return <Sun className="w-5 h-5" />;
      case 'city': return <Building2 className="w-5 h-5" />;
      case 'nature': return <Mountain className="w-5 h-5" />;
      case 'adventure': return <Compass className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <BackButton />

      {/* Hero Section with Search */}
      <div className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 text-center">
            {config.name}
          </h1>
          <p className="text-2xl text-white/90 mb-12 text-center">{config.tagline}</p>

          {/* Search Widget */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bestemming</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Waar wil je naartoe?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Datum</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reizigers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persoon' : 'personen'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition font-semibold text-lg shadow-lg">
              Zoek Reizen
            </button>
          </div>
        </div>
      </div>

      {/* Type Filters */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition flex items-center gap-2 ${
                selectedType === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Compass className="w-5 h-5" />
              Alle Bestemmingen
            </button>
            <button
              onClick={() => setSelectedType('beach')}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition flex items-center gap-2 ${
                selectedType === 'beach'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Sun className="w-5 h-5" />
              Strand & Zon
            </button>
            <button
              onClick={() => setSelectedType('city')}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition flex items-center gap-2 ${
                selectedType === 'city'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Steden
            </button>
            <button
              onClick={() => setSelectedType('nature')}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition flex items-center gap-2 ${
                selectedType === 'nature'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Mountain className="w-5 h-5" />
              Natuur
            </button>
            <button
              onClick={() => setSelectedType('adventure')}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition flex items-center gap-2 ${
                selectedType === 'adventure'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Compass className="w-5 h-5" />
              Avontuur
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Destinations Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Populaire Bestemmingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map(dest => (
              <div
                key={dest.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedDestination(dest)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition">
                    <Heart className="w-5 h-5 text-white" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(dest.type)}
                      <span className="text-white/90 text-sm capitalize">{dest.type}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">{dest.name}</h3>
                    <p className="text-white/90 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {dest.country}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900">{dest.rating}</span>
                      <span className="text-gray-500">({dest.reviews} reviews)</span>
                    </div>
                    <span className="text-sm text-teal-600 font-medium">{dest.duration}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{dest.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Vanaf</p>
                      <p className="text-3xl font-bold text-teal-600">€{dest.price}</p>
                    </div>
                    <button className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium">
                      Bekijk Reis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Deals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Package Deals</h2>
              <p className="text-gray-600">All-inclusive reizen met korting</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {config.packages.map(pkg => (
              <div key={pkg.id} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 border-2 border-teal-100 hover:border-teal-300 transition">
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {pkg.destination}
                </p>

                <div className="space-y-2 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-teal-600" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Vertrek: {pkg.departure}</span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-teal-200">
                  <div>
                    <p className="text-sm text-gray-600">Totaal vanaf</p>
                    <p className="text-3xl font-bold text-teal-600">€{pkg.price}</p>
                    <p className="text-xs text-gray-500">{pkg.duration}</p>
                  </div>
                  <button className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition font-medium">
                    Boek Nu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition text-white text-2xl"
              >
                ×
              </button>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium flex items-center gap-2 capitalize">
                    {getTypeIcon(selectedDestination.type)}
                    {selectedDestination.type}
                  </span>
                </div>
                <h2 className="text-5xl font-bold text-white mb-2">{selectedDestination.name}</h2>
                <p className="text-xl text-white/90 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {selectedDestination.country}
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{selectedDestination.rating}</p>
                  <p className="text-sm text-gray-500">{selectedDestination.reviews} reviews</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Calendar className="w-8 h-8 text-teal-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{selectedDestination.duration}</p>
                  <p className="text-sm text-gray-500">reis duur</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Plane className="w-8 h-8 text-cyan-600" />
                  </div>
                  <p className="text-3xl font-bold text-teal-600">€{selectedDestination.price}</p>
                  <p className="text-sm text-gray-500">per persoon</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Over deze reis</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{selectedDestination.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Hoogtepunten</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedDestination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-teal-50 rounded-xl p-4">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-900 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Inbegrepen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedDestination.included.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-teal-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:from-teal-700 hover:to-cyan-700 transition font-semibold text-lg shadow-lg">
                  Boek Voor €{selectedDestination.price}
                </button>
                <button className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-xl hover:bg-teal-50 transition font-semibold">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
