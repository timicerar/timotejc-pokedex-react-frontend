import { useSearchParams } from 'react-router';

export const usePokemonListMode = () => {
  const [searchParams] = useSearchParams();
  const maxItemsParam = searchParams.get('maxItems');
  const limitParam = searchParams.get('limit');
  const maxItems = maxItemsParam ? Number(maxItemsParam) : null;
  const limit = limitParam ? Number(limitParam) : null;

  return {
    isVirtualized: maxItems === null,
    maxItems,
    limit,
  };
};
