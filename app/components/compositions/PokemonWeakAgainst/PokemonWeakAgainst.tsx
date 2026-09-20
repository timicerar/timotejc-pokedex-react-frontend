import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Pokemon } from '~/api/models/Pokemon';
import type { PokemonTypeDetail } from '~/api/models/PokemonTypeDetail';
import Badge from '~/components/components/Badge/Badge';
import Typography from '~/components/components/Typography/Typography';
import type { PokemonType } from '~/constants/pokemon-types';
import { TypographyTypes } from '~/constants/typography';
import { getPokemonWeaknesses } from '~/utils/pokemonTypeUtils';
import classes from './PokemonWeakAgainst.module.scss';

type PokemonWeakAgainstProps = {
  pokemon: Pokemon;
  typeDetails?: PokemonTypeDetail[];
};

const PokemonWeakAgainst = ({
  pokemon,
  typeDetails,
}: PokemonWeakAgainstProps) => {
  const { t } = useTranslation();

  const weaknesses = useMemo(() => {
    const types = pokemon.types?.map(({ type }) => type.name as PokemonType);

    return getPokemonWeaknesses(types, typeDetails);
  }, [pokemon.types, typeDetails]);

  if (!weaknesses?.length) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Typography
        type={TypographyTypes.LABEL}
        color="muted-foreground"
        uppercase
      >
        {t('shared.weakAgainst')}
      </Typography>
      <div className={classes.badges}>
        {weaknesses.map((type) => (
          <Badge key={type} variant={type}>
            {t(`pokemonTypes.${type}`)}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PokemonWeakAgainst;
