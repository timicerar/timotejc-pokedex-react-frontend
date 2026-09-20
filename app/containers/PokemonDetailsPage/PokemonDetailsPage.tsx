import { useParams } from 'react-router';
import { usePokemon } from '~/api/pokemon/hooks';
import Container from '~/components/components/Container/Container';
import NotFound from '~/components/compositions/NotFound/NotFound';
import PokemonDetails from '~/components/compositions/PokemonDetails/PokemonDetails';
import PokemonDetailsSkeleton from '~/components/compositions/PokemonDetails/PokemonDetailsSkeleton/PokemonDetailsSkeleton';
import { NotFoundTypes } from '~/constants/not-found';

const PokemonDetailsPage = () => {
  const { pokemon: pokemonName } = useParams();
  const {
    data: pokemon,
    isLoading,
    isError,
  } = usePokemon({ name: pokemonName || '' });

  if (isLoading) {
    return <PokemonDetailsSkeleton />;
  }

  if (isError || !pokemon) {
    return (
      <Container center>
        <NotFound type={NotFoundTypes.POKEMON_DETAILS} />
      </Container>
    );
  }

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonDetailsPage;
