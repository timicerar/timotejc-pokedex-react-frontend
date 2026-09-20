import { useInView } from 'react-intersection-observer';
import { usePokemonMove } from '~/api/pokemon/hooks';
import Card from '~/components/components/Card/Card';
import PokemonMoveContent from '~/components/compositions/PokemonMoveCard/Components/PokemonMoveContent/PokemonMoveContent';
import PokemonMoveSkeleton from '~/components/compositions/PokemonMoveCard/Components/PokemonMoveSkeleton/PokemonMoveSkeleton';
import type { PokemonMoveCardProps } from '~/components/compositions/PokemonMoveCard/PokemonMoveCard.interface';
import { CardPaddings } from '~/constants/card';
import classes from './PokemonMoveCard.module.scss';

const PokemonMoveCard = ({ id }: PokemonMoveCardProps) => {
  const { data: cachedMove } = usePokemonMove({ id }, { enabled: false });

  const { ref, inView } = useInView({
    triggerOnce: true,
    skip: Boolean(cachedMove),
  });

  const shouldRenderContent = inView || Boolean(cachedMove);

  return (
    <Card
      ref={ref}
      fullWidth
      padding={CardPaddings.DENSE}
      className={classes.card}
    >
      {shouldRenderContent ? (
        <PokemonMoveContent id={id} />
      ) : (
        <PokemonMoveSkeleton />
      )}
    </Card>
  );
};

export default PokemonMoveCard;
