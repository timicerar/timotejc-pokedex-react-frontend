import { getPokemons } from '~/api/pokemon';
import { PokemonQueryKeys } from '~/api/pokemon/queryKeys';
import HelmetMetadata from '~/components/components/HelmetMetadata/HelmetMetadata';
import PokedexPage from '~/containers/PokedexPage/PokedexPage';
import { prefetchInfiniteQuery } from '~/lib/queryClient';
import { getPokemonListConfigFromUrl } from '~/utils/filterUtils';
import type { Route } from './+types/pokedex';

export const clientLoader = ({ request }: Route.ClientLoaderArgs) => {
  const { hasFacetFilter, listLimit } = getPokemonListConfigFromUrl(
    new URL(request.url),
  );

  if (hasFacetFilter) {
    return;
  }

  prefetchInfiniteQuery({
    queryKey: PokemonQueryKeys.pokemonList({ limit: listLimit }),
    queryFn: ({ pageParam }) =>
      getPokemons({ limit: listLimit, offset: pageParam as number }),
    initialPageParam: 0,
  });
};

const Pokedex = () => {
  return (
    <>
      <HelmetMetadata />
      <PokedexPage />
    </>
  );
};

export default Pokedex;
