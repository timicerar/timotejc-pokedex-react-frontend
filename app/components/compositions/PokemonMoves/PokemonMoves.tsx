import type { Pokemon } from '~/api/models/Pokemon';
import PokemonMoveCard from '~/components/compositions/PokemonMoveCard/PokemonMoveCard';
import { getIdFromResourceUrl } from '~/utils/apiResourceUtils';
import classes from './PokemonMoves.module.scss';

type PokemonMovesProps = {
  pokemon: Pokemon;
};

const PokemonMoves = ({ pokemon }: PokemonMovesProps) => {
  return (
    <div className={classes.list}>
      {pokemon.moves?.map(({ move }) => {
        const id = getIdFromResourceUrl(move.url);

        if (!id) {
          return null;
        }

        return <PokemonMoveCard key={move?.name} id={id} />;
      })}
    </div>
  );
};

export default PokemonMoves;
