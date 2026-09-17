export const StatColors = {
  HP: 'var(--stat-hp)',
  ATTACK: 'var(--stat-attack)',
  DEFENSE: 'var(--stat-defense)',
  SPECIAL_ATTACK: 'var(--stat-special-attack)',
  SPECIAL_DEFENSE: 'var(--stat-special-defense)',
  SPEED: 'var(--stat-speed)',
} as const;

export type StatColor = (typeof StatColors)[keyof typeof StatColors];

export const DEFAULT_STAT_MAX_VALUE = 255;
