import PokemonCard from '~/components/compositions/PokemonCard/PokemonCard';
import PokemonCardSkeleton from '~/components/compositions/PokemonCard/PokemonCardSkeleton';
import type { PokemonListRowProps } from '~/components/compositions/PokemonList/PokemonList.interface';
import { useModalProvider } from '~/components/providers/ModalProvider/hooks/useModalProvider';
import { ModalTypes } from '~/constants/modal-provider';
import classes from './PokemonList.module.scss';

const PokemonListRow = ({
  virtualRow,
  measureElement,
  rowItems,
  showLoadingCard,
}: PokemonListRowProps) => {
  const { openModal } = useModalProvider();

  return (
    <div
      data-index={virtualRow.index}
      ref={measureElement}
      className={classes.row}
      style={{ transform: `translateY(${virtualRow.start}px)` }}
    >
      <div className={classes.grid}>
        {rowItems.map((item) => (
          <PokemonCard
            key={item?.name}
            name={item?.name}
            onClick={() =>
              openModal({
                type: ModalTypes.POKEMON_DETAILS,
                data: { name: item?.name },
              })
            }
          />
        ))}
        {showLoadingCard && <PokemonCardSkeleton />}
      </div>
    </div>
  );
};

export default PokemonListRow;
