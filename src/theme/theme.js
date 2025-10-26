// Theme Configuration for KarInt Website
// This file contains all design tokens and theme variants

export const designTokens = {
  // Color Palette
  colors: {
    // Primary brand colors
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f86a04', // Main primary
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    
    // Secondary brand colors
    secondary: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#e65c00', // Main secondary
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },

    // Neutral colors
    neutral: {
      0: '#ffffff',
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },

    // Functional colors
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
    
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
    },
    
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
    
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },

  // Spacing
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },
};

// Theme Variants
export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: designTokens.colors.primary[500],
      primaryHover: designTokens.colors.primary[600],
      primaryLight: designTokens.colors.primary[100],
      secondary: designTokens.colors.secondary[500],
      secondaryHover: designTokens.colors.secondary[600],
      
      // Background colors
      background: designTokens.colors.neutral[0],
      backgroundSecondary: designTokens.colors.neutral[50],
      backgroundTertiary: designTokens.colors.neutral[100],
      
      // Surface colors
      surface: designTokens.colors.neutral[0],
      surfaceHover: designTokens.colors.neutral[50],
      
      // Text colors
      textPrimary: designTokens.colors.neutral[900],
      textSecondary: designTokens.colors.neutral[600],
      textTertiary: designTokens.colors.neutral[500],
      textInverse: designTokens.colors.neutral[0],
      
      // Border colors
      border: designTokens.colors.neutral[200],
      borderHover: designTokens.colors.neutral[300],
      borderFocus: designTokens.colors.primary[500],
      
      // Functional colors
      success: designTokens.colors.success[500],
      warning: designTokens.colors.warning[500],
      error: designTokens.colors.error[500],
      info: designTokens.colors.info[500],
    },
    
    gradients: {
      primary: 'linear-gradient(135deg, #f86a04 0%, #e65c00 100%)',
      secondary: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      hero: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #030712 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
    },
  },

  dark: {
    name: 'dark',
    colors: {
      primary: designTokens.colors.primary[500],
      primaryHover: designTokens.colors.primary[400],
      primaryLight: designTokens.colors.primary[900],
      secondary: designTokens.colors.secondary[400],
      secondaryHover: designTokens.colors.secondary[300],
      
      // Background colors
      background: designTokens.colors.neutral[950],
      backgroundSecondary: designTokens.colors.neutral[900],
      backgroundTertiary: designTokens.colors.neutral[800],
      
      // Surface colors
      surface: designTokens.colors.neutral[900],
      surfaceHover: designTokens.colors.neutral[800],
      
      // Text colors
      textPrimary: designTokens.colors.neutral[100],
      textSecondary: designTokens.colors.neutral[300],
      textTertiary: designTokens.colors.neutral[400],
      textInverse: designTokens.colors.neutral[900],
      
      // Border colors
      border: designTokens.colors.neutral[700],
      borderHover: designTokens.colors.neutral[600],
      borderFocus: designTokens.colors.primary[500],
      
      // Functional colors
      success: designTokens.colors.success[400],
      warning: designTokens.colors.warning[400],
      error: designTokens.colors.error[400],
      info: designTokens.colors.info[400],
    },
    
    gradients: {
      primary: 'linear-gradient(135deg, #f86a04 0%, #fb923c 100%)',
      secondary: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
      hero: 'linear-gradient(135deg, #030712 0%, #111827 50%, #1f2937 100%)',
      card: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
    },
  },

  corporate: {
    name: 'corporate',
    colors: {
      primary: '#1e40af', // Professional blue
      primaryHover: '#1d4ed8',
      primaryLight: '#dbeafe',
      secondary: '#059669', // Professional green
      secondaryHover: '#047857',
      
      // Background colors
      background: designTokens.colors.neutral[0],
      backgroundSecondary: '#f8fafc',
      backgroundTertiary: '#f1f5f9',
      
      // Surface colors
      surface: designTokens.colors.neutral[0],
      surfaceHover: '#f8fafc',
      
      // Text colors
      textPrimary: '#0f172a',
      textSecondary: '#475569',
      textTertiary: '#64748b',
      textInverse: designTokens.colors.neutral[0],
      
      // Border colors
      border: '#e2e8f0',
      borderHover: '#cbd5e1',
      borderFocus: '#1e40af',
      
      // Functional colors
      success: designTokens.colors.success[500],
      warning: designTokens.colors.warning[500],
      error: designTokens.colors.error[500],
      info: '#1e40af',
    },
    
    gradients: {
      primary: 'linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)',
      secondary: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      hero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    },
  },
};

