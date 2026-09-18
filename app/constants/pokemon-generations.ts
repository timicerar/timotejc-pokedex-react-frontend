export const PokemonGenerations = {
  GEN_1: 'gen1',
  GEN_2: 'gen2',
  GEN_3: 'gen3',
  GEN_4: 'gen4',
  GEN_5: 'gen5',
  GEN_6: 'gen6',
  GEN_7: 'gen7',
  GEN_8: 'gen8',
  GEN_9: 'gen9',
} as const;

export type PokemonGeneration =
  (typeof PokemonGenerations)[keyof typeof PokemonGenerations];
