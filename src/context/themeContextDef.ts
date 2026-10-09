import { createContext } from 'react';
import { ChromaticSpecimen } from '../data/chromaticThemes';

export interface ThemeContextType {
  activeTheme: string;
  setActiveTheme: (themeKey: string) => void;
  currentSpecimen: ChromaticSpecimen;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
