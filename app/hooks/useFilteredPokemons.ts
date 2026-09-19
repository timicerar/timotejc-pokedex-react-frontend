import { useMemo } from 'react';
import type { NamedAPIResource } from '~/api/models/Pokemon';
import { filterPokemonsBySearch } from '~/utils/filterUtils';

export const useFilteredPokemons = (
  pokemons: NamedAPIResource[],
  search: string,
): NamedAPIResource[] => {
  return useMemo(
    () => filterPokemonsBySearch(pokemons, search),
    [pokemons, search],
  );
};
