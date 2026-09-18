import { useMemo, useState } from 'react';
import SelectPokemonGeneration from '~/components/compositions/SelectPokemonGeneration/SelectPokemonGeneration';
import SelectPokemonType from '~/components/compositions/SelectPokemonType/SelectPokemonType';
import { useLayoutFilters } from '~/components/layouts/DefaultLayout/hooks/useLayoutFilters';

const PokedexPage = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGeneration, setSelectedGeneration] = useState('');

  useLayoutFilters(
    useMemo(
      () => (
        <>
          <SelectPokemonType
            multiple
            value={selectedTypes}
            onChange={(next) => setSelectedTypes(next as string[])}
          />

          <SelectPokemonGeneration
            multiple
            value={selectedGeneration}
            onChange={(next) => setSelectedGeneration(next as string)}
          />
        </>
      ),
      [selectedTypes, selectedGeneration],
    ),
  );

  return null;
};

export default PokedexPage;
