export const QueryIds = {
  POKEMON: 'pokemon',
  LIST: 'list',
  DETAILS: 'details',
  TYPES: 'types',
  GENERATIONS: 'generations',
} as const;

export type QueryId = (typeof QueryIds)[keyof typeof QueryIds];
