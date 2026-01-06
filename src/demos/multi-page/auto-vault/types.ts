export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  images: string[];
  type: 'sedan' | 'suv' | 'sports' | 'electric' | 'luxury';
  condition: 'new' | 'used';
  mileage: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Benzine' | 'Diesel' | 'Elektrisch' | 'Hybrid';
  color: string;
  doors: number;
  seats: number;
  power: string;
  features: string[];
  description: string;
}
