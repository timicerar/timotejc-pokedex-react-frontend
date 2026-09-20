import { memo } from 'react';
import Container from '~/components/components/Container/Container';
import Skeleton from '~/components/components/Skeleton/Skeleton';
import classes from './PokemonDetailsSkeleton.module.scss';

const PokemonDetailsSkeleton = () => {
  return (
    <div className={classes.root}>
      <Container className={classes.hero}>
        <Skeleton className={classes.heroSkeleton} />
      </Container>
      <div className={classes.tabsBar}>
        <div className={classes.tabsSkeleton}>
          <Skeleton className={classes.tabSkeleton} />
          <Skeleton className={classes.tabSkeleton} />
          <Skeleton className={classes.tabSkeleton} />
          <Skeleton className={classes.tabSkeleton} />
        </div>
      </div>
      <Container>
        <Skeleton className={classes.contentSkeleton} />
      </Container>
    </div>
  );
};

export default memo(PokemonDetailsSkeleton);
