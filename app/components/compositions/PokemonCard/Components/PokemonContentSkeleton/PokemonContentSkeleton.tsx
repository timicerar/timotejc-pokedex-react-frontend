import Skeleton from '~/components/components/Skeleton/Skeleton';
import classes from './PokemonContentSkeleton.module.scss';

type PokemonContentSkeletonProps = {
  hideBadges?: boolean;
};

const PokemonContentSkeleton = ({
  hideBadges = false,
}: PokemonContentSkeletonProps) => {
  return (
    <>
      <Skeleton className={classes.id} />
      <Skeleton className={classes.image} />
      <div className={classes.wrapper}>
        <Skeleton className={classes.name} />
        {!hideBadges && (
          <div className={classes.types}>
            <Skeleton className={classes.badge} />
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonContentSkeleton;
