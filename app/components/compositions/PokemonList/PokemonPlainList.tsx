import type { NamedAPIResource } from '~/api/models/Pokemon';
import PokemonCard from '~/components/compositions/PokemonCard/PokemonCard';
import { INITIAL_SKELETON_COUNT } from '~/components/compositions/PokemonList/hooks/useColumnCount';
import { useModalProvider } from '~/components/providers/ModalProvider/hooks/useModalProvider';
import { ModalTypes } from '~/constants/modal-provider';
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
  const { openModal } = useModalProvider();

  const sentinelRef = useLoadMoreSentinel({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  return (
    <>
      <div className={classes.grid}>
        {items.map((item, index) => (
          <PokemonCard
            key={item.name}
            name={item.name}
            priority={index < INITIAL_SKELETON_COUNT}
            onClick={() =>
              openModal({
                type: ModalTypes.POKEMON_DETAILS,
                data: { name: item?.name },
              })
            }
          />
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
