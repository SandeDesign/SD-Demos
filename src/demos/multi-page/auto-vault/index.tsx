import { useState } from 'react';
import {
  Car as CarIcon, Gauge, Fuel, Settings, Heart,
  ChevronLeft, ChevronRight, Check, X, Filter
} from 'lucide-react';
import { BackButton } from '../../../components/BackButton';
import { autoVaultConfig } from './config';
import { Car } from './types';

export const AutoVaultDemo = () => {
  const config = autoVaultConfig;
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [compareMode, setCompareMode] = useState(false);
  const [compareList, setCompareList] = useState<Car[]>([]);

  const filteredCars = config.cars.filter(car =>
    selectedType === 'all' || car.type === selectedType
  );

  const toggleCompare = (car: Car) => {
    if (compareList.find(c => c.id === car.id)) {
      setCompareList(compareList.filter(c => c.id !== car.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, car]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <BackButton />

      {/* Top Bar */}
      <div className="border-b border-gray-700/50 bg-black/40 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                <CarIcon className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{config.name}</h1>
                <p className="text-sm text-gray-400">{config.tagline}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCompareMode(!compareMode)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  compareMode
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Vergelijk ({compareList.length}/3)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition ${
              selectedType === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Alle Auto's
          </button>
          <button
            onClick={() => setSelectedType('sports')}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition ${
              selectedType === 'sports'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🏎️ Sports
          </button>
          <button
            onClick={() => setSelectedType('luxury')}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition ${
              selectedType === 'luxury'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            💎 Luxury
          </button>
          <button
            onClick={() => setSelectedType('suv')}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition ${
              selectedType === 'suv'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🚙 SUV
          </button>
          <button
            onClick={() => setSelectedType('electric')}
            className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition ${
              selectedType === 'electric'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            ⚡ Electric
          </button>
        </div>

        {/* Compare Mode */}
        {compareMode && compareList.length > 0 && (
          <div className="mb-8 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Vergelijk Auto's</h3>
              <button
                onClick={() => {
                  setCompareMode(false);
                  setCompareList([]);
                }}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compareList.map(car => (
                <div key={car.id} className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                  <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-32 object-cover rounded-lg mb-3" />
                  <h4 className="font-bold mb-2">{car.make} {car.model}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prijs:</span>
                      <span className="font-semibold text-red-400">€{car.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Vermogen:</span>
                      <span>{car.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Brandstof:</span>
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Transmissie:</span>
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCompare(car)}
                    className="w-full mt-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
                  >
                    Verwijder
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div
              key={car.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 cursor-pointer hover:-translate-y-2"
              onClick={() => setSelectedCar(car)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {car.condition === 'new' && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">
                      NIEUW
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompare(car);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                      compareList.find(c => c.id === car.id)
                        ? 'bg-red-600'
                        : 'bg-black/40 backdrop-blur-md hover:bg-black/60'
                    }`}
                  >
                    {compareList.find(c => c.id === car.id) ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <Settings className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/60 transition">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1">{car.make}</h3>
                  <p className="text-lg text-gray-200">{car.model}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <Gauge className="w-5 h-5 mx-auto mb-1 text-red-400" />
                    <p className="text-gray-400">Vermogen</p>
                    <p className="font-semibold">{car.power}</p>
                  </div>
                  <div className="text-center">
                    <Fuel className="w-5 h-5 mx-auto mb-1 text-red-400" />
                    <p className="text-gray-400">Brandstof</p>
                    <p className="font-semibold">{car.fuelType}</p>
                  </div>
                  <div className="text-center">
                    <Settings className="w-5 h-5 mx-auto mb-1 text-red-400" />
                    <p className="text-gray-400">Transmissie</p>
                    <p className="font-semibold text-xs">{car.transmission}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-sm text-gray-400">Vanaf</p>
                    <p className="text-3xl font-bold text-red-500">€{car.price.toLocaleString()}</p>
                  </div>
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl transition font-semibold">
                    Bekijk
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCar(null)}
        >
          <div
            className="bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Gallery */}
            <div className="relative h-96 bg-black">
              <img
                src={selectedCar.images[currentImageIndex]}
                alt={`${selectedCar.make} ${selectedCar.model}`}
                className="w-full h-full object-contain"
              />

              {selectedCar.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((currentImageIndex - 1 + selectedCar.images.length) % selectedCar.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % selectedCar.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition text-2xl"
              >
                ×
              </button>

              {/* Image Thumbnails */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedCar.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentImageIndex ? 'bg-red-600' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">{selectedCar.make} {selectedCar.model}</h2>
                  <p className="text-xl text-gray-400">{selectedCar.year} • {selectedCar.color}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">Prijs</p>
                  <p className="text-4xl font-bold text-red-500">€{selectedCar.price.toLocaleString()}</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-8">{selectedCar.description}</p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <Gauge className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm text-gray-400 mb-1">Vermogen</p>
                  <p className="text-xl font-bold">{selectedCar.power}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <Fuel className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm text-gray-400 mb-1">Brandstof</p>
                  <p className="text-xl font-bold">{selectedCar.fuelType}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <Settings className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm text-gray-400 mb-1">Transmissie</p>
                  <p className="text-lg font-bold">{selectedCar.transmission}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <CarIcon className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <p className="text-sm text-gray-400 mb-1">Kilometerstand</p>
                  <p className="text-xl font-bold">{selectedCar.mileage.toLocaleString()} km</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Uitrusting & Opties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-red-600 hover:bg-red-700 rounded-xl transition font-semibold text-lg">
                  Plan Proefrit
                </button>
                <button className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl transition font-semibold text-lg">
                  Vraag Informatie
                </button>
                <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl transition">
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
