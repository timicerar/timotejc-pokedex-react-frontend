import type {
  PokemonDetailsParams,
  PokemonListParams,
} from '~/api/models/PokemonFilters';
import { QueryIds } from '~/constants/query-ids';

export const PokemonQueryKeys = {
  pokemonList: (params?: PokemonListParams) =>
    [QueryIds.POKEMON, QueryIds.LIST, params] as const,
  pokemonDetails: (params: PokemonDetailsParams) =>
    [QueryIds.POKEMON, QueryIds.DETAILS, params] as const,
};
