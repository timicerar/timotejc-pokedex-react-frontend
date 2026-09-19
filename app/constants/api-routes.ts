import type { PokemonDetailsParams } from '~/api/models/PokemonFilters';

export const ApiRoutes = {
  pokemons: () => `/pokemon`,
  pokemon: (params: PokemonDetailsParams) =>
    `pokemon/${params?.id ?? params?.name}`,
} as const;
