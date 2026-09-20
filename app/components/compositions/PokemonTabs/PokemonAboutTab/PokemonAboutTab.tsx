import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Pokemon } from '~/api/models/Pokemon';
import PokemonEntry from '~/components/compositions/PokemonEntry/PokemonEntry';
import PokemonInfoCard from '~/components/compositions/PokemonInfoCard/PokemonInfoCard';
import { formatDashedLabel } from '~/utils/stringUtils';
import classes from './PokemonAboutTab.module.scss';

type PokemonAboutTabProps = {
  pokemon: Pokemon;
};

const PokemonAboutTab = ({ pokemon }: PokemonAboutTabProps) => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        <PokemonInfoCard
          title={t('pokemonDetails.height')}
          value={`${(pokemon.height / 10).toFixed(1)} m`}
        />
        <PokemonInfoCard
          title={t('pokemonDetails.weight')}
          value={`${(pokemon.weight / 10).toFixed(1)} kg`}
        />
        <PokemonInfoCard
          title={t('pokemonDetails.abilities')}
          value={pokemon.abilities?.map(({ ability }) =>
            formatDashedLabel(ability.name),
          )}
        />
      </div>
      <PokemonEntry pokemon={pokemon} />
    </div>
  );
};

export default memo(PokemonAboutTab);
