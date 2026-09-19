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
import { POKEMON_GC_TIME } from '~/constants/pokemon';
import { PokemonGenerations } from '~/constants/pokemon-generations';
import { PokemonTypes } from '~/constants/pokemon-types';
import { useFilteredPokemons } from '~/hooks/useFilteredPokemons';
import { useInfiniteVirtualizer } from '~/hooks/useInfiniteVirtualizer';
import { usePokemonsByFacets } from '~/hooks/usePokemonsByFacets';
import { getPokemonListConfig } from '~/utils/filterUtils';

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
  const { search, types, generations, hasFacetFilter, listLimit } =
    getPokemonListConfig(filters);

  const typesQuery = usePokemonTypes({ enabled: types?.length > 0 });
  const generationsQuery = usePokemonGenerations({
    enabled: generations?.length > 0,
  });

  const infiniteQuery = useInfiniteQuery({
    queryKey: PokemonQueryKeys.pokemonList({ limit: listLimit }),
    queryFn: ({ pageParam }) =>
      getPokemons({ limit: listLimit, offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.next ? allPages.length * listLimit : undefined,
    enabled: !hasFacetFilter,
    refetchOnMount: true,
    staleTime: Infinity,
    gcTime: POKEMON_GC_TIME,
  });

  const basePokemons = useMemo<NamedAPIResource[]>(
    () =>
      infiniteQuery.data?.pages.flatMap((page) => page?.results ?? []) ?? [],
    [infiniteQuery.data],
  );

  const facetPokemons = usePokemonsByFacets({
    enabled: hasFacetFilter,
    types: typesQuery?.data,
    generations: generationsQuery?.data,
    selectedTypes: types,
    selectedGenerations: generations,
  });

  const items = useFilteredPokemons(facetPokemons ?? basePokemons, search);

  const hasNextPage = hasFacetFilter ? false : infiniteQuery.hasNextPage;
  const isFetchingNextPage = hasFacetFilter
    ? false
    : infiniteQuery.isFetchingNextPage;
  const { fetchNextPage } = infiniteQuery;

  const isLoading = hasFacetFilter
    ? (types.length > 0 && typesQuery.isLoading) ||
      (generations.length > 0 && generationsQuery.isLoading)
    : infiniteQuery.isLoading;

  const isError = hasFacetFilter
    ? typesQuery.isError || generationsQuery.isError
    : infiniteQuery.isError;

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
    items,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
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

type UsePokemonTypesOptions = {
  enabled?: boolean;
};

export const usePokemonTypes = ({
  enabled = true,
}: UsePokemonTypesOptions = {}) => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonTypes(),
    queryFn: () =>
      Promise.all(
        Object.values(PokemonTypes).map((name) => getPokemonType({ name })),
      ),
    enabled,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

type UsePokemonGenerationsOptions = {
  enabled?: boolean;
};

export const usePokemonGenerations = ({
  enabled = true,
}: UsePokemonGenerationsOptions = {}) => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonGenerations(),
    queryFn: () =>
      Promise.all(
        Object.values(PokemonGenerations).map((name) =>
          getPokemonGeneration({ name }),
        ),
      ),
    enabled,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
