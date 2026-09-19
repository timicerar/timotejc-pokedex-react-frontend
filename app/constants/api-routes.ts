import type { PokemonDetailsParams } from '~/api/models/PokemonFilters';

export const ApiRoutes = {
  pokemons: () => `/pokemon`,
  pokemon: (params: PokemonDetailsParams) =>
    `pokemon/${params?.id ?? params?.name}`,
  pokemonType: ({ name }: { name: string }) => `type/${name}`,
  pokemonGeneration: ({ name }: { name: string }) => `generation/${name}`,
} as const;
