import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import type { PokemonFilters } from '~/api/models/PokemonFilters';
import type { PokemonGeneration } from '~/constants/pokemon-generations';
import type { PokemonType } from '~/constants/pokemon-types';
import { parseList, serializeList } from '~/utils/filterUtils';

export const usePokemonFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo<PokemonFilters>(
    () => ({
      search: searchParams.get('search') ?? '',
      type: parseList<PokemonType>(searchParams.get('type')),
      generation: parseList<PokemonGeneration>(searchParams.get('generation')),
    }),
    [searchParams],
  );

  const setParam = useCallback(
    (key: string, value: string | null) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);

          if (!value) {
            next.delete(key);
          } else {
            next.set(key, value);
          }

          return next;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const setSearch = useCallback(
    (value: string) => setParam('search', value || null),
    [setParam],
  );

  const setTypes = useCallback(
    (value: PokemonType[]) => setParam('type', serializeList(value)),
    [setParam],
  );

  const setGenerations = useCallback(
    (value: PokemonGeneration[]) =>
      setParam('generation', serializeList(value)),
    [setParam],
  );

  const clearFilters = useCallback(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);

        next.delete('search');
        next.delete('type');
        next.delete('generation');

        return next;
      },
      { replace: true },
    );
  }, [setSearchParams]);

  return {
    filters,
    setSearch,
    setTypes,
    setGenerations,
    clearFilters,
  };
};
