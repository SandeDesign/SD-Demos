export const fashionStoreConfig = {
  id: 'fashion-store',
  name: 'LUXE Fashion',
  tagline: 'Premium Fashion voor Iedereen',
  description: 'Complete e-commerce platform met product catalogus, winkelwagen en checkout systeem',
  type: 'multi-page' as const,

  // Branding
  colors: {
    primary: '#1F2937',
    primaryHover: '#111827',
    primaryLight: '#F3F4F6',
    secondary: '#9333EA',
    accent: '#EC4899',
  },

  // Contact
  contact: {
    address: 'P.C. Hooftstraat 45, 1071 Amsterdam',
    phone: '+31 20 987 6543',
    email: 'info@luxefashion.nl',
    hours: {
      weekday: '10:00 - 19:00',
      weekend: '11:00 - 18:00',
    }
  },

  // Navigation
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Collecties', path: '/collections' },
    { label: 'Over Ons', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],

  // Product Categories
  categories: [
    { id: 'all', name: 'Alles', icon: '👗' },
    { id: 'dresses', name: 'Jurken', icon: '👗' },
    { id: 'tops', name: 'Tops & Shirts', icon: '👕' },
    { id: 'bottoms', name: 'Broeken & Rokken', icon: '👖' },
    { id: 'outerwear', name: 'Jassen & Coats', icon: '🧥' },
    { id: 'accessories', name: 'Accessoires', icon: '👜' },
    { id: 'shoes', name: 'Schoenen', icon: '👠' },
  ],

  // Products
  products: [
    {
      id: 'dress-001',
      name: 'Elegante Zomer Jurk',
      category: 'dresses',
      price: 89.99,
      originalPrice: 129.99,
      description: 'Luchtige katoenen jurk perfect voor zomerdagen. Met verstelbare bandjes en elastische taille.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&h=1000&fit=crop',
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blauw', 'Roze', 'Wit'],
      inStock: true,
      featured: true,
      new: true,
      rating: 4.8,
      reviews: 127,
    },
    {
      id: 'jacket-001',
      name: 'Leather Biker Jacket',
      category: 'outerwear',
      price: 249.99,
      description: 'Stijlvolle leren jas van hoge kwaliteit. Tijdloos design met moderne details.',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Zwart', 'Bruin'],
      inStock: true,
      featured: true,
      bestseller: true,
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 'top-001',
      name: 'Silk Blouse Premium',
      category: 'tops',
      price: 69.99,
      description: '100% zijden blouse met elegante pasvorm. Perfect voor werk of speciale gelegenheden.',
      image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&h=1000&fit=crop',
      ],
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Wit', 'Ivoor', 'Champagne'],
      inStock: true,
      rating: 4.7,
      reviews: 64,
    },
    {
      id: 'jeans-001',
      name: 'High Waist Jeans',
      category: 'bottoms',
      price: 79.99,
      originalPrice: 99.99,
      description: 'Klassieke high waist jeans met perfecte pasvorm. Duurzaam geproduceerd premium denim.',
      image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&h=1000&fit=crop',
      ],
      sizes: ['26', '27', '28', '29', '30', '31', '32'],
      colors: ['Dark Blue', 'Light Blue', 'Black'],
      inStock: true,
      bestseller: true,
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 'bag-001',
      name: 'Leather Shoulder Bag',
      category: 'accessories',
      price: 149.99,
      description: 'Handgemaakte leren schoudertas. Ruim en stijlvol met meerdere compartimenten.',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=1000&fit=crop',
      ],
      sizes: ['One Size'],
      colors: ['Cognac', 'Zwart', 'Taupe'],
      inStock: true,
      featured: true,
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 'shoes-001',
      name: 'Ankle Boots Premium',
      category: 'shoes',
      price: 179.99,
      description: 'Luxe leren enkellaarzen met comfortabele hak. Perfect voor elk seizoen.',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1000&fit=crop',
      ],
      sizes: ['36', '37', '38', '39', '40', '41'],
      colors: ['Zwart', 'Bruin'],
      inStock: true,
      new: true,
      rating: 4.7,
      reviews: 92,
    },
    {
      id: 'dress-002',
      name: 'Evening Gown Luxe',
      category: 'dresses',
      price: 299.99,
      description: 'Spectaculaire avondjurk voor speciale gelegenheden. Exclusief design met perfecte pasvorm.',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1000&fit=crop',
      ],
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Zwart', 'Navy', 'Bordeaux'],
      inStock: true,
      featured: true,
      rating: 5.0,
      reviews: 45,
    },
    {
      id: 'coat-001',
      name: 'Wool Coat Classic',
      category: 'outerwear',
      price: 329.99,
      description: 'Tijdloze wollen jas van premium kwaliteit. Warm en elegant voor de koude dagen.',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Camel', 'Grijs', 'Navy'],
      inStock: true,
      rating: 4.9,
      reviews: 78,
    },
  ],

  // Collections
  collections: [
    {
      id: 'spring-2024',
      name: 'Spring Collection 2024',
      description: 'Verse kleuren en luchtige materialen voor het nieuwe seizoen',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
      productIds: ['dress-001', 'top-001', 'jeans-001'],
    },
    {
      id: 'bestsellers',
      name: 'Onze Bestsellers',
      description: 'De meest geliefde items van onze klanten',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop',
      productIds: ['jacket-001', 'jeans-001', 'dress-002'],
    },
  ],

  // Features
  features: [
    { icon: '🚚', title: 'Gratis Verzending', description: 'Bij bestellingen boven €50' },
    { icon: '↩️', title: '30 Dagen Retour', description: 'Niet tevreden? Geld terug' },
    { icon: '✨', title: 'Premium Kwaliteit', description: 'Alleen de beste materialen' },
    { icon: '🔒', title: 'Veilig Betalen', description: 'SSL beveiligde checkout' },
  ],

  // Reviews
  reviews: [
    {
      id: 1,
      author: 'Lisa van Dam',
      rating: 5,
      date: '1 week geleden',
      comment: 'Geweldige kwaliteit! De jurk past perfect en het materiaal voelt luxe aan.',
      productId: 'dress-001',
      verified: true,
    },
    {
      id: 2,
      author: 'Mark Janssen',
      rating: 5,
      date: '2 weken geleden',
      comment: 'Snelle levering en product precies zoals beschreven. Zeker een aanrader!',
      productId: 'jacket-001',
      verified: true,
    },
  ],

  // About
  about: {
    title: 'Over LUXE Fashion',
    story: 'Sinds 2015 brengen we premium fashion naar Nederland. Onze missie is om hoogwaardige, tijdloze mode toegankelijk te maken voor iedereen die kwaliteit waardeert.',
    mission: 'We geloven in duurzame productie, eerlijke prijzen en uitzonderlijke klantenservice. Elk item wordt zorgvuldig geselecteerd om te voldoen aan onze hoge kwaliteitseisen.',
  }
};

export type FashionStoreConfig = typeof fashionStoreConfig;
