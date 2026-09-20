import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { usePokemon } from '~/api/pokemon/hooks';
import Card from '~/components/components/Card/Card';
import PokemonContent from '~/components/compositions/PokemonCard/Components/PokemonContent/PokemonContent';
import PokemonContentSkeleton from '~/components/compositions/PokemonCard/Components/PokemonContentSkeleton/PokemonContentSkeleton';
import type { PokemonCardProps } from '~/components/compositions/PokemonCard/PokemonCard.interface';
import classes from './PokemonCard.module.scss';

const PokemonCard = ({
  name,
  onClick,
  active,
  hideBadges,
  priority,
}: PokemonCardProps) => {
  const { data: cachedPokemon } = usePokemon({ name }, { enabled: false });

  const { ref, inView } = useInView({
    triggerOnce: true,
    skip: priority || Boolean(cachedPokemon),
  });

  const shouldRenderContent = priority || inView || Boolean(cachedPokemon);

  return (
    <Card
      ref={ref}
      fullWidth
      active={active}
      onClick={onClick}
      className={classNames(classes.card, { [classes.noBadges]: hideBadges })}
    >
      {shouldRenderContent ? (
        <PokemonContent
          name={name}
          hideBadges={hideBadges}
          priority={priority}
        />
      ) : (
        <PokemonContentSkeleton hideBadges={hideBadges} />
      )}
    </Card>
  );
};

export default PokemonCard;
