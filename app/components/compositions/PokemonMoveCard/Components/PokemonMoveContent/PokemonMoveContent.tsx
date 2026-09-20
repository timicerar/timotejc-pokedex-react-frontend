import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePokemonMove } from '~/api/pokemon/hooks';
import Badge from '~/components/components/Badge/Badge';
import Typography from '~/components/components/Typography/Typography';
import type { PokemonMoveContentProps } from '~/components/compositions/PokemonMoveCard/Components/PokemonMoveContent/PokemonMoveContent.interface';
import PokemonMoveError from '~/components/compositions/PokemonMoveCard/Components/PokemonMoveError/PokemonMoveError';
import PokemonMoveSkeleton from '~/components/compositions/PokemonMoveCard/Components/PokemonMoveSkeleton/PokemonMoveSkeleton';
import type { PokemonMoveCategory } from '~/constants/pokemon-move-categories';
import type { PokemonType } from '~/constants/pokemon-types';
import { TypographyTypes } from '~/constants/typography';
import { formatDashedLabel } from '~/utils/stringUtils';
import classes from './PokemonMoveContent.module.scss';

const PokemonMoveContent = ({ id }: PokemonMoveContentProps) => {
  const { t } = useTranslation();
  const { data: move, isLoading, isError } = usePokemonMove({ id });

  const type = move?.type?.name as PokemonType;
  const category = move?.damage_class?.name as PokemonMoveCategory;

  const description = useMemo(() => {
    return move?.flavor_text_entries
      ?.find((entry) => entry?.language?.name === 'en')
      ?.flavor_text?.replace(/[\n\f­]/g, ' ');
  }, [move?.flavor_text_entries]);

  if (isLoading) {
    return <PokemonMoveSkeleton />;
  }

  if (isError || !move) {
    return <PokemonMoveError />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Typography type={TypographyTypes.CARD_TITLE} className={classes.name}>
          {formatDashedLabel(move?.name)}
        </Typography>
        {description && (
          <Typography
            type={TypographyTypes.BODY_SM}
            color="muted-foreground"
            className={classes.description}
          >
            {description}
          </Typography>
        )}
      </div>
      <div className={classes.right}>
        <Badge variant={type}>{t(`pokemonTypes.${type}`)}</Badge>
        <Typography
          type={TypographyTypes.CAPTION}
          color="muted-foreground"
          uppercase
          className={classes.meta}
        >
          {t(`pokemonMoveCategories.${category}`)}
        </Typography>
        {move?.power && (
          <Typography
            type={TypographyTypes.CAPTION}
            color="muted-foreground"
            className={classes.meta}
          >
            {t('pokemonDetails.movePower', { power: move.power })}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default PokemonMoveContent;
