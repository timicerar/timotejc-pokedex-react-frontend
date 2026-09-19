export const QueryIds = {
  POKEMON: 'pokemon',
  LIST: 'list',
  DETAILS: 'details',
} as const;

export type QueryId = (typeof QueryIds)[keyof typeof QueryIds];
