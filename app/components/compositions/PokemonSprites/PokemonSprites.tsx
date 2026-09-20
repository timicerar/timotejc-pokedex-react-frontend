import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Pokemon } from '~/api/models/Pokemon';
import Button from '~/components/components/Button/Button';
import Carousel from '~/components/components/Carousel/Carousel';
import { useCarouselNav } from '~/components/components/Carousel/hooks/useCarouselNav';
import Image from '~/components/components/Image/Image';
import Typography from '~/components/components/Typography/Typography';
import { ButtonVariants } from '~/constants/button';
import { TypographyTypes } from '~/constants/typography';
import { getPokemonSpriteItems } from '~/utils/pokemonSpriteUtils';
import classes from './PokemonSprites.module.scss';

type PokemonSpritesProps = {
  pokemon: Pokemon;
};

const SPRITE_SIZE = 220;

const PokemonSprites = ({ pokemon }: PokemonSpritesProps) => {
  const { t } = useTranslation();

  const sprites = useMemo(() => getPokemonSpriteItems(pokemon), [pokemon]);

  const {
    setApi,
    selectedIndex,
    scrollSnaps,
    canScrollPrev,
    canScrollNext,
    scrollTo,
    scrollPrev,
    scrollNext,
  } = useCarouselNav();

  if (!sprites.length) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Carousel setApi={setApi} className={classes.carousel}>
        {sprites.map((sprite) => (
          <div key={sprite.key} className={classes.slide}>
            <Image
              src={sprite.src}
              alt={t(`pokemonSprites.${sprite.key}`)}
              width={SPRITE_SIZE}
              height={SPRITE_SIZE}
              className={classes.image}
            />
            <Typography
              type={TypographyTypes.LABEL}
              color="muted-foreground"
              uppercase
            >
              {t(`pokemonSprites.${sprite.key}`)}
            </Typography>
          </div>
        ))}
      </Carousel>
      {sprites.length > 1 && (
        <div className={classes.nav}>
          <Button
            variant={ButtonVariants.ROUNDED}
            ariaLabel={t('pokemonSprites.previous')}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            leadingIcon={
              <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
            }
          />
          <div className={classes.indicators}>
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={t('pokemonSprites.goToSlide', {
                  index: index + 1,
                })}
                onClick={() => scrollTo(index)}
                className={classNames(classes.indicator, {
                  [classes.active]: index === selectedIndex,
                })}
              />
            ))}
          </div>
          <Button
            variant={ButtonVariants.ROUNDED}
            ariaLabel={t('pokemonSprites.next')}
            disabled={!canScrollNext}
            onClick={scrollNext}
            leadingIcon={
              <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
            }
          />
        </div>
      )}
    </div>
  );
};

export default PokemonSprites;
