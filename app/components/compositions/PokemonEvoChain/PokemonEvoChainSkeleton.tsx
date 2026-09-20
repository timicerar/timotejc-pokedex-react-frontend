import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import PokemonCardSkeleton from '~/components/compositions/PokemonCard/PokemonCardSkeleton';
import classes from './PokemonEvoChain.module.scss';

const PokemonEvoChainSkeleton = () => {
  return (
    <div className={classes.row}>
      <div className={classes.step}>
        <div className={classes.node}>
          <PokemonCardSkeleton hideBadges />
        </div>
      </div>
      <div className={classes.step}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={classes.arrow}
          aria-hidden="true"
        />
        <div className={classes.node}>
          <PokemonCardSkeleton hideBadges />
        </div>
      </div>
      <div className={classes.step}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={classes.arrow}
          aria-hidden="true"
        />
        <div className={classes.node}>
          <PokemonCardSkeleton hideBadges />
        </div>
      </div>
    </div>
  );
};

export default memo(PokemonEvoChainSkeleton);
