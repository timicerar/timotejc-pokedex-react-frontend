import type { NamedAPIResource } from '~/api/models/Pokemon';
import PokemonCard from '~/components/compositions/PokemonCard/PokemonCard';
import { useLoadMoreSentinel } from '~/hooks/useLoadMoreSentinel';
import classes from './PokemonList.module.scss';

type PokemonPlainListProps = {
  items: NamedAPIResource[];
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
};

const PokemonPlainList = ({
  items,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: PokemonPlainListProps) => {
  const sentinelRef = useLoadMoreSentinel({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  return (
    <>
      <div className={classes.grid}>
        {items.map((item) => (
          <PokemonCard key={item.name} name={item.name} />
        ))}
      </div>
      {hasNextPage && (
        <div
          ref={sentinelRef}
          className={classes.sentinel}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default PokemonPlainList;
