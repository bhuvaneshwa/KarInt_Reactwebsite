import { useContext, createElement } from 'react';
import { ThemeContext } from './ThemeContext.js';

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Higher-order component for theme integration
export const withTheme = (Component) => {
  return function ThemedComponent(props) {
    const theme = useTheme();
    return createElement(Component, { ...props, theme });
  };
};