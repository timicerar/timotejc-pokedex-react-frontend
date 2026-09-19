import { useInView } from 'react-intersection-observer';
import Card from '~/components/components/Card/Card';
import PokemonContent from '~/components/compositions/PokemonCard/Components/PokemonContent/PokemonContent';
import PokemonContentSkeleton from '~/components/compositions/PokemonCard/Components/PokemonContentSkeleton/PokemonContentSkeleton';
import type { PokemonCardProps } from '~/components/compositions/PokemonCard/PokemonCard.interface';
import classes from './PokemonCard.module.scss';

const PokemonCard = ({ name, onClick }: PokemonCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Card ref={ref} fullWidth onClick={onClick} className={classes.card}>
      {inView ? <PokemonContent name={name} /> : <PokemonContentSkeleton />}
    </Card>
  );
};

export default PokemonCard;
