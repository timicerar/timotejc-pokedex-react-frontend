import type { NamedAPIResource } from '~/api/models/Pokemon';

export type PokemonTypePokemon = {
  slot: number;
  pokemon: NamedAPIResource;
};

export type PokemonTypeDetail = {
  id: number;
  name: string;
  pokemon: PokemonTypePokemon[];
};
