import PropTypes from 'prop-types';
import { useTheme } from './hooks.js';

// Utility component for theme debugging
export const ThemeDebugger = () => {
  const { theme, themeName, availableThemes, setTheme } = useTheme();
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: '8px',
        padding: '12px',
        fontSize: '12px',
        fontFamily: 'monospace',
        color: theme.colors.textPrimary,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        minWidth: '200px',
      }}
    >
      <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
        Theme Debugger
      </div>
      <div style={{ marginBottom: '8px' }}>
        Current: <strong>{themeName}</strong>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Switch Theme:
        </label>
        <select
          value={themeName}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            width: '100%',
            padding: '4px',
            borderRadius: '4px',
            border: `1px solid ${theme.colors.border}`,
            backgroundColor: theme.colors.background,
            color: theme.colors.textPrimary,
          }}
        >
          {availableThemes.map((name) => (
            <option key={name} value={name}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div style={{ fontSize: '10px', opacity: 0.7 }}>
        Primary: {theme.colors.primary}
      </div>
    </div>
  );
};

// Component for theme-aware styling
export const ThemeBox = ({ 
  children, 
  variant = 'default',
  className = '',
  style = {},
  ...props 
}) => {
  const { theme } = useTheme();
  
  const variants = {
    default: {
      backgroundColor: theme.colors.surface,
      color: theme.colors.textPrimary,
      border: `1px solid ${theme.colors.border}`,
    },
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.textInverse,
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.textInverse,
    },
    surface: {
      backgroundColor: theme.colors.backgroundSecondary,
      color: theme.colors.textPrimary,
    },
  };

  const variantStyles = variants[variant] || variants.default;

  return (
    <div
      className={className}
      style={{
        ...variantStyles,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ThemeBox.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'surface']),
  className: PropTypes.string,
  style: PropTypes.object,
};

// Theme-aware button component
export const ThemeButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  ...props 
}) => {
  const { theme } = useTheme();
  
  const variants = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.textInverse,
      border: 'none',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.colors.textPrimary,
      border: `1px solid ${theme.colors.border}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors.textSecondary,
      border: 'none',
    },
  };

  const sizes = {
    sm: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.625rem 1rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '0.75rem 1.5rem',
      fontSize: '1.125rem',
    },
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;

  return (
    <button
      className={className}
      style={{
        ...variantStyles,
        ...sizeStyles,
        borderRadius: '0.5rem',
        fontWeight: '500',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        outline: 'none',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

ThemeButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  style: PropTypes.object,
};