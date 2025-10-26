import { createContext } from 'react';
import { defaultTheme, themes } from './theme.js';

// Create Theme Context
export const ThemeContext = createContext({
  theme: defaultTheme,
  themeName: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
  availableThemes: Object.keys(themes),
});