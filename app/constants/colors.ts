export const Colors = {
  foreground: 'var(--foreground)',
  'muted-foreground': 'var(--muted-foreground)',
  'card-foreground': 'var(--card-foreground)',
  primary: 'var(--primary)',
  'primary-foreground': 'var(--primary-foreground)',
  secondary: 'var(--secondary)',
  destructive: 'var(--destructive)',
  'accent-foreground': 'var(--accent-foreground)',
} as const;

export type ColorToken = keyof typeof Colors;
