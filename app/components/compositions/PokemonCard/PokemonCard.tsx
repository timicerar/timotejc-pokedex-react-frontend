import { useInView } from 'react-intersection-observer';
import { usePokemon } from '~/api/pokemon/hooks';
import Card from '~/components/components/Card/Card';
import PokemonContent from '~/components/compositions/PokemonCard/Components/PokemonContent/PokemonContent';
import PokemonContentSkeleton from '~/components/compositions/PokemonCard/Components/PokemonContentSkeleton/PokemonContentSkeleton';
import type { PokemonCardProps } from '~/components/compositions/PokemonCard/PokemonCard.interface';
import classes from './PokemonCard.module.scss';

const PokemonCard = ({ name, onClick }: PokemonCardProps) => {
  const { data: cachedPokemon } = usePokemon({ name }, { enabled: false });

  const { ref, inView } = useInView({
    triggerOnce: true,
    skip: Boolean(cachedPokemon),
  });

  const shouldRenderContent = inView || Boolean(cachedPokemon);

  return (
    <Card ref={ref} fullWidth onClick={onClick} className={classes.card}>
      {shouldRenderContent ? (
        <PokemonContent name={name} />
      ) : (
        <PokemonContentSkeleton />
      )}
    </Card>
  );
};

export default PokemonCard;
