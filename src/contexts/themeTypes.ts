import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export type PrimaryColor = 'cyan' | 'gold' | 'emerald' | 'coral' | 'violet';

export interface ColorOption {
  name: PrimaryColor;
  label: string;
  primary: string;
  hover: string;
  // RGB values for alpha compositing
  rgb: string;
}

export interface ThemeContextType {
  theme: Theme;
  primaryColor: PrimaryColor;
  toggleTheme: () => void;
  setPrimaryColor: (color: PrimaryColor) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
