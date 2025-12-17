import React from 'react';

const AlgemeneVoorwaarden = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Algemeen</h2>
            <p className="text-gray-700 mb-4">
              Deze algemene voorwaarden zijn van toepassing op alle diensten van Nova Barber. Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Afspraken</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Afspraken kunnen worden gemaakt via onze website, telefonisch of in de salon</li>
              <li>Bij verhindering dient u de afspraak minimaal 24 uur van tevoren te annuleren</li>
              <li>Bij niet tijdig annuleren kunnen we genoodzaakt zijn de gereserveerde tijd in rekening te brengen</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Tarieven en Betaling</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Alle genoemde prijzen zijn inclusief BTW</li>
              <li>Betaling dient direct na de behandeling te geschieden</li>
              <li>Wij accepteren contante betalingen en pinbetalingen</li>
              <li>Prijswijzigingen voorbehouden</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Aansprakelijkheid</h2>
            <p className="text-gray-700 mb-4">
              Nova Barber is niet aansprakelijk voor schade, van welke aard ook, ontstaan doordat wij zijn uitgegaan van door u verstrekte onjuiste en/of onvolledige gegevens.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Klachten</h2>
            <p className="text-gray-700 mb-4">
              Wij streven naar 100% klanttevredenheid. Heeft u toch een klacht? Meld deze dan direct in de salon zodat wij deze kunnen verhelpen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-gray-700">
              Nova Barber<br />
              Barbierstraat 123<br />
              1234 AB Amsterdam<br />
              Tel: (123) 456-7890<br />
              E-mail: info@novabarber.nl
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlgemeneVoorwaarden;