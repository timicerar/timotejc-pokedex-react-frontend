import { createContext } from 'react';
import { type ThemeContextType, Themes } from '~/theme/theme.types';

export const ThemeContext = createContext<ThemeContextType>({
  theme: Themes.LIGHT,
  setTheme: async () => {
    return;
  },
  toggleTheme: async () => {
    return;
  },
});
