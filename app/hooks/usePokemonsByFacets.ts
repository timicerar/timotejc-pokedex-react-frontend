import { useMemo } from 'react';
import type { NamedAPIResource } from '~/api/models/Pokemon';
import type { PokemonGenerationDetail } from '~/api/models/PokemonGenerationDetail';
import type { PokemonTypeDetail } from '~/api/models/PokemonTypeDetail';
import { filterPokemonsByFacets } from '~/utils/filterUtils';

type UsePokemonsByFacetsParams = {
  enabled: boolean;
  types?: PokemonTypeDetail[];
  generations?: PokemonGenerationDetail[];
  selectedTypes: string[];
  selectedGenerations: string[];
};

// Memoized so the virtualizer always sees a stable array reference unless
// the underlying type/generation data or selection actually changed.
export const usePokemonsByFacets = ({
  enabled,
  types,
  generations,
  selectedTypes,
  selectedGenerations,
}: UsePokemonsByFacetsParams): NamedAPIResource[] | null => {
  return useMemo(() => {
    if (!enabled) return null;

    return filterPokemonsByFacets({
      types,
      generations,
      selectedTypes,
      selectedGenerations,
    });
  }, [enabled, types, generations, selectedTypes, selectedGenerations]);
};
