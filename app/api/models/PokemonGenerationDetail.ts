import type { NamedAPIResource } from '~/api/models/Pokemon';

export type PokemonGenerationDetail = {
  id: number;
  name: string;
  pokemon_species: NamedAPIResource[];
};
