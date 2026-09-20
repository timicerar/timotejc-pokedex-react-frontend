import type { PokemonDetailsProps } from '~/components/compositions/PokemonDetails/PokemonDetails.interface';
import PokemonHero from '~/components/compositions/PokemonHero/PokemonHero';
import PokemonTabs from '~/components/compositions/PokemonTabs/PokemonTabs';
import classes from './PokemonDetails.module.scss';

const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
  return (
    <div className={classes.root}>
      <PokemonHero pokemon={pokemon} />
      <PokemonTabs pokemon={pokemon} />
    </div>
  );
};

export default PokemonDetails;
