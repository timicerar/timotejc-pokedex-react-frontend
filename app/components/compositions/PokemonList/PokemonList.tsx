import { usePokemons } from '~/api/pokemon/hooks';
import NotFound from '~/components/compositions/NotFound/NotFound';
import {
  ESTIMATE_ROW_SIZE,
  useColumnCount,
} from '~/components/compositions/PokemonList/hooks/useColumnCount';
import PokemonListRow from '~/components/compositions/PokemonList/PokemonListRow';
import PokemonListSkeleton from '~/components/compositions/PokemonList/PokemonListSkeleton';
import { NotFoundTypes } from '~/constants/not-found';
import { usePokemonFilters } from '~/hooks/usePokemonFilters';
import classes from './PokemonList.module.scss';

const PokemonList = () => {
  const { filters } = usePokemonFilters();
  const columnCount = useColumnCount();

  const { items, isLoading, isError, hasNextPage, rowCount, rowVirtualizer } =
    usePokemons(filters, {
      columnCount,
      estimateRowSize: ESTIMATE_ROW_SIZE,
    });

  if (isLoading) {
    return <PokemonListSkeleton />;
  }

  if (isError || !items?.length) {
    return <NotFound type={NotFoundTypes.POKEMON_LIST} />;
  }

  return (
    <div
      className={classes.container}
      style={{ height: rowVirtualizer.getTotalSize() }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const startIndex = virtualRow.index * columnCount;
        const rowItems = items.slice(startIndex, startIndex + columnCount);
        const showLoadingCard =
          virtualRow.index === rowCount - 1 &&
          hasNextPage &&
          rowItems.length < columnCount;

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

export default PokemonList;
