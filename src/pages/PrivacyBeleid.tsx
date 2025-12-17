import React from 'react';

const PrivacyBeleid = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Privacybeleid</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Inleiding</h2>
            <p className="text-gray-700 mb-4">
              Nova Barber respecteert de privacy van alle gebruikers van haar website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Persoonsgegevens die wij verwerken</h2>
            <p className="text-gray-700 mb-4">
              Nova Barber verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Voor- en achternaam</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>IP-adres</li>
              <li>Gegevens over uw activiteiten op onze website</li>
              <li>Internetbrowser en apparaat type</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Met welk doel wij persoonsgegevens verwerken</h2>
            <p className="text-gray-700 mb-4">
              Nova Barber verwerkt uw persoonsgegevens voor de volgende doelen:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Het afhandelen van uw betaling</li>
              <li>U te kunnen bellen of e-mailen indien dit nodig is</li>
              <li>U te informeren over wijzigingen van onze diensten en producten</li>
              <li>U de mogelijkheid te bieden een account aan te maken</li>
              <li>Om goederen en diensten bij u af te leveren</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Hoe lang we persoonsgegevens bewaren</h2>
            <p className="text-gray-700 mb-4">
              Nova Barber bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Delen van persoonsgegevens met derden</h2>
            <p className="text-gray-700 mb-4">
              Nova Barber verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-gray-700 mb-4">
              Voor vragen over ons privacybeleid of vragen omtrent inzage en wijzigingen in (of verwijdering van) uw persoonsgegevens kunt u te allen tijde contact met ons opnemen via:
            </p>
            <p className="text-gray-700">
              E-mail: privacy@novabarber.nl<br />
              Telefoon: (123) 456-7890
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBeleid;