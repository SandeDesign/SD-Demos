export interface DesignVariant {
  // Layout
  headerStyle: 'minimal' | 'bold' | 'glass' | 'split' | 'center' | 'industrial' | 'floating' | 'sidebar';
  navStyle: 'horizontal' | 'pills' | 'underline' | 'buttons' | 'dots' | 'vertical';

  // Typography
  fontFamily: string;
  fontWeight: 'light' | 'normal' | 'medium' | 'bold' | 'black';
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize';

  // Colors & Effects
  bgStyle: 'solid' | 'gradient' | 'glass' | 'pattern' | 'image';
  accentStyle: 'subtle' | 'bold' | 'neon' | 'pastel' | 'vibrant';
  shadowStyle: 'none' | 'soft' | 'hard' | 'neon' | 'layered';
  borderStyle: 'none' | 'thin' | 'thick' | 'dashed' | 'double';

  // Spacing & Shape
  spacing: 'compact' | 'normal' | 'spacious' | 'massive';
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';

  // Theme
  theme: 'light' | 'dark' | 'auto';
  vibe: 'professional' | 'playful' | 'elegant' | 'industrial' | 'minimal' | 'artistic' | 'tech' | 'organic';
}

export const designVariants: Record<string, { style1: DesignVariant; style2: DesignVariant }> = {
  kapper: {
    style1: {
      // Modern Geometric Salon
      headerStyle: 'minimal',
      navStyle: 'underline',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'bold',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'spacious',
      borderRadius: 'none',
      theme: 'light',
      vibe: 'minimal',
    },
    style2: {
      // Vintage Barbershop
      headerStyle: 'bold',
      navStyle: 'buttons',
      fontFamily: 'font-serif',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      bgStyle: 'pattern',
      accentStyle: 'vibrant',
      shadowStyle: 'hard',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'sm',
      theme: 'dark',
      vibe: 'artistic',
    },
  },

  restaurant: {
    style1: {
      // Fine Dining Elegant
      headerStyle: 'glass',
      navStyle: 'horizontal',
      fontFamily: 'font-serif',
      fontWeight: 'light',
      textTransform: 'capitalize',
      bgStyle: 'gradient',
      accentStyle: 'subtle',
      shadowStyle: 'layered',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'md',
      theme: 'dark',
      vibe: 'elegant',
    },
    style2: {
      // Casual Food Truck
      headerStyle: 'bold',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'black',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'vibrant',
      shadowStyle: 'hard',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'playful',
    },
  },

  fitness: {
    style1: {
      // Energetic Sports
      headerStyle: 'bold',
      navStyle: 'buttons',
      fontFamily: 'font-sans',
      fontWeight: 'black',
      textTransform: 'uppercase',
      bgStyle: 'gradient',
      accentStyle: 'neon',
      shadowStyle: 'neon',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'sm',
      theme: 'dark',
      vibe: 'industrial',
    },
    style2: {
      // Zen Yoga Minimal
      headerStyle: 'minimal',
      navStyle: 'dots',
      fontFamily: 'font-serif',
      fontWeight: 'light',
      textTransform: 'lowercase',
      bgStyle: 'solid',
      accentStyle: 'pastel',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'massive',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'organic',
    },
  },

  advocaat: {
    style1: {
      // Corporate Law
      headerStyle: 'split',
      navStyle: 'horizontal',
      fontFamily: 'font-serif',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'soft',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'none',
      theme: 'dark',
      vibe: 'professional',
    },
    style2: {
      // Modern Law Boutique
      headerStyle: 'glass',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'normal',
      textTransform: 'none',
      bgStyle: 'glass',
      accentStyle: 'bold',
      shadowStyle: 'layered',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'minimal',
    },
  },

  tandarts: {
    style1: {
      // Medical Clean
      headerStyle: 'minimal',
      navStyle: 'horizontal',
      fontFamily: 'font-sans',
      fontWeight: 'normal',
      textTransform: 'none',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'soft',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'md',
      theme: 'light',
      vibe: 'professional',
    },
    style2: {
      // Family Friendly
      headerStyle: 'floating',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'gradient',
      accentStyle: 'vibrant',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'playful',
    },
  },

  bouwbedrijf: {
    style1: {
      // Industrial Construction
      headerStyle: 'bold',
      navStyle: 'buttons',
      fontFamily: 'font-sans',
      fontWeight: 'black',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'bold',
      shadowStyle: 'hard',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'none',
      theme: 'dark',
      vibe: 'industrial',
    },
    style2: {
      // Modern Architecture
      headerStyle: 'minimal',
      navStyle: 'underline',
      fontFamily: 'font-sans',
      fontWeight: 'light',
      textTransform: 'lowercase',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'none',
      borderStyle: 'none',
      spacing: 'massive',
      borderRadius: 'sm',
      theme: 'light',
      vibe: 'minimal',
    },
  },

  schoonheid: {
    style1: {
      // Luxury Spa
      headerStyle: 'glass',
      navStyle: 'horizontal',
      fontFamily: 'font-serif',
      fontWeight: 'light',
      textTransform: 'capitalize',
      bgStyle: 'gradient',
      accentStyle: 'pastel',
      shadowStyle: 'layered',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'elegant',
    },
    style2: {
      // Natural Organic
      headerStyle: 'floating',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'normal',
      textTransform: 'lowercase',
      bgStyle: 'solid',
      accentStyle: 'pastel',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'organic',
    },
  },

  makelaar: {
    style1: {
      // Premium Real Estate
      headerStyle: 'split',
      navStyle: 'horizontal',
      fontFamily: 'font-serif',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'gradient',
      accentStyle: 'subtle',
      shadowStyle: 'layered',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'md',
      theme: 'dark',
      vibe: 'elegant',
    },
    style2: {
      // Modern PropTech
      headerStyle: 'glass',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'none',
      bgStyle: 'glass',
      accentStyle: 'bold',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'tech',
    },
  },

  fotograaf: {
    style1: {
      // Artistic Portfolio
      headerStyle: 'sidebar',
      navStyle: 'vertical',
      fontFamily: 'font-serif',
      fontWeight: 'bold',
      textTransform: 'none',
      bgStyle: 'solid',
      accentStyle: 'vibrant',
      shadowStyle: 'hard',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'none',
      theme: 'dark',
      vibe: 'artistic',
    },
    style2: {
      // Commercial Studio
      headerStyle: 'minimal',
      navStyle: 'underline',
      fontFamily: 'font-sans',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'none',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'sm',
      theme: 'light',
      vibe: 'professional',
    },
  },

  accountant: {
    style1: {
      // Corporate Financial
      headerStyle: 'split',
      navStyle: 'horizontal',
      fontFamily: 'font-serif',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'soft',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'none',
      theme: 'dark',
      vibe: 'professional',
    },
    style2: {
      // Startup Friendly
      headerStyle: 'floating',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'none',
      bgStyle: 'gradient',
      accentStyle: 'vibrant',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'playful',
    },
  },

  bloemist: {
    style1: {
      // Romantic Floral
      headerStyle: 'glass',
      navStyle: 'horizontal',
      fontFamily: 'font-serif',
      fontWeight: 'light',
      textTransform: 'capitalize',
      bgStyle: 'gradient',
      accentStyle: 'pastel',
      shadowStyle: 'layered',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'elegant',
    },
    style2: {
      // Modern Botanical
      headerStyle: 'minimal',
      navStyle: 'underline',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'lowercase',
      bgStyle: 'solid',
      accentStyle: 'bold',
      shadowStyle: 'none',
      borderStyle: 'none',
      spacing: 'massive',
      borderRadius: 'sm',
      theme: 'light',
      vibe: 'minimal',
    },
  },

  autogarage: {
    style1: {
      // Professional Workshop
      headerStyle: 'bold',
      navStyle: 'buttons',
      fontFamily: 'font-sans',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'bold',
      shadowStyle: 'hard',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'sm',
      theme: 'dark',
      vibe: 'industrial',
    },
    style2: {
      // Performance Tuning
      headerStyle: 'glass',
      navStyle: 'horizontal',
      fontFamily: 'font-sans',
      fontWeight: 'black',
      textTransform: 'uppercase',
      bgStyle: 'gradient',
      accentStyle: 'neon',
      shadowStyle: 'neon',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'lg',
      theme: 'dark',
      vibe: 'tech',
    },
  },

  yoga: {
    style1: {
      // Zen Minimal
      headerStyle: 'minimal',
      navStyle: 'dots',
      fontFamily: 'font-serif',
      fontWeight: 'light',
      textTransform: 'lowercase',
      bgStyle: 'solid',
      accentStyle: 'pastel',
      shadowStyle: 'none',
      borderStyle: 'none',
      spacing: 'massive',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'minimal',
    },
    style2: {
      // Energetic Flow
      headerStyle: 'floating',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'gradient',
      accentStyle: 'vibrant',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'playful',
    },
  },

  bakkerij: {
    style1: {
      // Traditional Bakery
      headerStyle: 'bold',
      navStyle: 'buttons',
      fontFamily: 'font-serif',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      bgStyle: 'pattern',
      accentStyle: 'vibrant',
      shadowStyle: 'soft',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'md',
      theme: 'light',
      vibe: 'artistic',
    },
    style2: {
      // Modern Patisserie
      headerStyle: 'glass',
      navStyle: 'horizontal',
      fontFamily: 'font-serif',
      fontWeight: 'light',
      textTransform: 'lowercase',
      bgStyle: 'gradient',
      accentStyle: 'pastel',
      shadowStyle: 'layered',
      borderStyle: 'none',
      spacing: 'spacious',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'elegant',
    },
  },

  dierenarts: {
    style1: {
      // Professional Clinic
      headerStyle: 'minimal',
      navStyle: 'horizontal',
      fontFamily: 'font-sans',
      fontWeight: 'normal',
      textTransform: 'none',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'soft',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'md',
      theme: 'light',
      vibe: 'professional',
    },
    style2: {
      // Playful Pet Care
      headerStyle: 'floating',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'solid',
      accentStyle: 'vibrant',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'playful',
    },
  },

  elektricien: {
    style1: {
      // Technical Industrial
      headerStyle: 'bold',
      navStyle: 'buttons',
      fontFamily: 'font-sans',
      fontWeight: 'black',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'neon',
      shadowStyle: 'neon',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'none',
      theme: 'dark',
      vibe: 'industrial',
    },
    style2: {
      // Smart Home Modern
      headerStyle: 'glass',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'none',
      bgStyle: 'glass',
      accentStyle: 'bold',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'tech',
    },
  },

  schilder: {
    style1: {
      // Artistic Creative
      headerStyle: 'sidebar',
      navStyle: 'vertical',
      fontFamily: 'font-serif',
      fontWeight: 'bold',
      textTransform: 'none',
      bgStyle: 'gradient',
      accentStyle: 'vibrant',
      shadowStyle: 'hard',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'sm',
      theme: 'light',
      vibe: 'artistic',
    },
    style2: {
      // Professional Contractor
      headerStyle: 'minimal',
      navStyle: 'underline',
      fontFamily: 'font-sans',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'soft',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'md',
      theme: 'light',
      vibe: 'professional',
    },
  },

  loodgieter: {
    style1: {
      // Industrial Plumbing
      headerStyle: 'bold',
      navStyle: 'buttons',
      fontFamily: 'font-sans',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      bgStyle: 'solid',
      accentStyle: 'bold',
      shadowStyle: 'hard',
      borderStyle: 'thick',
      spacing: 'compact',
      borderRadius: 'none',
      theme: 'dark',
      vibe: 'industrial',
    },
    style2: {
      // Modern Service
      headerStyle: 'glass',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'glass',
      accentStyle: 'bold',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'lg',
      theme: 'light',
      vibe: 'professional',
    },
  },

  tuinman: {
    style1: {
      // Natural Landscape
      headerStyle: 'floating',
      navStyle: 'pills',
      fontFamily: 'font-serif',
      fontWeight: 'normal',
      textTransform: 'lowercase',
      bgStyle: 'solid',
      accentStyle: 'pastel',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'spacious',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'organic',
    },
    style2: {
      // Modern Garden Design
      headerStyle: 'minimal',
      navStyle: 'underline',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'none',
      bgStyle: 'solid',
      accentStyle: 'bold',
      shadowStyle: 'none',
      borderStyle: 'none',
      spacing: 'massive',
      borderRadius: 'sm',
      theme: 'light',
      vibe: 'minimal',
    },
  },

  schoonmaak: {
    style1: {
      // Professional Cleaning
      headerStyle: 'split',
      navStyle: 'horizontal',
      fontFamily: 'font-sans',
      fontWeight: 'medium',
      textTransform: 'capitalize',
      bgStyle: 'solid',
      accentStyle: 'subtle',
      shadowStyle: 'soft',
      borderStyle: 'thin',
      spacing: 'spacious',
      borderRadius: 'md',
      theme: 'light',
      vibe: 'professional',
    },
    style2: {
      // Eco-Friendly
      headerStyle: 'floating',
      navStyle: 'pills',
      fontFamily: 'font-sans',
      fontWeight: 'normal',
      textTransform: 'lowercase',
      bgStyle: 'gradient',
      accentStyle: 'pastel',
      shadowStyle: 'soft',
      borderStyle: 'none',
      spacing: 'normal',
      borderRadius: 'full',
      theme: 'light',
      vibe: 'organic',
    },
  },
};

export function getDesignVariant(demoId: string, styleId: string): DesignVariant {
  const demo = designVariants[demoId];
  if (!demo) return designVariants.kapper.style1; // fallback

  return styleId === 'style-1' ? demo.style1 : demo.style2;
}
