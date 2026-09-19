import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import type { NamedAPIResource } from '~/api/models/Pokemon';
import type {
  PokemonDetailsParams,
  PokemonFilters,
} from '~/api/models/PokemonFilters';
import { getPokemon, getPokemons } from '~/api/pokemon';
import { PokemonQueryKeys } from '~/api/pokemon/queryKeys';
import { ElementIds } from '~/constants/element-ids';
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
    estimateRowSize = 272,
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

  const { rowVirtualizer, rowCount } = useInfiniteVirtualizer({
    itemCount: items.length,
    columnCount,
    estimateRowSize,
    overscan,
    gap: 16,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    getScrollElement: () => document.getElementById(ElementIds.MAIN_CONTENT),
  });

  return {
    ...infiniteQuery,
    items,
    columnCount,
    rowCount,
    rowVirtualizer,
  };
};

type UsePokemonOptions = {
  enabled?: boolean;
};

export const usePokemon = (
  params: PokemonDetailsParams,
  { enabled = true }: UsePokemonOptions = {},
) => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonDetails(params),
    queryFn: () => getPokemon(params),
    refetchOnMount: true,
    retry: 2,
    enabled: enabled && Boolean(params?.id || params?.name),
    staleTime: POKEMON_STALE_TIME,
    gcTime: POKEMON_GC_TIME,
  });
};
