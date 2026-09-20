import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Pokemon } from '~/api/models/Pokemon';
import { usePokemonSpecies } from '~/api/pokemon/hooks';
import Skeleton from '~/components/components/Skeleton/Skeleton';
import Typography from '~/components/components/Typography/Typography';
import { TypographyTypes } from '~/constants/typography';
import { getIdFromResourceUrl } from '~/utils/apiResourceUtils';
import classes from './PokemonEntry.module.scss';

type PokemonEntryProps = {
  pokemon: Pokemon;
};

const PokemonEntry = ({ pokemon }: PokemonEntryProps) => {
  const { t } = useTranslation();

  const speciesId = getIdFromResourceUrl(pokemon.species.url);

  const {
    data: species,
    isLoading,
    isError,
  } = usePokemonSpecies({
    name: pokemon.species.name,
    id: speciesId ? Number(speciesId) : undefined,
  });

  const flavorText = useMemo(() => {
    return species?.flavor_text_entries?.find(
      (entry) => entry.language.name === 'en',
    )?.flavor_text;
  }, [species?.flavor_text_entries]);

  if (isLoading) {
    return <Skeleton className={classes.skeleton} />;
  }

  if (isError || !species || !flavorText) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Typography
        type={TypographyTypes.LABEL}
        color="muted-foreground"
        uppercase
      >
        {t('pokemonDetails.pokedexEntry')}
      </Typography>
      <Typography type={TypographyTypes.BODY_SM}>
        {flavorText.replace(/[\n\f­]/g, ' ')}
      </Typography>
    </div>
  );
};

export default PokemonEntry;
