import type { Pokemon } from '~/api/models/Pokemon';
import PokemonSprites from '~/components/compositions/PokemonSprites/PokemonSprites';
import classes from './PokemonSpritesTab.module.scss';

type PokemonSpritesTabProps = {
  pokemon: Pokemon;
};

const PokemonSpritesTab = ({ pokemon }: PokemonSpritesTabProps) => {
  return (
    <div className={classes.container}>
      <PokemonSprites pokemon={pokemon} />
    </div>
  );
};

export default PokemonSpritesTab;
