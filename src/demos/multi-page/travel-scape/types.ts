export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  type: 'beach' | 'city' | 'nature' | 'adventure' | 'culture';
  highlights: string[];
  included: string[];
}

export interface Package {
  id: string;
  name: string;
  destination: string;
  image: string;
  price: number;
  duration: string;
  includes: string[];
  departure: string;
}
