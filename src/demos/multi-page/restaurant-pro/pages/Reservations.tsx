import { useState } from 'react';
import { Calendar, Users, Clock, Check, AlertCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { restaurantProConfig } from '../config';
import { Reservation } from '../types';

export const Reservations = () => {
  const config = restaurantProConfig;
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [reservation, setReservation] = useState<Partial<Reservation>>({
    guests: 2,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleDateChange = (date: string) => {
    setReservation({ ...reservation, date });
  };

  const handleTimeSelect = (time: string) => {
    setReservation({ ...reservation, time });
    setStep(2);
  };

  const handleGuestsChange = (guests: number) => {
    setReservation({ ...reservation, guests });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate next 14 days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('nl-NL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center py-12 px-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Reservering Bevestigd!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Uw tafel is gereserveerd. We hebben een bevestigingsmail gestuurd naar <strong>{reservation.email}</strong>
            </p>

            <div className="bg-amber-50 rounded-xl p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Reservering Details</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">
                    {reservation.date && formatDisplayDate(reservation.date)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">{reservation.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">{reservation.guests} personen</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-blue-900 font-semibold">Belangrijk</p>
                  <p className="text-blue-800 text-sm mt-1">
                    Dit is een demo reservering. In een echte implementatie zou u een e-mailbevestiging ontvangen met alle details.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setReservation({ guests: 2 });
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Nieuwe Reservering Maken
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reserveer Uw Tafel
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Kies uw datum, tijd en aantal personen - wij zorgen voor de rest
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
            {[
              { num: 1, label: 'Datum & Tijd' },
              { num: 2, label: 'Gegevens' },
              { num: 3, label: 'Bevestiging' }
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center gap-3 ${step >= s.num ? 'text-amber-600' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {s.num}
                  </div>
                  <span className="hidden sm:inline font-semibold">{s.label}</span>
                </div>
                {idx < 2 && <div className={`w-12 md:w-24 h-1 mx-4 ${step > s.num ? 'bg-amber-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Step 1: Date & Time Selection */}
          {step === 1 && (
            <div className="space-y-8">
              {/* Number of Guests */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-7 h-7 text-amber-600" />
                  Aantal Personen
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <button
                      key={num}
                      onClick={() => handleGuestsChange(num)}
                      className={`px-6 py-3 rounded-full font-semibold transition ${
                        reservation.guests === num
                          ? 'bg-amber-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {num} {num === 1 ? 'persoon' : 'personen'}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Meer dan 8 personen? <span className="text-amber-600 font-semibold cursor-pointer hover:underline">Neem contact op</span> voor groepsreserveringen
                </p>
              </div>

              {/* Date Selection */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Calendar className="w-7 h-7 text-amber-600" />
                  Kies een Datum
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {getAvailableDates().map(date => {
                    const dateStr = formatDate(date);
                    const isSelected = reservation.date === dateStr;
                    const isToday = formatDate(new Date()) === dateStr;

                    return (
                      <button
                        key={dateStr}
                        onClick={() => handleDateChange(dateStr)}
                        className={`p-4 rounded-xl border-2 transition ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">
                            {date.toLocaleDateString('nl-NL', { weekday: 'short' })}
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            {date.getDate()}
                          </p>
                          <p className="text-sm text-gray-600">
                            {date.toLocaleDateString('nl-NL', { month: 'short' })}
                          </p>
                          {isToday && (
                            <span className="text-xs text-amber-600 font-semibold mt-1 block">
                              Vandaag
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {reservation.date && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Clock className="w-7 h-7 text-amber-600" />
                    Kies een Tijd
                  </h2>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {config.timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className="px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-amber-600 hover:bg-amber-50 transition font-semibold text-gray-900"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Contact Information */}
          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Uw Gegevens
              </h2>

              {/* Reservation Summary */}
              <div className="bg-amber-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Uw selectie:</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Datum:</strong> {reservation.date && formatDisplayDate(reservation.date)}</p>
                  <p><strong>Tijd:</strong> {reservation.time}</p>
                  <p><strong>Personen:</strong> {reservation.guests}</p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-amber-600 hover:text-amber-700 font-semibold mt-4 text-sm"
                >
                  ← Wijzig datum/tijd
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    required
                    value={reservation.name || ''}
                    onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition"
                    placeholder="Uw volledige naam"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={reservation.email || ''}
                    onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={reservation.phone || ''}
                    onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition"
                    placeholder="+31 6 12345678"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Speciale Verzoeken (optioneel)
                  </label>
                  <textarea
                    rows={4}
                    value={reservation.specialRequests || ''}
                    onChange={(e) => setReservation({ ...reservation, specialRequests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition resize-none"
                    placeholder="Bijv. vegetarisch menu, verjaardag, allergie informatie..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2"
                >
                  Bevestig Reservering
                  <Check className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
