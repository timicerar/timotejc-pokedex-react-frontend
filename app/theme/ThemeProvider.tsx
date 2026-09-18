import type { PropsWithChildren } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { Colors } from '~/constants/colors';
import { ThemeContext } from '~/theme/ThemeContext';
import { type Theme, Themes } from '~/theme/theme.types';
import { getInitialTheme, storeTheme } from '~/theme/theme-storage';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    storeTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === Themes.DARK ? Themes.LIGHT : Themes.DARK;
      document.documentElement.setAttribute('data-theme', next);
      storeTheme(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, cssVariable: Colors }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
