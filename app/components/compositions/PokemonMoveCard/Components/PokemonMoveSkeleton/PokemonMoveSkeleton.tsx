import Skeleton from '~/components/components/Skeleton/Skeleton';
import classes from './PokemonMoveSkeleton.module.scss';

const PokemonMoveSkeleton = () => {
  return <Skeleton className={classes.skeleton} />;
};

export default PokemonMoveSkeleton;
