import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 360,
      sm: 650,
      md: 900,
      xmd: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  colors: {
    primary: {
      main: '#4B0082',
      dark: '#3D065F',
      light: '#45108A',
    },
    secondary: {
      main: '#EB9D29',
      dark: '#C3922E',
      light: '#FAF1BA',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
      light: '#FDF4EC',
      accent: '#1e293b',
    },
    background: {
      default: '#d9dada',
      paper: '#ffffff',
      dark: '#111827',
    },
    gradient: {
      main: 'linear-gradient(135deg, #45108A, #3D065F, #200554)',
      goldGradient:
        'linear-gradient(to right, #C3922E, #FFFBCC, #FAF1BA, #EFD98E, #EED688, #EB9D29, #C3922E)',
      grayGradient:
        'linear-gradient(135deg, #FFFFFF, #f0f0f0, #C9CACB, #B6B7B9, #d0d1d2, #FBFBFB)',
    },
    success: {
      main: '#32854A',
    },
    blue: {
      main: '#1E40AF',
      dark: '#0f2a76',
      primary: '#2563EB',
      secondary: '#1843CE',
    },
    yellow: {
      main: '#facc15',
    },
    gray: {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '17.6px',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '20px',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '12px',
      lineHeight: 1.5,
    },
  },
  spacing: (factor) => `${8 * factor}px`,
  shape: {
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '12px',
      xlarge: '16px',
    },
  },
});

export default theme;
