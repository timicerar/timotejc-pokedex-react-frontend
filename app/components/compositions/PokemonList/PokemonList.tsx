import { usePokemons } from '~/api/pokemon/hooks';
import NotFound from '~/components/compositions/NotFound/NotFound';
import PokemonListSkeleton from '~/components/compositions/PokemonList/PokemonListSkeleton';
import PokemonPlainList from '~/components/compositions/PokemonList/PokemonPlainList';
import PokemonVirtualizedList from '~/components/compositions/PokemonList/PokemonVirtualizedList';
import { NotFoundTypes } from '~/constants/not-found';
import { usePokemonFilters } from '~/hooks/usePokemonFilters';
import { usePokemonListMode } from '~/hooks/usePokemonListMode';

const PokemonList = () => {
  const { filters } = usePokemonFilters();
  const { isVirtualized, maxItems, limit } = usePokemonListMode();

  const {
    items,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePokemons(filters, { maxItems, limit });

  if (isLoading) {
    return <PokemonListSkeleton />;
  }

  if (isError || !items?.length) {
    return <NotFound type={NotFoundTypes.POKEMON_LIST} />;
  }

  if (isVirtualized) {
    return (
      <PokemonVirtualizedList
        items={items}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    );
  }

  return (
    <PokemonPlainList
      items={items}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
};

export default PokemonList;
