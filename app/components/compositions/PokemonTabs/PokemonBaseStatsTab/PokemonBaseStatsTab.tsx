import type { Pokemon } from '~/api/models/Pokemon';
import { usePokemonTypes } from '~/api/pokemon/hooks';
import PokemonStats from '~/components/compositions/PokemonStats/PokemonStats';
import PokemonWeakAgainst from '~/components/compositions/PokemonWeakAgainst/PokemonWeakAgainst';
import classes from './PokemonBaseStatsTab.module.scss';

type PokemonBaseStatsTabProps = {
  pokemon: Pokemon;
};

const PokemonBaseStatsTab = ({ pokemon }: PokemonBaseStatsTabProps) => {
  const { data: pokemonTypes } = usePokemonTypes();

  return (
    <div className={classes.container}>
      <PokemonStats pokemon={pokemon} showTotal />
      <PokemonWeakAgainst pokemon={pokemon} typeDetails={pokemonTypes} />
    </div>
  );
};

export default PokemonBaseStatsTab;
