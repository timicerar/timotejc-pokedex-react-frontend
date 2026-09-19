import { memo } from 'react';
import PokemonCardSkeleton from '~/components/compositions/PokemonCard/PokemonCardSkeleton';
import { INITIAL_SKELETON_COUNT } from '~/components/compositions/PokemonList/hooks/useColumnCount';
import classes from './PokemonList.module.scss';

const PokemonListSkeleton = () => {
  return (
    <div className={classes.grid}>
      {Array.from({ length: INITIAL_SKELETON_COUNT }).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default memo(PokemonListSkeleton);
