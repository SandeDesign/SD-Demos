export const restaurantProConfig = {
  id: 'restaurant-pro',
  name: 'La Belle Cuisine',
  tagline: 'Fine Dining Experience',
  description: 'Ervaar culinaire perfectie met ons uitgebreide online reserverings- en bestelsysteem',
  type: 'multi-page' as const,

  // Branding
  colors: {
    primary: '#D4AF37',
    primaryHover: '#B4941F',
    primaryLight: '#F5E6C8',
    secondary: '#2C1810',
    accent: '#8B4513',
    background: '#FFF8F0',
    text: '#2C1810',
  },

  // Contact Info
  contact: {
    address: 'Prinsengracht 123, 1015 Amsterdam',
    phone: '+31 20 123 4567',
    email: 'info@labellecuisine.nl',
    hours: {
      weekday: '17:00 - 22:00',
      weekend: '12:00 - 23:00',
    }
  },

  // Navigation
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Online Bestellen', path: '/order' },
    { label: 'Reserveren', path: '/reservations' },
    { label: 'Over Ons', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],

  // Hero Section
  hero: {
    title: 'Welkom bij',
    highlight: 'La Belle Cuisine',
    subtitle: 'Waar passie en smaak samenkomen',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop',
    cta: 'Reserveer Nu',
    ctaSecondary: 'Bekijk Menu'
  },

  // Menu Categories
  menuCategories: [
    {
      id: 'starters',
      name: 'Voorgerechten',
      icon: '🥗',
      items: [
        {
          id: 'carpaccio',
          name: 'Carpaccio van Rundvlees',
          description: 'Dun gesneden runderhaas met truffelmayonaise, parmezaan en rucola',
          price: 14.50,
          allergens: ['Melk'],
          image: 'https://images.unsplash.com/photo-1625938145312-697d89978ae5?w=600&h=400&fit=crop',
          popular: true
        },
        {
          id: 'tartaar',
          name: 'Zalm Tartaar',
          description: 'Verse zalm met avocado, komkommer en sesamdressing',
          price: 16.50,
          allergens: ['Vis', 'Sesam'],
          image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=400&fit=crop'
        },
        {
          id: 'burrata',
          name: 'Burrata met Tomaat',
          description: 'Romige burrata met erfgoedtomaten, basilicum en balsamico',
          price: 13.50,
          allergens: ['Melk'],
          image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&h=400&fit=crop',
          vegetarian: true
        },
        {
          id: 'soup',
          name: 'Bisque van Kreeft',
          description: 'Romige kreeftensoep met cognac en verse kruiden',
          price: 12.50,
          allergens: ['Schaaldieren', 'Melk'],
          image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop'
        }
      ]
    },
    {
      id: 'mains',
      name: 'Hoofdgerechten',
      icon: '🍽️',
      items: [
        {
          id: 'beef',
          name: 'Tournedos Rossini',
          description: 'Ossenhaas met foie gras, truffeljus en aardappelgratin',
          price: 34.50,
          allergens: ['Melk'],
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop',
          popular: true,
          chefSpecial: true
        },
        {
          id: 'lamb',
          name: 'Gebraden Lamsrack',
          description: 'Kruidencrust met rozemarijn jus en seizoensgroenten',
          price: 32.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop'
        },
        {
          id: 'fish',
          name: 'Zeebaars met Saffraan',
          description: 'Gegrilde zeebaars met saffraansaus en venkel',
          price: 29.50,
          allergens: ['Vis'],
          image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=400&fit=crop',
          popular: true
        },
        {
          id: 'duck',
          name: 'Eendenborst met Kersen',
          description: 'Rosé gebakken eendenborst met kersensaus en pastinaak',
          price: 31.00,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?w=600&h=400&fit=crop'
        },
        {
          id: 'vegetarian',
          name: 'Risotto van Wilde Paddenstoelen',
          description: 'Cremige risotto met truffeolie en parmezaan',
          price: 24.50,
          allergens: ['Melk'],
          image: 'https://images.unsplash.com/photo-1476124369491-27ba4edc8acc?w=600&h=400&fit=crop',
          vegetarian: true
        },
        {
          id: 'lobster',
          name: 'Hele Kreeft Thermidor',
          description: 'Klassieke kreeft thermidor met champignonroomsaus',
          price: 42.50,
          allergens: ['Schaaldieren', 'Melk'],
          image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&h=400&fit=crop',
          chefSpecial: true
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Desserts',
      icon: '🍰',
      items: [
        {
          id: 'creme-brulee',
          name: 'Crème Brûlée',
          description: 'Klassieke vanille crème brûlée met verse frambozen',
          price: 9.50,
          allergens: ['Eieren', 'Melk'],
          image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=400&fit=crop',
          popular: true
        },
        {
          id: 'chocolate',
          name: 'Chocolade Fondant',
          description: 'Warme chocoladetaart met vloeibare kern en vanille-ijs',
          price: 10.50,
          allergens: ['Eieren', 'Melk', 'Gluten'],
          image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop',
          popular: true
        },
        {
          id: 'tarte-tatin',
          name: 'Tarte Tatin',
          description: 'Omgekeerde appeltaart met karamel en vanille-ijs',
          price: 9.00,
          allergens: ['Gluten', 'Melk'],
          image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop'
        },
        {
          id: 'tiramisu',
          name: 'Huisgemaakte Tiramisu',
          description: 'Klassieke Italiaanse tiramisu met mascarpone',
          price: 8.50,
          allergens: ['Eieren', 'Melk', 'Gluten'],
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop'
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Dranken',
      icon: '🍷',
      items: [
        {
          id: 'wine-red',
          name: 'Bordeaux Superieur',
          description: 'Château de La Croix - Frankrijk',
          price: 6.50,
          priceBottle: 32.00,
          allergens: ['Sulfiet'],
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop'
        },
        {
          id: 'wine-white',
          name: 'Chardonnay',
          description: 'Domaine Michel - Bourgogne',
          price: 7.00,
          priceBottle: 35.00,
          allergens: ['Sulfiet'],
          image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&h=400&fit=crop'
        },
        {
          id: 'champagne',
          name: 'Moët & Chandon',
          description: 'Brut Impérial Champagne',
          price: 12.00,
          priceBottle: 85.00,
          allergens: ['Sulfiet'],
          image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop'
        },
        {
          id: 'cocktail',
          name: 'Signature Cocktail',
          description: 'Onze huisspecial met gin, elderflower en komkommer',
          price: 11.50,
          allergens: [],
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop'
        }
      ]
    }
  ],

  // Restaurant Features
  features: [
    {
      icon: '🎯',
      title: 'Online Reserveren',
      description: 'Reserveer uw tafel eenvoudig online, 24/7 beschikbaar'
    },
    {
      icon: '🛵',
      title: 'Thuisbezorging',
      description: 'Geniet van ons menu thuis met snelle bezorging'
    },
    {
      icon: '👨‍🍳',
      title: 'Sterren Chef',
      description: 'Bereid door award-winning chef Jean-Pierre'
    },
    {
      icon: '🌱',
      title: 'Verse Ingrediënten',
      description: 'Dagelijks verse, biologische ingrediënten'
    },
    {
      icon: '🍷',
      title: 'Wijnkelder',
      description: 'Uitgebreide wijncollectie van over de hele wereld'
    },
    {
      icon: '🎉',
      title: 'Private Dining',
      description: 'Exclusieve ruimtes voor bijzondere gelegenheden'
    }
  ],

  // Time Slots for Reservations
  timeSlots: [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ],

  // Reviews
  reviews: [
    {
      id: 1,
      name: 'Sophie van der Berg',
      rating: 5,
      date: '2 weken geleden',
      text: 'Fantastische ervaring! Het eten was voortreffelijk en de service impeccabel. De tournedos was perfect bereid en het reserveringssysteem werkte vlekkeloos.',
      verified: true
    },
    {
      id: 2,
      name: 'Mark Janssen',
      rating: 5,
      date: '1 maand geleden',
      text: 'Beste restaurant in Amsterdam! Online bestellen is super handig en het eten komt warm en goed verpakt aan. Absoluut een aanrader!',
      verified: true
    },
    {
      id: 3,
      name: 'Emma de Vries',
      rating: 5,
      date: '3 weken geleden',
      text: 'Geweldige ambiance en heerlijk eten. De zeebaars met saffraan was hemels. Het online reserveren ging heel makkelijk.',
      verified: true
    }
  ],

  // About Info
  about: {
    title: 'Over La Belle Cuisine',
    story: 'Sinds 2010 brengen wij de authentieke Franse keuken naar Amsterdam. Chef Jean-Pierre combineert traditionele technieken met moderne creativiteit om unieke culinaire ervaringen te creëren.',
    mission: 'Onze missie is om elke gast een onvergetelijke gastronomische reis te bieden, met aandacht voor detail en passie voor perfectie.',
    awards: [
      '⭐ Michelin Ster 2023',
      '🏆 Best Restaurant Amsterdam 2024',
      '👨‍🍳 Chef of the Year 2022',
      '🍷 Wine Spectator Award'
    ]
  }
};

export type RestaurantConfig = typeof restaurantProConfig;
