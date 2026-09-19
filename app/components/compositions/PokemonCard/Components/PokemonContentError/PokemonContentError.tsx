import Typography from '~/components/components/Typography/Typography';
import { NotFoundTypes } from '~/constants/not-found';
import { TypographyTypes } from '~/constants/typography';
import { getNotFoundData } from '~/utils/notFoundUtils';
import classes from './PokemonContentError.module.scss';

const PokemonContentError = () => {
  const { title, description } = getNotFoundData(NotFoundTypes.POKEMON_DETAILS);

  return (
    <div className={classes.error}>
      <Typography as="h3" type={TypographyTypes.DISPLAY_BASE} uppercase>
        {title}
      </Typography>
      <Typography type={TypographyTypes.BODY_SM} color="muted-foreground">
        {description}
      </Typography>
    </div>
  );
};

export default PokemonContentError;
