import { useEffect, useState, ReactNode, useCallback } from 'react';
import { Theme, PrimaryColor, ThemeContext } from './themeTypes';
import { colorOptions } from './colorOptions';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Applies the complete design system CSS variables based on the selected accent color.
 * This ensures all color-dependent styles update dynamically.
 */
const applyColorSystem = (colorName: PrimaryColor) => {
  const colorOption = colorOptions.find(option => option.name === colorName);
  if (!colorOption) return;

  const root = document.documentElement;

  // Core accent colors
  root.style.setProperty('--accent-color', colorOption.primary);
  root.style.setProperty('--accent-hover', colorOption.hover);
  root.style.setProperty('--accent-rgb', colorOption.rgb);

  // Generate alpha variants for the design system
  // These can be used as: rgba(var(--accent-rgb), 0.1)
  // Or directly as: var(--accent-5) for 5% opacity
  const alphaLevels = [5, 8, 10, 12, 14, 15, 18, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 95];
  alphaLevels.forEach(level => {
    root.style.setProperty(`--accent-${level}`, `rgba(${colorOption.rgb}, ${level / 100})`);
  });

  // Semantic color tokens for consistent usage across components
  root.style.setProperty('--accent-subtle', `rgba(${colorOption.rgb}, 0.08)`);
  root.style.setProperty('--accent-muted', `rgba(${colorOption.rgb}, 0.15)`);
  root.style.setProperty('--accent-soft', `rgba(${colorOption.rgb}, 0.25)`);
  root.style.setProperty('--accent-medium', `rgba(${colorOption.rgb}, 0.5)`);
  root.style.setProperty('--accent-strong', `rgba(${colorOption.rgb}, 0.85)`);

  // Glow and shadow tokens
  root.style.setProperty('--accent-glow-sm', `0 4px 12px rgba(${colorOption.rgb}, 0.15)`);
  root.style.setProperty('--accent-glow-md', `0 8px 24px rgba(${colorOption.rgb}, 0.25)`);
  root.style.setProperty('--accent-glow-lg', `0 16px 48px rgba(${colorOption.rgb}, 0.3)`);

  // Gradient tokens
  root.style.setProperty('--accent-gradient', `linear-gradient(135deg, ${colorOption.primary}, ${colorOption.hover})`);
  root.style.setProperty('--accent-gradient-subtle', `linear-gradient(135deg, rgba(${colorOption.rgb}, 0.15), rgba(${colorOption.rgb}, 0.05))`);
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return savedTheme;
  });

  const [primaryColor, setPrimaryColorState] = useState<PrimaryColor>(() => {
    const savedColor = localStorage.getItem('primaryColor') as PrimaryColor;
    // Validate saved color exists in options, fallback to 'cyan'
    const isValid = colorOptions.some(opt => opt.name === savedColor);
    return isValid ? savedColor : 'cyan';
  });

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  const setPrimaryColor = useCallback((color: PrimaryColor) => {
    setPrimaryColorState(color);
    localStorage.setItem('primaryColor', color);
  }, []);

  // Apply theme class to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  // Apply complete color system when primary color changes
  useEffect(() => {
    applyColorSystem(primaryColor);
  }, [primaryColor]);

  return (
    <ThemeContext.Provider value={{ theme, primaryColor, toggleTheme, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
