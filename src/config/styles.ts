export interface StyleConfig {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  cardBackground: string;
  headerStyle: 'light' | 'dark' | 'gradient';
  heroOverlay: string;
  buttonStyle: 'rounded' | 'sharp' | 'pill';
  sectionSpacing: 'compact' | 'normal' | 'spacious';
}

export const getStyleConfig = (styleId: string, primaryColor: string): StyleConfig => {
  if (styleId === 'style-2') {
    // Style 2: Bold & Dynamic - Darker, more dramatic
    return {
      backgroundColor: '#111827', // Dark background
      textColor: '#f9fafb', // Light text
      accentColor: primaryColor,
      cardBackground: '#1f2937',
      headerStyle: 'dark',
      heroOverlay: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4))',
      buttonStyle: 'sharp',
      sectionSpacing: 'spacious',
    };
  }

  // Style 1: Modern & Minimalist - Light, clean default
  return {
    backgroundColor: '#ffffff',
    textColor: '#111827',
    accentColor: primaryColor,
    cardBackground: '#f9fafb',
    headerStyle: 'light',
    heroOverlay: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
    buttonStyle: 'rounded',
    sectionSpacing: 'normal',
  };
};

export const getStyleClasses = (styleId: string) => {
  if (styleId === 'style-2') {
    return {
      body: 'bg-gray-900 text-white',
      section: 'bg-gray-900',
      sectionAlt: 'bg-gray-800',
      card: 'bg-gray-800 border-gray-700',
      text: {
        primary: 'text-white',
        secondary: 'text-gray-300',
        muted: 'text-gray-400',
      },
      heading: 'text-white',
      button: {
        rounded: 'rounded-lg',
        shadow: 'shadow-xl shadow-purple-500/20',
      },
    };
  }

  // Style 1 classes
  return {
    body: 'bg-white text-gray-900',
    section: 'bg-white',
    sectionAlt: 'bg-gray-50',
    card: 'bg-white border-gray-200',
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      muted: 'text-gray-500',
    },
    heading: 'text-gray-900',
    button: {
      rounded: 'rounded-xl',
      shadow: 'shadow-lg',
    },
  };
};
