import type { NamedAPIResource } from '~/api/models/Pokemon';
import {
  ESTIMATE_ROW_SIZE,
  useColumnCount,
} from '~/components/compositions/PokemonList/hooks/useColumnCount';
import PokemonListRow from '~/components/compositions/PokemonList/PokemonListRow';
import { ElementIds } from '~/constants/element-ids';
import { useInfiniteVirtualizer } from '~/hooks/useInfiniteVirtualizer';
import classes from './PokemonList.module.scss';

type PokemonVirtualizedListProps = {
  items: NamedAPIResource[];
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
};

const PokemonVirtualizedList = ({
  items,

  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: PokemonVirtualizedListProps) => {
  const columnCount = useColumnCount();

  const { rowVirtualizer, rowCount } = useInfiniteVirtualizer({
    itemCount: items.length,
    columnCount,
    estimateRowSize: ESTIMATE_ROW_SIZE,
    overscan: 3,
    gap: 24,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    getScrollElement: () => document.getElementById(ElementIds.MAIN_CONTENT),
  });

  return (
    <div
      className={classes.container}
      style={{ height: rowVirtualizer.getTotalSize() }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const startIndex = virtualRow.index * columnCount;
        const rowItems = items.slice(startIndex, startIndex + columnCount);
        const showLoadingCard = Boolean(
          virtualRow.index === rowCount - 1 &&
            hasNextPage &&
            rowItems.length < columnCount,
        );

        return (
          <PokemonListRow
            key={virtualRow.key}
            virtualRow={virtualRow}
            measureElement={rowVirtualizer.measureElement}
            rowItems={rowItems}
            showLoadingCard={showLoadingCard}
          />
        );
      })}
    </div>
  );
};

export default PokemonVirtualizedList;
