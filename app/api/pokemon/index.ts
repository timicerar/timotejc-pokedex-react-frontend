import { apiInstance } from '~/api/axios';
import type { Pokemon, PokemonList } from '~/api/models/Pokemon';
import type {
  PokemonDetailsParams,
  PokemonListParams,
} from '~/api/models/PokemonFilters';
import type { PokemonGenerationDetail } from '~/api/models/PokemonGenerationDetail';
import type { PokemonTypeDetail } from '~/api/models/PokemonTypeDetail';
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

export const getPokemonType = async ({ name }: { name: string }) => {
  const response = await apiInstance.get<PokemonTypeDetail>(
    ApiRoutes.pokemonType({ name }),
  );

  return response?.data;
};

export const getPokemonGeneration = async ({ name }: { name: string }) => {
  const response = await apiInstance.get<PokemonGenerationDetail>(
    ApiRoutes.pokemonGeneration({ name }),
  );

  return response?.data;
};
