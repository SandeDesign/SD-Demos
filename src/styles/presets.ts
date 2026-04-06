export type PresetName =
  | 'editorial' | 'brutalist' | 'soft' | 'corporate'
  | 'artisan' | 'playful' | 'magazine' | 'retro'
  | 'luxe' | 'tech' | 'organic' | 'bold';

export interface Preset {
  name: PresetName;
  fonts: { heading: string; body: string };
  googleFontsUrl: string;
}

export const presets: Record<PresetName, Preset> = {
  editorial: {
    name: 'editorial',
    fonts: { heading: "'Playfair Display', serif", body: "'Source Serif 4', serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+4:wght@300;400;600&display=swap',
  },
  brutalist: {
    name: 'brutalist',
    fonts: { heading: "'Space Mono', monospace", body: "'IBM Plex Mono', monospace" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@300;400;600&display=swap',
  },
  soft: {
    name: 'soft',
    fonts: { heading: "'Fraunces', serif", body: "'Nunito', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700;900&family=Nunito:wght@300;400;600;700&display=swap',
  },
  corporate: {
    name: 'corporate',
    fonts: { heading: "'DM Sans', sans-serif", body: "'DM Sans', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap',
  },
  artisan: {
    name: 'artisan',
    fonts: { heading: "'Cormorant Garamond', serif", body: "'Lato', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700&display=swap',
  },
  playful: {
    name: 'playful',
    fonts: { heading: "'Righteous', cursive", body: "'Quicksand', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Righteous&family=Quicksand:wght@300;400;500;600;700&display=swap',
  },
  magazine: {
    name: 'magazine',
    fonts: { heading: "'Bebas Neue', sans-serif", body: "'Inter', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap',
  },
  retro: {
    name: 'retro',
    fonts: { heading: "'Abril Fatface', serif", body: "'Karla', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Karla:wght@300;400;500;600;700&display=swap',
  },
  luxe: {
    name: 'luxe',
    fonts: { heading: "'Cinzel', serif", body: "'Raleway', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Raleway:wght@300;400;500;600&display=swap',
  },
  tech: {
    name: 'tech',
    fonts: { heading: "'Orbitron', sans-serif", body: "'Exo 2', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Exo+2:wght@300;400;500;600&display=swap',
  },
  organic: {
    name: 'organic',
    fonts: { heading: "'Josefin Sans', sans-serif", body: "'Libre Franklin', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Libre+Franklin:wght@300;400;500;600&display=swap',
  },
  bold: {
    name: 'bold',
    fonts: { heading: "'Anton', sans-serif", body: "'Work Sans', sans-serif" },
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@300;400;500;600;700&display=swap',
  },
};
