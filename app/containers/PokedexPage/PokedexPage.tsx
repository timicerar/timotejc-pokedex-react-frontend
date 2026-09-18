import PokemonFilters from '~/components/compositions/PokemonFilters/PokemonFilters';
import { useLayoutFilters } from '~/components/layouts/DefaultLayout/hooks/useLayoutFilters';

const PokedexPage = () => {
  useLayoutFilters(<PokemonFilters />);

  return null;
};

export default PokedexPage;
