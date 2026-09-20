import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import type { NamedAPIResource } from '~/api/models/Pokemon';
import type {
  EvolutionChainParams,
  PokemonDetailsParams,
  PokemonFilters,
  PokemonMoveParams,
} from '~/api/models/PokemonFilters';
import {
  getEvolutionChain,
  getPokemon,
  getPokemonGeneration,
  getPokemonMove,
  getPokemons,
  getPokemonSpecies,
  getPokemonType,
} from '~/api/pokemon';
import { PokemonQueryKeys } from '~/api/pokemon/queryKeys';
import { POKEMON_GC_TIME } from '~/constants/pokemon';
import { PokemonGenerations } from '~/constants/pokemon-generations';
import { PokemonTypes } from '~/constants/pokemon-types';
import { useFilteredPokemons } from '~/hooks/useFilteredPokemons';
import { usePokemonsByFacets } from '~/hooks/usePokemonsByFacets';
import { getPokemonListConfig } from '~/utils/filterUtils';

type UsePokemonsOptions = {
  maxItems?: number | null;
  limit?: number | null;
};

export const usePokemons = (
  filters?: PokemonFilters,
  { maxItems = null, limit = null }: UsePokemonsOptions = {},
) => {
  const { search, types, generations, hasFacetFilter, listLimit } =
    getPokemonListConfig(filters, limit);

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

  const filteredItems = useFilteredPokemons(
    facetPokemons ?? basePokemons,
    search,
  );

  const items = useMemo(
    () =>
      maxItems !== null ? filteredItems.slice(0, maxItems) : filteredItems,
    [filteredItems, maxItems],
  );

  const hasNextPage = hasFacetFilter
    ? false
    : maxItems !== null
      ? Boolean(infiniteQuery.hasNextPage) && items.length < maxItems
      : infiniteQuery.hasNextPage;

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

  return {
    items,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
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

type UsePokemonSpeciesOptions = {
  enabled?: boolean;
};

export const usePokemonSpecies = (
  params: PokemonDetailsParams,
  { enabled = true }: UsePokemonSpeciesOptions = {},
) => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonSpecies(params),
    queryFn: () => getPokemonSpecies(params),
    enabled: enabled && Boolean(params?.id || params?.name),
    refetchOnMount: true,
    staleTime: Infinity,
    gcTime: POKEMON_GC_TIME,
    retry: 2,
  });
};

type UseEvolutionChainOptions = {
  enabled?: boolean;
};

export const useEvolutionChain = (
  params: EvolutionChainParams,
  { enabled = true }: UseEvolutionChainOptions = {},
) => {
  return useQuery({
    queryKey: PokemonQueryKeys.evolutionChain(params),
    queryFn: () => getEvolutionChain(params),
    enabled: enabled && Boolean(params?.id),
    refetchOnMount: true,
    staleTime: Infinity,
    gcTime: POKEMON_GC_TIME,
    retry: 2,
  });
};

type UsePokemonMoveOptions = {
  enabled?: boolean;
};

export const usePokemonMove = (
  params: PokemonMoveParams,
  { enabled = true }: UsePokemonMoveOptions = {},
) => {
  return useQuery({
    queryKey: PokemonQueryKeys.pokemonMove(params),
    queryFn: () => getPokemonMove(params),
    enabled: enabled && Boolean(params?.id),
    refetchOnMount: true,
    staleTime: Infinity,
    gcTime: POKEMON_GC_TIME,
    retry: 2,
  });
};
