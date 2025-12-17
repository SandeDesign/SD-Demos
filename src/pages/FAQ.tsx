import React from 'react';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Veelgestelde Vragen</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Afspraken & Reserveringen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Hoe kan ik een afspraak maken?</h3>
                <p className="text-gray-700">
                  U kunt een afspraak maken via onze online boekingstool, telefonisch op (123) 456-7890, of door langs te komen in de salon.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Wat is het annuleringsbeleid?</h3>
                <p className="text-gray-700">
                  We verzoeken u om afspraken minimaal 24 uur van tevoren te annuleren. Bij niet tijdig annuleren kunnen we genoodzaakt zijn de gereserveerde tijd in rekening te brengen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Kan ik zonder afspraak langskomen?</h3>
                <p className="text-gray-700">
                  Wij werken bij voorkeur op afspraak om u de beste service te kunnen garanderen. Bij beschikbaarheid kunnen we u ook zonder afspraak helpen.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Diensten & Prijzen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Wat is bij de prijs inbegrepen?</h3>
                <p className="text-gray-700">
                  Al onze knipbeurten zijn inclusief consultatie, wassen en styling. Extra diensten zoals een baard trim worden apart berekend.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Welke betaalmethoden accepteren jullie?</h3>
                <p className="text-gray-700">
                  Wij accepteren pin, contant geld en de meeste creditcards.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Over Onze Service</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Hoe lang duurt een gemiddelde behandeling?</h3>
                <p className="text-gray-700">
                  Een standaard knipbeurt duurt ongeveer 45 minuten. Voor specifieke behandelingen kunt u de tijdsduur vinden bij onze diensten.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Gebruiken jullie professionele producten?</h3>
                <p className="text-gray-700">
                  Ja, wij werken uitsluitend met hoogwaardige professionele producten om de beste resultaten te garanderen.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Contact & Locatie</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Waar zijn jullie gevestigd?</h3>
                <p className="text-gray-700">
                  U vindt ons op Barbierstraat 123, 1234 AB Amsterdam. We zijn goed bereikbaar met zowel auto als openbaar vervoer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Is er parkeergelegenheid?</h3>
                <p className="text-gray-700">
                  Ja, er is voldoende (betaald) parkeren beschikbaar in de directe omgeving van de salon.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQ;