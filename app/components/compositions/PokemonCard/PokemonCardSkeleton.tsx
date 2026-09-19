import Card from '~/components/components/Card/Card';
import PokemonContentSkeleton from '~/components/compositions/PokemonCard/Components/PokemonContentSkeleton/PokemonContentSkeleton';
import classes from './PokemonCard.module.scss';

const PokemonCardSkeleton = () => {
  return (
    <Card fullWidth className={classes.card}>
      <PokemonContentSkeleton />
    </Card>
  );
};

export default PokemonCardSkeleton;
