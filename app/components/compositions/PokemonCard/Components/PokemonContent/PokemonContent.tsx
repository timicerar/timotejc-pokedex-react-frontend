import { useTranslation } from 'react-i18next';
import { usePokemon } from '~/api/pokemon/hooks';
import Badge from '~/components/components/Badge/Badge';
import Image from '~/components/components/Image/Image';
import Typography from '~/components/components/Typography/Typography';
import type { PokemonContentProps } from '~/components/compositions/PokemonCard/Components/PokemonContent/PokemonContent.interface';
import PokemonContentError from '~/components/compositions/PokemonCard/Components/PokemonContentError/PokemonContentError';
import PokemonContentSkeleton from '~/components/compositions/PokemonCard/Components/PokemonContentSkeleton/PokemonContentSkeleton';
import { BadgeSizes } from '~/constants/badge';
import {
  DESKTOP_POKEMON_IMAGE_SIZE,
  MOBILE_POKEMON_IMAGE_SIZE,
} from '~/constants/pokemon';
import type { PokemonType } from '~/constants/pokemon-types';
import { TypographyTypes } from '~/constants/typography';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import classes from './PokemonContent.module.scss';

const PokemonContent = ({ name, hideBadges }: PokemonContentProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('sm');
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
  const imageSize = isMobile
    ? MOBILE_POKEMON_IMAGE_SIZE
    : DESKTOP_POKEMON_IMAGE_SIZE;

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
        width={imageSize}
        height={imageSize}
        className={classes.image}
      />
      <div className={classes.wrapper}>
        <Typography type={TypographyTypes.CARD_TITLE} className={classes.name}>
          {pokemon?.name}
        </Typography>
        {!hideBadges && (
          <div className={classes.types}>
            {pokemon.types?.map(({ type }) => {
              const pokemonType = type?.name as PokemonType;

              return (
                <Badge
                  key={pokemonType}
                  variant={pokemonType}
                  size={isMobile ? BadgeSizes.SM : BadgeSizes.DEFAULT}
                >
                  {t(`pokemonTypes.${pokemonType}`)}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonContent;
