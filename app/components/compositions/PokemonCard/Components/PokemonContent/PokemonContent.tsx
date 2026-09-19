import { useTranslation } from 'react-i18next';
import { usePokemon } from '~/api/pokemon/hooks';
import Badge from '~/components/components/Badge/Badge';
import Image from '~/components/components/Image/Image';
import Typography from '~/components/components/Typography/Typography';
import type { PokemonContentProps } from '~/components/compositions/PokemonCard/Components/PokemonContent/PokemonContent.interface';
import PokemonContentError from '~/components/compositions/PokemonCard/Components/PokemonContentError/PokemonContentError';
import PokemonContentSkeleton from '~/components/compositions/PokemonCard/Components/PokemonContentSkeleton/PokemonContentSkeleton';
import type { PokemonType } from '~/constants/pokemon-types';
import { TypographyTypes } from '~/constants/typography';
import classes from './PokemonContent.module.scss';

const PokemonContent = ({ name }: PokemonContentProps) => {
  const { t } = useTranslation();
  const { data: pokemon, isLoading, isError } = usePokemon({ name });

  if (isLoading) {
    return <PokemonContentSkeleton />;
  }

  if (isError || !pokemon) {
    return <PokemonContentError />;
  }

  const image =
    pokemon.sprites?.other?.['official-artwork']?.front_default ??
    pokemon.sprites?.front_default ??
    '';

  return (
    <>
      <Typography
        type={TypographyTypes.ID_LABEL}
        color="muted-foreground"
        className={classes.id}
      >
        #{String(pokemon?.id).padStart(4, '0')}
      </Typography>
      <Image
        src={image}
        alt={pokemon?.name}
        width={160}
        height={160}
        className={classes.image}
      />
      <div className={classes.wrapper}>
        <Typography type={TypographyTypes.CARD_TITLE} className={classes.name}>
          {pokemon?.name}
        </Typography>
        <div className={classes.types}>
          {pokemon.types?.map(({ type }) => {
            const pokemonType = type?.name as PokemonType;

            return (
              <Badge key={pokemonType} variant={pokemonType}>
                {t(`pokemonTypes.${pokemonType}`)}
              </Badge>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonContent;
