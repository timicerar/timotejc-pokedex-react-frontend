import { memo } from 'react';
import Skeleton from '~/components/components/Skeleton/Skeleton';
import classes from '../PokemonDetailsModal.module.scss';

const PokemonDetailsModalSkeleton = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Skeleton className={classes.imageSkeleton} />
        <Skeleton className={classes.idSkeleton} />
        <Skeleton className={classes.nameSkeleton} />
        <div className={classes.badges}>
          <Skeleton className={classes.badgeSkeleton} />
          <Skeleton className={classes.badgeSkeleton} />
        </div>
      </div>
      <Skeleton className={classes.statsSkeleton} />
      <Skeleton className={classes.weakSkeleton} />
      <Skeleton className={classes.buttonSkeleton} />
    </div>
  );
};

export default memo(PokemonDetailsModalSkeleton);
