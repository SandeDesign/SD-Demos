export type PresetName = 'editorial' | 'brutalist' | 'soft' | 'corporate' | 'artisan' | 'playful';

export type HeroLayout = 'fulltext-left' | 'split-image' | 'fullbleed-image' | 'centered-bold' | 'diagonal' | 'overlay-text';
export type NavStyle = 'minimal-transparent' | 'solid-bar' | 'pill-centered' | 'colorblock';
export type CardStyle = 'borderless' | 'outlined-thick' | 'soft-shadow' | 'subtle-border' | 'filled-accent';
export type ServicesLayout = 'grid-cards' | 'list-horizontal' | 'timeline';
export type GalleryLayout = 'uniform-grid' | 'masonry' | 'featured-first';
export type AboutLayout = 'image-right' | 'fullbleed-bg';
export type FooterLayout = 'dark-full' | 'minimal-line';

export interface Preset {
  name: PresetName;
  fonts: { heading: string; body: string };
  heroLayout: HeroLayout;
  navStyle: NavStyle;
  cardStyle: CardStyle;
  servicesLayout: ServicesLayout;
  galleryLayout: GalleryLayout;
  aboutLayout: AboutLayout;
  footerLayout: FooterLayout;
  sectionSpacing: 'tight' | 'normal' | 'generous' | 'extreme';
  borderRadius: 'none' | 'sm' | 'md' | 'xl' | 'full';
  googleFontsUrl: string;
}

export const presets: Record<PresetName, Preset> = {
  editorial: {
    name: 'editorial',
    fonts: { heading: "'Playfair Display', serif", body: "'Source Serif 4', serif" },
    heroLayout: 'fulltext-left',
    navStyle: 'minimal-transparent',
    cardStyle: 'borderless',
    servicesLayout: 'list-horizontal',
    galleryLayout: 'featured-first',
    aboutLayout: 'image-right',
    footerLayout: 'minimal-line',
    sectionSpacing: 'extreme',
    borderRadius: 'none',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+4:wght@300;400;600&display=swap',
  },
  brutalist: {
    name: 'brutalist',
    fonts: { heading: "'Space Mono', monospace", body: "'IBM Plex Mono', monospace" },
    heroLayout: 'diagonal',
    navStyle: 'solid-bar',
    cardStyle: 'outlined-thick',
    servicesLayout: 'grid-cards',
    galleryLayout: 'uniform-grid',
    aboutLayout: 'fullbleed-bg',
    footerLayout: 'dark-full',
    sectionSpacing: 'tight',
    borderRadius: 'none',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@300;400;600&display=swap',
  },
  soft: {
    name: 'soft',
    fonts: { heading: "'Fraunces', serif", body: "'Nunito', sans-serif" },
    heroLayout: 'fullbleed-image',
    navStyle: 'pill-centered',
    cardStyle: 'soft-shadow',
    servicesLayout: 'grid-cards',
    galleryLayout: 'uniform-grid',
    aboutLayout: 'image-right',
    footerLayout: 'minimal-line',
    sectionSpacing: 'generous',
    borderRadius: 'xl',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700;900&family=Nunito:wght@300;400;600;700&display=swap',
  },
  corporate: {
    name: 'corporate',
    fonts: { heading: "'DM Sans', sans-serif", body: "'DM Sans', sans-serif" },
    heroLayout: 'split-image',
    navStyle: 'solid-bar',
    cardStyle: 'subtle-border',
    servicesLayout: 'timeline',
    galleryLayout: 'uniform-grid',
    aboutLayout: 'image-right',
    footerLayout: 'dark-full',
    sectionSpacing: 'normal',
    borderRadius: 'sm',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap',
  },
  artisan: {
    name: 'artisan',
    fonts: { heading: "'Cormorant Garamond', serif", body: "'Lato', sans-serif" },
    heroLayout: 'overlay-text',
    navStyle: 'minimal-transparent',
    cardStyle: 'borderless',
    servicesLayout: 'grid-cards',
    galleryLayout: 'masonry',
    aboutLayout: 'fullbleed-bg',
    footerLayout: 'dark-full',
    sectionSpacing: 'generous',
    borderRadius: 'md',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700&display=swap',
  },
  playful: {
    name: 'playful',
    fonts: { heading: "'Righteous', cursive", body: "'Quicksand', sans-serif" },
    heroLayout: 'centered-bold',
    navStyle: 'colorblock',
    cardStyle: 'filled-accent',
    servicesLayout: 'grid-cards',
    galleryLayout: 'featured-first',
    aboutLayout: 'image-right',
    footerLayout: 'minimal-line',
    sectionSpacing: 'normal',
    borderRadius: 'xl',
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Righteous&family=Quicksand:wght@300;400;500;600;700&display=swap',
  },
};
