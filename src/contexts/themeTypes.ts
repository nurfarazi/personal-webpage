import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export type PrimaryColor = 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'pink';

export interface ColorOption {
  name: PrimaryColor;
  label: string;
  primary: string;
  hover: string;
}

export interface ThemeContextType {
  theme: Theme;
  primaryColor: PrimaryColor;
  toggleTheme: () => void;
  setPrimaryColor: (color: PrimaryColor) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);