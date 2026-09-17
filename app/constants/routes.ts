export const Routes = {
  POKEDEX: () => `/`,
  POKEMON_DETAILS: ({ pokemonName }: { pokemonName: string }) =>
    `/details/${pokemonName}`,
} as const;

export type Route = (typeof Routes)[keyof typeof Routes];
