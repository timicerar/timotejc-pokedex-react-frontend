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
        <Skeleton className={classes.tabSkeleton} />
      </div>
      <Container>
        <Skeleton className={classes.contentSkeleton} />
      </Container>
    </div>
  );
};

export default memo(PokemonDetailsSkeleton);
