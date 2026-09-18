export const NotFoundTypes = {
  GENERIC: 'generic',
  POKEMON_LIST: 'pokemon-list',
  POKEMON_DETAILS: 'pokemon-details',
} as const;

export type NotFoundType = (typeof NotFoundTypes)[keyof typeof NotFoundTypes];
