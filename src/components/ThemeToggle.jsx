import { useState } from 'react';
import { useTheme } from '../theme';

export const ThemeToggle = () => {
  const { theme, themeName, toggleTheme, cycleTheme, availableThemes } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const themeIcons = {
    light: '☀️',
    dark: '🌙',
    corporate: '🏢',
  };

  const themeLabels = {
    light: 'Light',
    dark: 'Dark', 
    corporate: 'Corporate',
  };

  return (
    <div className="relative">
      {/* Quick Toggle Button */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105"
        style={{
          backgroundColor: theme.colors.surfaceHover,
          color: theme.colors.textPrimary,
          border: `1px solid ${theme.colors.border}`,
        }}
        title={`Switch to ${themeName === 'light' ? 'dark' : 'light'} theme`}
      >
        <span className="text-lg">{themeIcons[themeName]}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {themeLabels[themeName]}
        </span>
      </button>

      {/* Advanced Dropdown (optional) */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="ml-1 p-2 rounded-lg transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.colors.surfaceHover,
            color: theme.colors.textSecondary,
            border: `1px solid ${theme.colors.border}`,
          }}
          title="More theme options"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showDropdown && (
          <div
            className="absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-lg z-50"
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
            }}
          >
            {availableThemes.map((name) => (
              <button
                key={name}
                onClick={() => {
                  cycleTheme();
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-left transition-colors duration-200"
                style={{
                  color: themeName === name ? theme.colors.primary : theme.colors.textPrimary,
                  backgroundColor: themeName === name ? `${theme.colors.primary}10` : 'transparent',
                }}
              >
                <span className="text-lg">{themeIcons[name]}</span>
                <span className="font-medium">{themeLabels[name]}</span>
                {themeName === name && (
                  <span className="ml-auto text-xs">✓</span>
                )}
              </button>
            ))}
            
            <hr style={{ borderColor: theme.colors.border, margin: '8px 0' }} />
            
            <div className="px-4 py-2 text-xs" style={{ color: theme.colors.textTertiary }}>
              Theme persists across sessions
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
};

export default ThemeToggle;