import Card from '~/components/components/Card/Card';
import Typography from '~/components/components/Typography/Typography';
import type { PokemonInfoCardProps } from '~/components/compositions/PokemonInfoCard/PokemonInfoCard.interface';
import { TypographyTypes } from '~/constants/typography';
import classes from './PokemonInfoCard.module.scss';

const PokemonInfoCard = ({ title, value }: PokemonInfoCardProps) => {
  const displayValue = Array.isArray(value) ? value.join(', ') : value;

  return (
    <Card className={classes.card}>
      <Typography
        type={TypographyTypes.LABEL}
        color="muted-foreground"
        uppercase
      >
        {title}
      </Typography>
      <Typography type={TypographyTypes.ID_LABEL_LG} className={classes.value}>
        {displayValue}
      </Typography>
    </Card>
  );
};

export default PokemonInfoCard;
