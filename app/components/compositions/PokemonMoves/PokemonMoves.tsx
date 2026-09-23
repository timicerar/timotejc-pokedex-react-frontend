import { useVirtualizer } from '@tanstack/react-virtual';
import { useMemo } from 'react';
import type { Pokemon } from '~/api/models/Pokemon';
import PokemonMoveCard from '~/components/compositions/PokemonMoveCard/PokemonMoveCard';
import { ElementIds } from '~/constants/element-ids';
import { getIdFromResourceUrl } from '~/utils/apiResourceUtils';
import classes from './PokemonMoves.module.scss';

type PokemonMovesProps = {
  pokemon: Pokemon;
};

const PokemonMoves = ({ pokemon }: PokemonMovesProps) => {
  const moveIds = useMemo(
    () =>
      (pokemon.moves ?? [])
        .map(({ move }) => getIdFromResourceUrl(move.url))
        .filter((id): id is string => Boolean(id)),
    [pokemon.moves],
  );

  const virtualizer = useVirtualizer({
    count: moveIds.length,
    getScrollElement: () => document.getElementById(ElementIds.MAIN_CONTENT),
    estimateSize: () => 76,
    overscan: 6,
    gap: 16,
  });

  return (
    <div
      className={classes.list}
      style={{ height: virtualizer.getTotalSize() }}
    >
      {virtualizer.getVirtualItems().map((virtualRow) => (
        <div
          key={virtualRow.key}
          data-index={virtualRow.index}
          ref={virtualizer.measureElement}
          className={classes.row}
          style={{
            transform: `translateY(${virtualRow.start}px)`,
          }}
        >
          <PokemonMoveCard id={moveIds[virtualRow.index]} />
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
