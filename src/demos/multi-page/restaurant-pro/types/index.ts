export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  priceBottle?: number;
  allergens: string[];
  image: string;
  popular?: boolean;
  vegetarian?: boolean;
  chefSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  specialRequests?: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
