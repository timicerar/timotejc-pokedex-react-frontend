import type { Pokemon } from '~/api/models/Pokemon';
import PokemonEvoChain from '~/components/compositions/PokemonEvoChain/PokemonEvoChain';
import classes from './PokemonEvolutionChainTab.module.scss';

type PokemonEvolutionChainTabProps = {
  pokemon: Pokemon;
};

const PokemonEvolutionChainTab = ({
  pokemon,
}: PokemonEvolutionChainTabProps) => {
  return (
    <div className={classes.container}>
      <PokemonEvoChain pokemon={pokemon} />
    </div>
  );
};

export default PokemonEvolutionChainTab;
