import classNames from 'classnames';
import Card from '~/components/components/Card/Card';
import PokemonContentSkeleton from '~/components/compositions/PokemonCard/Components/PokemonContentSkeleton/PokemonContentSkeleton';
import classes from './PokemonCard.module.scss';

type PokemonCardSkeletonProps = {
  hideBadges?: boolean;
};

const PokemonCardSkeleton = ({ hideBadges }: PokemonCardSkeletonProps) => {
  return (
    <Card
      fullWidth
      className={classNames(classes.card, { [classes.noBadges]: hideBadges })}
    >
      <PokemonContentSkeleton hideBadges={hideBadges} />
    </Card>
  );
};

export default PokemonCardSkeleton;
