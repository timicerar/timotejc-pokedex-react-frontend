import { apiInstance } from '~/api/axios';
import type { Pokemon, PokemonList } from '~/api/models/Pokemon';
import type {
  PokemonDetailsParams,
  PokemonListParams,
} from '~/api/models/PokemonFilters';
import { ApiRoutes } from '~/constants/api-routes';

export const getPokemons = async (params?: PokemonListParams) => {
  const response = await apiInstance.get<PokemonList>(ApiRoutes.pokemons(), {
    params,
  });

  return response?.data;
};

export const getPokemon = async (params: PokemonDetailsParams) => {
  const response = await apiInstance.get<Pokemon>(ApiRoutes.pokemon(params));

  return response?.data;
};
