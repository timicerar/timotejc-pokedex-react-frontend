import type { NamedAPIResource } from '~/api/models/Pokemon';

export type PokemonMoveEffectEntry = {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
};

export type PokemonMoveDetail = {
  id: number;
  name: string;
  accuracy: number | null;
  power: number | null;
  pp: number;
  priority: number;
  damage_class: NamedAPIResource;
  type: NamedAPIResource;
  generation: NamedAPIResource;
  effect_entries: PokemonMoveEffectEntry[];
};
