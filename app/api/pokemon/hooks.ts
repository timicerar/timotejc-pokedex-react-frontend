import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import type { NamedAPIResource } from '~/api/models/Pokemon';
import type {
  PokemonDetailsParams,
  PokemonFilters,
} from '~/api/models/PokemonFilters';
import { getPokemon, getPokemons } from '~/api/pokemon';
import { PokemonQueryKeys } from '~/api/pokemon/queryKeys';
import {
  POKEMON_GC_TIME,
  POKEMON_LIST_LIMIT,
  POKEMON_STALE_TIME,
} from '~/constants/pokemon';
import { useInfiniteVirtualizer } from '~/hooks/useInfiniteVirtualizer';

type UsePokemonsOptions = {
  columnCount?: number;
  estimateRowSize?: number;
  overscan?: number;
};

export const usePokemons = (
  filters?: PokemonFilters,
  {
    columnCount = 1,
    estimateRowSize = 260,
    overscan = 3,
  }: UsePokemonsOptions = {},
) => {
  const infiniteQuery = useInfiniteQuery({
    queryKey: PokemonQueryKeys.pokemonList({
      limit: POKEMON_LIST_LIMIT,
      ...filters,
    }),
    queryFn: ({ pageParam }) =>
      getPokemons({ ...filters, limit: POKEMON_LIST_LIMIT, offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.next ? allPages.length * POKEMON_LIST_LIMIT : undefined,
    refetchOnMount: true,
    staleTime: POKEMON_STALE_TIME,
    gcTime: POKEMON_GC_TIME,
  });

  const { hasNextPage, isFetchingNextPage, fetchNextPage } = infiniteQuery;

  const items = useMemo<NamedAPIResource[]>(
    () =>
      infiniteQuery.data?.pages.flatMap((page) => page?.results ?? []) ?? [],
    [infiniteQuery.data],
  );

  const { scrollElementRef, rowVirtualizer, rowCount } = useInfiniteVirtualizer(
    {
      itemCount: items.length,
      columnCount,
      estimateRowSize,
      overscan,
      hasNextPage,
      isFetchingNextPage,
      fetchNextPage,
    },
  );

  return {
    ...infiniteQuery,
    items,
    columnCount,
    rowCount,
    scrollElementRef,
    rowVirtualizer,
  };
};

export const usePokemon = (params: PokemonDetailsParams) => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonDetails(params),
    queryFn: () => getPokemon(params),
    refetchOnMount: true,
    enabled: Boolean(params?.id || params?.name),
    staleTime: POKEMON_STALE_TIME,
    gcTime: POKEMON_GC_TIME,
  });
};
