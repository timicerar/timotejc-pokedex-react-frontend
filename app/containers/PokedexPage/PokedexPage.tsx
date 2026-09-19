import Container from '~/components/components/Container/Container';
import PokemonFilters from '~/components/compositions/PokemonFilters/PokemonFilters';
import PokemonList from '~/components/compositions/PokemonList/PokemonList';
import { useLayoutFilters } from '~/components/layouts/DefaultLayout/hooks/useLayoutFilters';

const PokedexPage = () => {
  useLayoutFilters(<PokemonFilters />);

  return (
    <Container>
      <PokemonList />
    </Container>
  );
};

export default PokedexPage;