// Component Styles
export const componentStyles = {
  button: {
    base: {
      borderRadius: designTokens.borderRadius.lg,
      fontWeight: designTokens.typography.fontWeight.medium,
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
    },
    
    sizes: {
      sm: {
        padding: `${designTokens.spacing[2]} ${designTokens.spacing[3]}`,
        fontSize: designTokens.typography.fontSize.sm[0],
        lineHeight: designTokens.typography.fontSize.sm[1].lineHeight,
      },
      md: {
        padding: `${designTokens.spacing[2.5]} ${designTokens.spacing[4]}`,
        fontSize: designTokens.typography.fontSize.base[0],
        lineHeight: designTokens.typography.fontSize.base[1].lineHeight,
      },
      lg: {
        padding: `${designTokens.spacing[3]} ${designTokens.spacing[6]}`,
        fontSize: designTokens.typography.fontSize.lg[0],
        lineHeight: designTokens.typography.fontSize.lg[1].lineHeight,
      },
    },
    
    variants: {
      primary: (theme) => ({
        backgroundColor: theme.colors.primary,
        color: theme.colors.textInverse,
        '&:hover': {
          backgroundColor: theme.colors.primaryHover,
          transform: 'translateY(-1px)',
          boxShadow: designTokens.boxShadow.md,
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      }),
      
      secondary: (theme) => ({
        backgroundColor: 'transparent',
        color: theme.colors.textPrimary,
        border: `1px solid ${theme.colors.border}`,
        '&:hover': {
          backgroundColor: theme.colors.surfaceHover,
          borderColor: theme.colors.borderHover,
        },
      }),
      
      ghost: (theme) => ({
        backgroundColor: 'transparent',
        color: theme.colors.textSecondary,
        '&:hover': {
          backgroundColor: theme.colors.surfaceHover,
          color: theme.colors.textPrimary,
        },
      }),
    },
  },

  card: {
    base: {
      borderRadius: designTokens.borderRadius['2xl'],
      boxShadow: designTokens.boxShadow.sm,
      border: '1px solid',
      transition: 'all 0.2s ease-in-out',
    },
    
    variants: {
      default: (theme) => ({
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        '&:hover': {
          boxShadow: designTokens.boxShadow.md,
          transform: 'translateY(-2px)',
        },
      }),
      
      elevated: (theme) => ({
        backgroundColor: theme.colors.surface,
        borderColor: 'transparent',
        boxShadow: designTokens.boxShadow.lg,
        '&:hover': {
          boxShadow: designTokens.boxShadow.xl,
          transform: 'translateY(-4px)',
        },
      }),
    },
  },

  input: {
    base: {
      borderRadius: designTokens.borderRadius.md,
      fontSize: designTokens.typography.fontSize.base[0],
      lineHeight: designTokens.typography.fontSize.base[1].lineHeight,
      padding: `${designTokens.spacing[2.5]} ${designTokens.spacing[3]}`,
      border: '1px solid',
      transition: 'all 0.2s ease-in-out',
      outline: 'none',
    },
    
    variants: {
      default: (theme) => ({
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        color: theme.colors.textPrimary,
        '&:focus': {
          borderColor: theme.colors.borderFocus,
          boxShadow: `0 0 0 3px ${theme.colors.primary}20`,
        },
        '&::placeholder': {
          color: theme.colors.textTertiary,
        },
      }),
    },
  },
};

// Animation presets
export const animations = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  
  fadeInUp: {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  
  fadeInDown: {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  
  slideInLeft: {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  
  slideInRight: {
    from: { opacity: 0, transform: 'translateX(20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  
  scaleIn: {
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
  
  bounce: {
    '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
    '40%, 43%': { transform: 'translate3d(0,-30px,0)' },
    '70%': { transform: 'translate3d(0,-15px,0)' },
    '90%': { transform: 'translate3d(0,-4px,0)' },
  },
  
  pulse: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.5 },
  },
  
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

// Export default theme
export const defaultTheme = themes.light;

// Theme utilities
export const getTheme = (themeName = 'light') => {
  return themes[themeName] || themes.light;
};

export const createCustomTheme = (customColors) => {
  return {
    ...themes.light,
    colors: {
      ...themes.light.colors,
      ...customColors,
    },
  };
};