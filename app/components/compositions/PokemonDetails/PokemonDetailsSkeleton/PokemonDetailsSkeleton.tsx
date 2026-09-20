import { memo } from 'react';
import Container from '~/components/components/Container/Container';
import Skeleton from '~/components/components/Skeleton/Skeleton';
import classes from './PokemonDetailsSkeleton.module.scss';

const PokemonDetailsSkeleton = () => {
  return (
    <div className={classes.root}>
      <Container className={classes.hero}>
        <Skeleton className={classes.imageSkeleton} />
        <div className={classes.wrapper}>
          <Skeleton className={classes.idSkeleton} />
          <Skeleton className={classes.nameSkeleton} />
          <div className={classes.badges}>
            <Skeleton className={classes.badgeSkeleton} />
            <Skeleton className={classes.badgeSkeleton} />
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.tabsSkeleton}>
          <Skeleton className={classes.tabSkeleton} />
          <Skeleton className={classes.tabSkeleton} />
          <Skeleton className={classes.tabSkeleton} />
          <Skeleton className={classes.tabSkeleton} />
        </div>
        <Skeleton className={classes.contentSkeleton} />
      </Container>
    </div>
  );
};

export default memo(PokemonDetailsSkeleton);
