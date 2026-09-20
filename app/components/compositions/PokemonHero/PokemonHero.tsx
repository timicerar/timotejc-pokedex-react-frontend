import { useTranslation } from 'react-i18next';
import type { Pokemon } from '~/api/models/Pokemon';
import { usePokemonGenerations, usePokemonSpecies } from '~/api/pokemon/hooks';
import Badge from '~/components/components/Badge/Badge';
import Container from '~/components/components/Container/Container';
import Image from '~/components/components/Image/Image';
import Typography from '~/components/components/Typography/Typography';
import { BadgeSizes } from '~/constants/badge';
import {
  DESKTOP_POKEMON_HERO_IMAGE_SIZE,
  MOBILE_POKEMON_HERO_IMAGE_SIZE,
} from '~/constants/pokemon';
import type { PokemonGeneration } from '~/constants/pokemon-generations';
import type { PokemonRegion } from '~/constants/pokemon-regions';
import type { PokemonType } from '~/constants/pokemon-types';
import { TypographyTypes } from '~/constants/typography';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { getIdFromResourceUrl } from '~/utils/apiResourceUtils';
import classes from './PokemonHero.module.scss';

type PokemonHeroProps = {
  pokemon: Pokemon;
};

const PokemonHero = ({ pokemon }: PokemonHeroProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('sm');

  const speciesId = getIdFromResourceUrl(pokemon.species.url);
  const { data: species } = usePokemonSpecies({
    name: pokemon.species.name,
    id: speciesId ? Number(speciesId) : undefined,
  });
  const { data: generations } = usePokemonGenerations({
    enabled: Boolean(species),
  });

  const generation = generations?.find(
    (item) => item.name === species?.generation?.name,
  );

  const image =
    pokemon.sprites?.other?.['official-artwork']?.front_default ??
    pokemon.sprites?.front_default ??
    '';
  const imageSize = isMobile
    ? MOBILE_POKEMON_HERO_IMAGE_SIZE
    : DESKTOP_POKEMON_HERO_IMAGE_SIZE;

  return (
    <Container className={classes.root}>
      <div className={classes.container}>
        <Image
          src={image}
          alt={pokemon.name}
          width={imageSize}
          height={imageSize}
          className={classes.image}
          loading="eager"
          fetchPriority="high"
        />
        <div className={classes.wrapper}>
          <Typography type={TypographyTypes.ID_LABEL} color="muted-foreground">
            #{String(pokemon.id).padStart(4, '0')}
          </Typography>
          <Typography
            as="h1"
            type={TypographyTypes.HEADING_XL}
            className={classes.name}
          >
            {pokemon?.name}
          </Typography>
          <div className={classes.badges}>
            {pokemon?.types?.map(({ type }) => {
              const pokemonType = type.name as PokemonType;

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
          {species && generation && (
            <Typography
              type={TypographyTypes.CAPTION}
              color="muted-foreground"
              className={classes.generation}
            >
              {t('pokemonDetails.generation', {
                generation: t(
                  `pokemonGenerations.${species.generation.name as PokemonGeneration}`,
                ),
                region: t(
                  `pokemonRegions.${generation.main_region.name as PokemonRegion}`,
                ),
              })}
            </Typography>
          )}
        </div>
      </div>
    </Container>
  );
};

export default PokemonHero;
