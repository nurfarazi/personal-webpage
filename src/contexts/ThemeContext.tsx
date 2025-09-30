import { useEffect, useState, ReactNode } from 'react';
import { Theme, PrimaryColor, ThemeContext } from './themeTypes';
import { colorOptions } from './colorOptions';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    // Check system preference if no saved theme
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return savedTheme;
  });

  const [primaryColor, setPrimaryColorState] = useState<PrimaryColor>(() => {
    const savedColor = localStorage.getItem('primaryColor') as PrimaryColor;
    return savedColor || 'blue';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const setPrimaryColor = (color: PrimaryColor) => {
    setPrimaryColorState(color);
    localStorage.setItem('primaryColor', color);
  };

  useEffect(() => {
    // Apply theme class to document element
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    // Apply primary color CSS variables
    const colorOption = colorOptions.find(option => option.name === primaryColor);
    if (colorOption) {
      document.documentElement.style.setProperty('--accent-color', colorOption.primary);
      document.documentElement.style.setProperty('--accent-hover', colorOption.hover);
    }
  }, [primaryColor]);

  return (
    <ThemeContext.Provider value={{ theme, primaryColor, toggleTheme, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};