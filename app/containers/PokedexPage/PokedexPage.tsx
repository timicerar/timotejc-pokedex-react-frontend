import Container from '~/components/components/Container/Container';
import PokemonFilters from '~/components/compositions/PokemonFilters/PokemonFilters';
import PokemonList from '~/components/compositions/PokemonList/PokemonList';
import ScrollToTop from '~/components/compositions/ScrollToTop/ScrollToTop';
import { useLayoutFilters } from '~/components/layouts/DefaultLayout/hooks/useLayoutFilters';

const PokedexPage = () => {
  useLayoutFilters(<PokemonFilters />);

  return (
    <Container>
      <PokemonList />
      <ScrollToTop />
    </Container>
  );
};

export default PokedexPage;
