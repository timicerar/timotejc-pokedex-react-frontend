export const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type Theme = (typeof Themes)[keyof typeof Themes];

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};
