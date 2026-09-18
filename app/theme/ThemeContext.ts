import { createContext } from 'react';
import { Colors } from '~/constants/colors';
import { type ThemeContextType, Themes } from '~/theme/Theme.interface';

export const ThemeContext = createContext<ThemeContextType>({
  theme: Themes.LIGHT,
  setTheme: async () => {
    return;
  },
  toggleTheme: async () => {
    return;
  },
  cssVariable: Colors,
});
