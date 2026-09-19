import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import type { NamedAPIResource } from '~/api/models/Pokemon';
import type {
  PokemonDetailsParams,
  PokemonFilters,
} from '~/api/models/PokemonFilters';
import {
  getPokemon,
  getPokemonGeneration,
  getPokemons,
  getPokemonType,
} from '~/api/pokemon';
import { PokemonQueryKeys } from '~/api/pokemon/queryKeys';
import { ElementIds } from '~/constants/element-ids';
import { POKEMON_GC_TIME, POKEMON_LIST_LIMIT } from '~/constants/pokemon';
import { PokemonGenerations } from '~/constants/pokemon-generations';
import { PokemonTypes } from '~/constants/pokemon-types';
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
    staleTime: Infinity,
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
    gap: 24,
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
    enabled: enabled && Boolean(params?.id || params?.name),
    refetchOnMount: true,
    staleTime: Infinity,
    gcTime: POKEMON_GC_TIME,
    retry: 2,
  });
};

export const usePokemonTypes = () => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonTypes(),
    queryFn: () =>
      Promise.all(
        Object.values(PokemonTypes).map((name) => getPokemonType({ name })),
      ),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const usePokemonGenerations = () => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonGenerations(),
    queryFn: () =>
      Promise.all(
        Object.values(PokemonGenerations).map((name) =>
          getPokemonGeneration({ name }),
        ),
      ),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
