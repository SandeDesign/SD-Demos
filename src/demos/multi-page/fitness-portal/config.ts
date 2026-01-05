export const fitnessPortalConfig = {
  id: 'fitness-portal',
  name: 'FitLife Studio',
  tagline: 'Jouw Fitness, Onze Passie',
  description: 'Complete fitness portal met lesrooster, online boeken en lidmaatschapsbeheer',
  type: 'multi-page' as const,

  // Branding
  colors: {
    primary: '#EF4444',
    primaryHover: '#DC2626',
    accent: '#F59E0B',
  },

  // Contact
  contact: {
    address: 'Sportlaan 100, 1077 Amsterdam',
    phone: '+31 20 444 5555',
    email: 'info@fitlifestudio.nl',
  },

  // Classes
  classes: [
    {
      id: 'yoga',
      name: 'Power Yoga',
      instructor: 'Emma Bakker',
      duration: 60,
      difficulty: 'Beginner - Gevorderd',
      description: 'Dynamische yoga voor kracht en flexibiliteit',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      maxParticipants: 20,
      schedule: [
        { day: 'Maandag', time: '07:00', available: 15 },
        { day: 'Woensdag', time: '18:30', available: 8 },
        { day: 'Zaterdag', time: '10:00', available: 20 },
      ],
      popular: true,
    },
    {
      id: 'hiit',
      name: 'HIIT Training',
      instructor: 'Mike van Dijk',
      duration: 45,
      difficulty: 'Gevorderd',
      description: 'High Intensity Interval Training voor maximale resultaten',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      maxParticipants: 15,
      schedule: [
        { day: 'Dinsdag', time: '06:00', available: 5 },
        { day: 'Donderdag', time: '17:00', available: 12 },
        { day: 'Zaterdag', time: '09:00', available: 3 },
      ],
      popular: true,
    },
    {
      id: 'spinning',
      name: 'Spinning',
      instructor: 'Lisa de Jong',
      duration: 50,
      difficulty: 'Alle Niveaus',
      description: 'Intensieve cardio workout op de fiets',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=600&fit=crop',
      maxParticipants: 25,
      schedule: [
        { day: 'Maandag', time: '18:00', available: 10 },
        { day: 'Woensdag', time: '06:30', available: 18 },
        { day: 'Vrijdag', time: '17:30', available: 15 },
      ],
    },
    {
      id: 'pilates',
      name: 'Pilates',
      instructor: 'Sophie Martens',
      duration: 60,
      difficulty: 'Beginner - Gemiddeld',
      description: 'Core strengthening en body awareness',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
      maxParticipants: 18,
      schedule: [
        { day: 'Dinsdag', time: '09:00', available: 12 },
        { day: 'Donderdag', time: '19:00', available: 16 },
      ],
    },
    {
      id: 'boxing',
      name: 'Kickboxing',
      instructor: 'Tom Jansen',
      duration: 60,
      difficulty: 'Alle Niveaus',
      description: 'Techniek training en conditioning voor vechtsport',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop',
      maxParticipants: 20,
      schedule: [
        { day: 'Maandag', time: '19:00', available: 8 },
        { day: 'Woensdag', time: '20:00', available: 11 },
        { day: 'Vrijdag', time: '18:00', available: 14 },
      ],
    },
    {
      id: 'zumba',
      name: 'Zumba',
      instructor: 'Maria Rodriguez',
      duration: 55,
      difficulty: 'Alle Niveaus',
      description: 'Dans workout vol energie en plezier',
      image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800&h=600&fit=crop',
      maxParticipants: 30,
      schedule: [
        { day: 'Dinsdag', time: '18:00', available: 22 },
        { day: 'Donderdag', time: '18:00', available: 25 },
      ],
    },
  ],

  // Membership Plans
  memberships: [
    {
      id: 'basic',
      name: 'Basic',
      price: 29.99,
      features: [
        '✓ Toegang fitness area',
        '✓ 4 groepslessen per maand',
        '✓ Gratis WiFi',
        '✓ Kleedkamers & douches',
        '✗ Personal training',
        '✗ Sauna & Spa',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 49.99,
      features: [
        '✓ Onbeperkte toegang',
        '✓ Alle groepslessen',
        '✓ 2 Personal training sessies',
        '✓ Sauna & Spa toegang',
        '✓ Gratis handdoek service',
        '✓ Voedingsadvies',
      ],
      popular: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 79.99,
      features: [
        '✓ Alles van Premium',
        '✓ 4 Personal training sessies',
        '✓ Voedingsplan op maat',
        '✓ Gratis sportdrank',
        '✓ Prioriteit bij lessen',
        '✓ Exclusieve workshops',
      ],
    },
  ],

  // Trainers
  trainers: [
    {
      name: 'Mike van Dijk',
      specialty: 'HIIT & Strength',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
      bio: '10+ jaar ervaring in fitness training',
    },
    {
      name: 'Emma Bakker',
      specialty: 'Yoga & Mindfulness',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      bio: 'Gecertificeerd yoga instructor',
    },
    {
      name: 'Lisa de Jong',
      specialty: 'Spinning & Cardio',
      image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400&h=400&fit=crop',
      bio: 'Spinning specialist sinds 2018',
    },
  ],

  // Facilities
  facilities: [
    { icon: '🏋️', name: 'Weights Area', description: '300m² met premium equipment' },
    { icon: '🏃', name: 'Cardio Zone', description: '50+ moderne cardio machines' },
    { icon: '🧘', name: 'Studio Ruimtes', description: '3 studio\'s voor groepslessen' },
    { icon: '💆', name: 'Spa & Sauna', description: 'Ontspan na je workout' },
    { icon: '🥤', name: 'Juice Bar', description: 'Gezonde snacks en shakes' },
    { icon: '🚿', name: 'Luxe Kleedkamers', description: 'Modern en schoon' },
  ],
};

export type FitnessPortalConfig = typeof fitnessPortalConfig;
