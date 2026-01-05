import { useState } from 'react';
import { Calendar, Clock, Users, Star, Check, X, TrendingUp, Award } from 'lucide-react';
import { BackButton } from '../../../components/BackButton';
import { fitnessPortalConfig } from './config';

export const FitnessPortalDemo = () => {
  const config = fitnessPortalConfig;
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState<string | null>(null);

  const classData = selectedClass ? config.classes.find(c => c.id === selectedClass) : null;

  const handleBookClass = () => {
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setSelectedClass(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <BackButton />
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-500 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">{config.name}</h1>
          <p className="text-xl text-red-100 mt-2">{config.tagline}</p>
        </div>
      </header>

      {/* Hero Stats */}
      <section className="py-12 bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">1500+</div>
              <div className="text-gray-600">Actieve Leden</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Lessen per Week</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">800m²</div>
              <div className="text-gray-600">Fitness Space</div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Groepslessen Rooster</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Boek je favoriete les direct online</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.classes.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img src={classItem.image} alt={classItem.name} className="w-full h-full object-cover" />
                  {classItem.popular && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                      🔥 Populair
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{classItem.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{classItem.duration} min</span>
                    <span>•</span>
                    <TrendingUp className="w-4 h-4" />
                    <span>{classItem.difficulty}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{classItem.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Instructeur: {classItem.instructor}</p>
                    <p className="text-sm text-gray-600">Komende lessen:</p>
                    <div className="space-y-1 mt-2">
                      {classItem.schedule.slice(0, 2).map((slot, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-600">{slot.day} {slot.time}</span>
                          <span className={`font-semibold ${
                            slot.available < 5 ? 'text-red-600' : 'text-green-600'
                          }`}>
                            {slot.available}/{classItem.maxParticipants} vrij
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedClass(classItem.id)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    Boek Les
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Lidmaatschappen</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Kies het plan dat bij jou past</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {config.memberships.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                  plan.popular ? 'ring-4 ring-red-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                      MEEST GEKOZEN
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-5xl font-bold text-red-600">€{plan.price}</span>
                    <span className="text-gray-600 mb-2">/maand</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-3 ${
                        feature.startsWith('✗') ? 'text-gray-400' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{feature.startsWith('✓') ? '✓' : '✗'}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedMembership(plan.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Start Nu
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Onze Trainers</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {config.trainers.map((trainer, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img src={trainer.image} alt={trainer.name} className="w-full h-80 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                  <p className="text-red-600 font-semibold mb-2">{trainer.specialty}</p>
                  <p className="text-gray-600 text-sm">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Faciliteiten</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {config.facilities.map((facility, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-4xl mb-3">{facility.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{facility.name}</h3>
                <p className="text-xs text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Booking Modal */}
      {selectedClass && classData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8">
            {!booked ? (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{classData.name}</h2>
                    <p className="text-gray-600">Met {classData.instructor}</p>
                  </div>
                  <button onClick={() => setSelectedClass(null)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Kies een tijdslot:</h3>
                  <div className="space-y-3">
                    {classData.schedule.map((slot, idx) => (
                      <button
                        key={idx}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-red-600 transition text-left"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{slot.day} - {slot.time}</p>
                            <p className="text-sm text-gray-600">{classData.duration} minuten</p>
                          </div>
                          <div className={`font-semibold ${slot.available < 5 ? 'text-red-600' : 'text-green-600'}`}>
                            {slot.available} plekken vrij
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleBookClass}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
                >
                  Bevestig Boeking
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Les Geboekt!</h3>
                <p className="text-gray-600">Je hebt je plek gereserveerd voor {classData.name}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Membership Modal */}
      {selectedMembership && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="text-center">
              <Award className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Start Je Fitness Journey!</h3>
              <p className="text-gray-600 mb-6">
                Demo functionaliteit - In een echte implementatie zou hier een aanmeldingsformulier en betaling verschijnen.
              </p>
              <button
                onClick={() => setSelectedMembership(null)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Sluit Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{config.name}</h3>
          <p className="text-gray-400 mb-2">{config.contact.address}</p>
          <p className="text-gray-400 mb-6">{config.contact.phone}</p>
          <p className="text-gray-500 text-sm">
            © 2024 {config.name}. Fitness Portal met Lesrooster & Online Boeken.
          </p>
        </div>
      </footer>
    </div>
  );
};

export { fitnessPortalConfig } from './config';
