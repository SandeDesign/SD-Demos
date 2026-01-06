// Multi-page demo exports
export { RestaurantProDemo, restaurantProConfig } from './restaurant-pro';
export { FashionStoreDemo, fashionStoreConfig } from './fashion-store';
export { HotelBookingDemo, hotelBookingConfig } from './hotel-booking';
export { FitnessPortalDemo, fitnessPortalConfig } from './fitness-portal';
export { BlogMagazineDemo, blogMagazineConfig } from './blog-magazine';
export { SaasDashboardDemo, saasDashboardConfig } from './saas-dashboard';
export { LearnHubDemo } from './learn-hub';
export { TravelScapeDemo } from './travel-scape';
export { AutoVaultDemo } from './auto-vault';

// Multi-page demo configurations
export const multiPageDemos = [
  {
    id: 'restaurant-pro',
    title: 'Restaurant met Bestelsysteem',
    description: 'Uitgebreide restaurant website met online menu, bestellen en reserveringssysteem',
    features: ['Online Bestellen', 'Reserveringssysteem', 'Menukaart', 'Contact Formulier'],
    icon: '🍽️',
    color: 'from-amber-600 to-amber-700',
    path: '/demo/restaurant-pro',
  },
  {
    id: 'fashion-store',
    title: 'Fashion E-commerce',
    description: 'Complete webshop met product catalogus, winkelwagen en checkout functionaliteit',
    features: ['Product Catalogus', 'Winkelwagen', 'Filters & Zoeken', 'Checkout Proces'],
    icon: '👗',
    color: 'from-purple-600 to-pink-600',
    path: '/demo/fashion-store',
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking Systeem',
    description: 'Professioneel hotelboekingssysteem met kamers, beschikbaarheid en online reserveren',
    features: ['Kamer Selectie', 'Datum Picker', 'Real-time Booking', 'Faciliteiten Overzicht'],
    icon: '🏨',
    color: 'from-amber-800 to-amber-600',
    path: '/demo/hotel-booking',
  },
  {
    id: 'fitness-portal',
    title: 'Fitness Ledenportaal',
    description: 'Complete fitness portal met lesrooster, online boeken en lidmaatschapsbeheer',
    features: ['Lesrooster', 'Online Boeken', 'Lidmaatschappen', 'Trainer Profielen'],
    icon: '💪',
    color: 'from-red-600 to-red-500',
    path: '/demo/fitness-portal',
  },
  {
    id: 'blog-magazine',
    title: 'Professional Blog/Magazine',
    description: 'Modern blog platform met artikelen, categorieën, auteurs en zoekfunctionaliteit',
    features: ['Artikel Overzicht', 'Categorieën', 'Zoekfunctie', 'Auteur Pagina'],
    icon: '📰',
    color: 'from-blue-600 to-purple-600',
    path: '/demo/blog-magazine',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard Platform',
    description: 'Moderne analytics dashboard met team management, API keys en billing',
    features: ['Real-time Analytics', 'Team Management', 'API Key Beheer', 'Billing System'],
    icon: '📊',
    color: 'from-indigo-600 to-purple-600',
    path: '/demo/saas-dashboard',
  },
  {
    id: 'learn-hub',
    title: 'LearnHub - Online Leerplatform',
    description: 'Modern e-learning platform met cursussen, voortgang tracking en certificaten',
    features: ['Video Cursussen', 'Progress Tracking', 'Quizzes', 'Certificaten'],
    icon: '📚',
    color: 'from-indigo-600 to-purple-600',
    path: '/demo/learn-hub',
  },
  {
    id: 'travel-scape',
    title: 'TravelScape - Reis Booking',
    description: 'Uitgebreide reisplatform met bestemmingen, packages en online boeken',
    features: ['Destination Browser', 'Package Deals', 'Travel Search', 'Booking System'],
    icon: '✈️',
    color: 'from-teal-600 to-cyan-600',
    path: '/demo/travel-scape',
  },
  {
    id: 'auto-vault',
    title: 'AutoVault - Auto Dealership',
    description: 'Premium autodealership met auto catalogus, specs vergelijken en proefritten',
    features: ['Auto Catalogus', 'Spec Vergelijking', '360° Views', 'Proefrit Boeken'],
    icon: '🚗',
    color: 'from-red-600 to-red-800',
    path: '/demo/auto-vault',
  },
];
