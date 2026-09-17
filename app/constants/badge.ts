import { PokemonTypes } from '~/constants/pokemon-types';

export const BadgeVariants = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  OUTLINE: 'outline',
  ...PokemonTypes,
} as const;

export type BadgeVariant = (typeof BadgeVariants)[keyof typeof BadgeVariants];
