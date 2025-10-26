# 🎨 KarInt Website Theme System

A comprehensive theme system for the KarInt React website with support for multiple themes, dark mode, and full customization.

## 🚀 Features

- **Multiple Themes**: Light, Dark, and Corporate themes
- **Theme Persistence**: Themes are saved to localStorage
- **System Theme Detection**: Automatically detects user's OS theme preference
- **CSS Custom Properties**: Dynamic theme switching with CSS variables
- **Tailwind Integration**: Extended Tailwind config with theme tokens
- **React Context**: Easy theme access throughout the app
- **TypeScript Ready**: Full type support (when needed)
- **Performance Optimized**: Minimal re-renders and efficient updates

## 📁 File Structure

```
src/theme/
├── index.js              # Main export file
├── theme.js              # Design tokens and theme definitions
├── ThemeContext.js       # React context
├── ThemeProvider.jsx     # Theme provider component
├── hooks.js              # Theme hooks and utilities
└── components.jsx        # Theme-aware components
```

## 🎯 Quick Start

### 1. Basic Setup (Already Done)

The theme system is already integrated into your app via `App.jsx`:

```jsx
import { ThemeProvider } from "./theme";

export default function App() {
  return (
    <ThemeProvider defaultThemeName="light">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### 2. Using the Theme Hook

```jsx
import { useTheme } from '../theme';

function MyComponent() {
  const { theme, themeName, toggleTheme, setTheme } = useTheme();
  
  return (
    <div style={{ backgroundColor: theme.colors.surface }}>
      <h1 style={{ color: theme.colors.textPrimary }}>
        Current theme: {themeName}
      </h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### 3. Using Theme-Aware CSS Classes

```jsx
// Use theme-aware Tailwind classes
<div className="bg-theme-surface text-theme-primary border-theme">
  <h2 className="text-theme-secondary">Themed Content</h2>
  <button className="btn-theme">Themed Button</button>
</div>
```

### 4. Using Theme Components

```jsx
import { ThemeBox, ThemeButton } from '../theme';

function MyComponent() {
  return (
    <ThemeBox variant="surface" className="p-6 rounded-lg">
      <h2>Themed Box</h2>
      <ThemeButton variant="primary" size="lg">
        Themed Button
      </ThemeButton>
    </ThemeBox>
  );
}
```

## 🎨 Available Themes

### Light Theme
- **Primary**: #f86a04 (Orange)
- **Background**: #ffffff (White)
- **Text**: #111827 (Dark Gray)
- **Surface**: #ffffff (White)

### Dark Theme  
- **Primary**: #f86a04 (Orange)
- **Background**: #030712 (Very Dark)
- **Text**: #f3f4f6 (Light Gray)
- **Surface**: #111827 (Dark)

### Corporate Theme
- **Primary**: #1e40af (Professional Blue)
- **Background**: #ffffff (White)
- **Text**: #0f172a (Dark)
- **Surface**: #ffffff (White)

## 🛠️ Customization

### Creating a Custom Theme

```jsx
import { createCustomTheme } from '../theme';

const myCustomTheme = createCustomTheme({
  primary: '#your-color',
  background: '#your-bg',
  // ... other colors
});
```

### Adding New Themes

Edit `src/theme/theme.js` to add new theme variants:

```js
export const themes = {
  light: { /* ... */ },
  dark: { /* ... */ },
  corporate: { /* ... */ },
  yourNewTheme: {
    name: 'yourNewTheme',
    colors: {
      primary: '#your-primary',
      // ... other colors
    },
    gradients: {
      // ... gradients
    }
  }
};
```

## 🎛️ Theme Controls

### Toggle Button
A theme toggle button is available in the Banner component:

```jsx
import ThemeToggle from './ThemeToggle';

<ThemeToggle />
```

### Theme Debugger (Development Only)
For development, use the theme debugger:

```jsx
import { ThemeDebugger } from '../theme';

// Add anywhere in your app during development
<ThemeDebugger />
```

## 🎨 CSS Custom Properties

The theme system automatically sets CSS custom properties:

```css
:root {
  --color-primary: #f86a04;
  --color-background: #ffffff;
  --color-text-primary: #111827;
  /* ... more variables */
}

.theme-dark {
  --color-primary: #f86a04;
  --color-background: #030712;
  --color-text-primary: #f3f4f6;
  /* ... dark theme overrides */
}
```

## 🔧 Tailwind Integration

Extended Tailwind classes available:

```css
/* Theme-aware colors */
bg-theme-primary
text-theme-primary
border-theme

/* Component classes */
btn-theme
btn-theme-secondary
card-theme
input-theme

/* Gradients */
bg-gradient-theme-primary
bg-gradient-theme-hero
```

## 📱 Responsive & Accessible

- **System Theme Detection**: Automatically detects OS dark/light preference
- **Smooth Transitions**: All theme changes are smoothly animated
- **Focus Indicators**: Proper focus styles for accessibility
- **High Contrast**: Corporate theme provides high contrast option
- **Print Styles**: Automatic light theme for printing

## 🔄 Migration Guide

### From Static Styles
Replace hardcoded colors with theme variables:

```jsx
// Before
<div className="bg-white text-black border-gray-200">

// After  
<div className="bg-theme-surface text-theme-primary border-theme">
```

### From Dark Mode Classes
Replace dark mode utilities with theme classes:

```jsx
// Before
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">

// After
<div className="bg-theme-surface text-theme-primary">
```

## 🐛 Troubleshooting

### Theme Not Applying
- Ensure `ThemeProvider` wraps your app
- Check if CSS custom properties are being set in DevTools
- Verify import paths are correct

### Flashing Themes
- Theme is saved to localStorage and restored on page load
- Initial theme detection happens in `useEffect`

### Build Issues
- Ensure all theme files are properly imported
- Check Tailwind config includes theme directory in content paths

## 🚀 Performance

- **Minimal Re-renders**: Only theme-consuming components re-render
- **CSS Variables**: Theme changes don't require style recalculation
- **Local Storage**: Theme preference persists across sessions
- **System Integration**: Respects user's OS theme preference

## 📚 API Reference

### useTheme Hook
```typescript
const {
  theme,           // Current theme object
  themeName,       // Current theme name string
  setTheme,        // Function to set theme by name
  toggleTheme,     // Function to toggle light/dark
  cycleTheme,      // Function to cycle through all themes
  availableThemes, // Array of available theme names
  isLight,         // Boolean for light theme
  isDark,          // Boolean for dark theme
  isCorporate      // Boolean for corporate theme
} = useTheme();
```

### Theme Object Structure
```typescript
interface Theme {
  name: string;
  colors: {
    primary: string;
    background: string;
    surface: string;
    textPrimary: string;
    // ... more colors
  };
  gradients: {
    primary: string;
    hero: string;
    // ... more gradients
  };
}
```

---

**Built with ❤️ for KarInt Website**