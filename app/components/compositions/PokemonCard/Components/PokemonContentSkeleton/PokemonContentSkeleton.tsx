import Skeleton from '~/components/components/Skeleton/Skeleton';
import classes from './PokemonContentSkeleton.module.scss';

const PokemonContentSkeleton = () => {
  return (
    <>
      <Skeleton className={classes.id} />
      <Skeleton className={classes.image} />
      <div className={classes.wrapper}>
        <Skeleton className={classes.name} />
        <div className={classes.types}>
          <Skeleton className={classes.badge} />
        </div>
      </div>
    </>
  );
};

export default PokemonContentSkeleton;
