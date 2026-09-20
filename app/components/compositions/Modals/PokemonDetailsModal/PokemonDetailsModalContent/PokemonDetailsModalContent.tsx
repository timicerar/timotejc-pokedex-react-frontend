import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { usePokemon, usePokemonTypes } from '~/api/pokemon/hooks';
import Badge from '~/components/components/Badge/Badge';
import Button from '~/components/components/Button/Button';
import Image from '~/components/components/Image/Image';
import ModalHeader from '~/components/components/Modal/ModalHeader/ModalHeader';
import Typography from '~/components/components/Typography/Typography';
import PokemonDetailsModalError from '~/components/compositions/Modals/PokemonDetailsModal/PokemonDetailsModalError/PokemonDetailsModalError';
import PokemonDetailsModalSkeleton from '~/components/compositions/Modals/PokemonDetailsModal/PokemonDetailsModalSkeleton/PokemonDetailsModalSkeleton';
import PokemonStats from '~/components/compositions/PokemonStats/PokemonStats';
import PokemonWeakAgainst from '~/components/compositions/PokemonWeakAgainst/PokemonWeakAgainst';
import { BadgeSizes } from '~/constants/badge';
import { ButtonVariants } from '~/constants/button';
import { ModalTypes } from '~/constants/modal-provider';
import {
  DESKTOP_POKEMON_IMAGE_SIZE,
  MOBILE_POKEMON_IMAGE_SIZE,
} from '~/constants/pokemon';
import type { PokemonType } from '~/constants/pokemon-types';
import { Routes } from '~/constants/routes';
import { TypographyTypes } from '~/constants/typography';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { closeModal } from '~/store/modals';
import classes from '../PokemonDetailsModal.module.scss';

type PokemonDetailsModalContentProps = {
  name: string;
};

const PokemonDetailsModalContent = ({
  name,
}: PokemonDetailsModalContentProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('sm');

  const {
    data: pokemon,
    isLoading: isLoadingPokemon,
    isError: isPokemonError,
  } = usePokemon({ name });

  const { data: pokemonTypes, isLoading: isLoadingType } = usePokemonTypes({
    enabled: !isLoadingPokemon && !isPokemonError && Boolean(pokemon),
  });

  const isLoading = isLoadingPokemon || isLoadingType;

  if (isLoading) {
    return <PokemonDetailsModalSkeleton />;
  }

  if (isPokemonError || !pokemon) {
    return <PokemonDetailsModalError />;
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
      <ModalHeader onClose={() => closeModal(ModalTypes.POKEMON_DETAILS)} />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Image
            src={image}
            alt={pokemon?.name}
            width={imageSize}
            height={imageSize}
            className={classes.image}
          />
          <Typography
            type={TypographyTypes.ID_LABEL}
            color="muted-foreground"
            align="center"
          >
            #{String(pokemon?.id).padStart(4, '0')}
          </Typography>
          <Typography
            as="h2"
            type={TypographyTypes.HEADING_LG}
            align="center"
            className={classes.name}
          >
            {pokemon?.name}
          </Typography>
          <div className={classes.badges}>
            {pokemon?.types?.map((value) => {
              const type = value?.type?.name as PokemonType;

              return (
                <Badge
                  key={type}
                  variant={type}
                  size={isMobile ? BadgeSizes.SM : BadgeSizes.DEFAULT}
                >
                  {t(`pokemonTypes.${type}`)}
                </Badge>
              );
            })}
          </div>
        </div>
        <PokemonStats pokemon={pokemon} showBasicStats />
        <PokemonWeakAgainst pokemon={pokemon} typeDetails={pokemonTypes} />
        <Button
          type="button"
          variant={ButtonVariants.PRIMARY}
          fullWidth
          trailingIcon={
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          }
          onClick={() => {
            closeModal(ModalTypes.POKEMON_DETAILS);
            navigate(Routes.POKEMON_DETAILS({ pokemonName: pokemon.name }));
          }}
        >
          {t('modal.pokemonDetailsModal.viewFullDetails')}
        </Button>
      </div>
    </>
  );
};

export default PokemonDetailsModalContent;
