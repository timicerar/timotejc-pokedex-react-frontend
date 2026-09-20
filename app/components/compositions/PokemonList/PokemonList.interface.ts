import type { VirtualItem } from '@tanstack/react-virtual';
import type { NamedAPIResource } from '~/api/models/Pokemon';

export type PokemonListRowProps = {
  virtualRow: VirtualItem;
  measureElement: (element: Element | null) => void;
  rowItems: NamedAPIResource[];
  startIndex: number;
  showLoadingCard: boolean;
};
