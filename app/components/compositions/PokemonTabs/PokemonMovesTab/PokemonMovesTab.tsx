import type { Pokemon } from '~/api/models/Pokemon';
import PokemonMoves from '~/components/compositions/PokemonMoves/PokemonMoves';
import classes from './PokemonMovesTab.module.scss';

type PokemonMovesTabProps = {
  pokemon: Pokemon;
};

const PokemonMovesTab = ({ pokemon }: PokemonMovesTabProps) => {
  return (
    <div className={classes.container}>
      <PokemonMoves pokemon={pokemon} />
    </div>
  );
};

export default PokemonMovesTab;
