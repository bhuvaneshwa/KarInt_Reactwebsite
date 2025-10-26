import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext.js';
import { themes, getTheme } from './theme.js';

// Theme Provider Component
export const ThemeProvider = ({ children, defaultThemeName = 'light' }) => {
  const [themeName, setThemeName] = useState(() => {
    // Try to get theme from localStorage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('kar-theme');
      if (savedTheme && themes[savedTheme]) {
        return savedTheme;
      }
    }
    return defaultThemeName;
  });

  const [theme, setTheme] = useState(() => getTheme(themeName));

  // Update theme when themeName changes
  useEffect(() => {
    const newTheme = getTheme(themeName);
    setTheme(newTheme);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('kar-theme', themeName);
    }
    
    // Apply CSS custom properties to document root
    applyThemeToDOM(newTheme);
  }, [themeName]);

  // Apply theme detection based on system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (e) => {
        // Only auto-switch if no theme is saved in localStorage
        const savedTheme = localStorage.getItem('kar-theme');
        if (!savedTheme) {
          setThemeName(e.matches ? 'dark' : 'light');
        }
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);
      
      // Set initial theme based on system preference if no saved theme
      const savedTheme = localStorage.getItem('kar-theme');
      if (!savedTheme) {
        setThemeName(mediaQuery.matches ? 'dark' : 'light');
      }

      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }
  }, []);

  // Function to apply theme variables to DOM
  const applyThemeToDOM = (currentTheme) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    
    // Apply color variables
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });
    
    // Apply gradient variables
    Object.entries(currentTheme.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--gradient-${key}`, value);
    });
    
    // Apply theme class to body
    document.body.className = document.body.className
      .replace(/theme-\w+/g, '')
      .concat(` theme-${currentTheme.name}`)
      .trim();
  };

  // Function to change theme
  const changeTheme = (newThemeName) => {
    if (themes[newThemeName]) {
      setThemeName(newThemeName);
    }
  };

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  // Function to cycle through all available themes
  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    changeTheme(themeKeys[nextIndex]);
  };

  const contextValue = {
    theme,
    themeName,
    setTheme: changeTheme,
    toggleTheme,
    cycleTheme,
    availableThemes: Object.keys(themes),
    isLight: themeName === 'light',
    isDark: themeName === 'dark',
    isCorporate: themeName === 'corporate',
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultThemeName: PropTypes.string,
};

export default ThemeProvider;