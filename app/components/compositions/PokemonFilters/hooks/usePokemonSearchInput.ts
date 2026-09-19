import { useEffect, useRef, useState } from 'react';
import { useDebouncedValue } from '~/hooks/useDebouncedValue';

type UsePokemonSearchInputParams = {
  search: string;
  setSearch: (value: string) => void;
};

export const usePokemonSearchInput = ({
  search,
  setSearch,
}: UsePokemonSearchInputParams) => {
  const [searchInput, setSearchInput] = useState(search);
  const debouncedSearch = useDebouncedValue(searchInput, 300);

  const lastSyncedSearchRef = useRef(search);
  const setSearchRef = useRef(setSearch);

  setSearchRef.current = setSearch;

  useEffect(() => {
    const trimmed = debouncedSearch.trim();

    if (trimmed === lastSyncedSearchRef.current) {
      return;
    }

    lastSyncedSearchRef.current = trimmed;
    setSearchRef.current(trimmed);
  }, [debouncedSearch]);

  const resetSearchInput = () => {
    lastSyncedSearchRef.current = '';
    setSearchInput('');
  };

  return { searchInput, setSearchInput, resetSearchInput };
};
