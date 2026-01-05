export const hotelBookingConfig = {
  id: 'hotel-booking',
  name: 'Grand Hotel Amsterdam',
  tagline: '5-Sterren Luxe in het Hart van de Stad',
  description: 'Compleet hotelboekingssysteem met kamerselectie, beschikbaarheid en online reserveren',
  type: 'multi-page' as const,

  // Branding
  colors: {
    primary: '#8B5A3C',
    primaryHover: '#6B4A2C',
    accent: '#D4AF37',
    background: '#F8F6F3',
  },

  // Contact
  contact: {
    address: 'Dam 1, 1012 Amsterdam',
    phone: '+31 20 555 0100',
    email: 'reservations@grandhotel.nl',
  },

  // Rooms
  rooms: [
    {
      id: 'deluxe-room',
      name: 'Deluxe Kamer',
      type: 'Deluxe',
      description: 'Luxueuze kamer met kingsize bed, marmeren badkamer en uitzicht op de gracht',
      price: 189,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop',
      ],
      maxGuests: 2,
      size: 32,
      amenities: ['Kingsize Bed', 'Grachtenzicht', 'Nespresso Machine', 'Regendouche', 'Gratis WiFi', 'Airconditioning'],
      popular: true,
    },
    {
      id: 'executive-suite',
      name: 'Executive Suite',
      type: 'Suite',
      description: 'Ruime suite met aparte woonkamer, balkon en spectaculair stadsgezicht',
      price: 349,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop',
      ],
      maxGuests: 3,
      size: 65,
      amenities: ['Aparte Woonkamer', 'Balkon', 'Stadsgezicht', 'Minibar', 'Butler Service', 'Premium Badproducten'],
      featured: true,
    },
    {
      id: 'standard-room',
      name: 'Standaard Kamer',
      type: 'Standard',
      description: 'Comfortabele kamer met alle voorzieningen voor een aangenaam verblijf',
      price: 129,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop',
      ],
      maxGuests: 2,
      size: 24,
      amenities: ['Queen Bed', 'Smart TV', 'Gratis WiFi', 'Werkruimte', 'Badkamer'],
    },
    {
      id: 'presidential-suite',
      name: 'Presidential Suite',
      type: 'Presidential',
      description: 'Ultieme luxe met panoramisch uitzicht, privé terras en persoonlijke concierge',
      price: 799,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop',
      ],
      maxGuests: 4,
      size: 120,
      amenities: ['2 Slaapkamers', 'Privé Terras', 'Jacuzzi', 'Persoonlijke Concierge', 'Champagne Bij Aankomst', 'Premium Alles'],
      featured: true,
      luxury: true,
    },
  ],

  // Amenities
  hotelAmenities: [
    { icon: '🍽️', title: 'Restaurant & Bar', description: 'Michelin-ster restaurant' },
    { icon: '💆', title: 'Spa & Wellness', description: '2000m² wellness centrum' },
    { icon: '🏊', title: 'Zwembad', description: 'Verwarmde binnenbaden' },
    { icon: '🏋️', title: 'Fitness', description: '24/7 moderne fitness' },
    { icon: '🚗', title: 'Parkeren', description: 'Valet parking service' },
    { icon: '👔', title: 'Business Center', description: 'Vergaderfaciliteiten' },
  ],

  // Reviews
  reviews: [
    {
      id: 1,
      author: 'Sarah de Jong',
      rating: 5,
      date: '1 week geleden',
      comment: 'Fantastisch hotel! Personeel was uiterst vriendelijk en de kamer was schitterend.',
      verified: true,
    },
    {
      id: 2,
      author: 'Michael Chen',
      rating: 5,
      date: '2 weken geleden',
      comment: 'Perfecte locatie en service. Het ontbijt was heerlijk. Absoluut een aanrader!',
      verified: true,
    },
  ],
};

export type HotelBookingConfig = typeof hotelBookingConfig;
