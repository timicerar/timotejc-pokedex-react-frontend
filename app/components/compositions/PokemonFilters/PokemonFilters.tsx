import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '~/components/components/Input/Input';
import SelectPokemonGeneration from '~/components/compositions/SelectPokemonGeneration/SelectPokemonGeneration';
import SelectPokemonType from '~/components/compositions/SelectPokemonType/SelectPokemonType';
import type { PokemonGeneration } from '~/constants/pokemon-generations';
import type { PokemonType } from '~/constants/pokemon-types';
import { useDebouncedValue } from '~/hooks/useDebouncedValue';
import { usePokemonFilters } from '~/hooks/usePokemonFilters';
import classes from './PokemonFilters.module.scss';

const PokemonFilters = () => {
  const { t } = useTranslation();
  const { filters, setSearch, setTypes, setGenerations } = usePokemonFilters();

  const [searchInput, setSearchInput] = useState(filters?.search ?? '');
  const debouncedSearch = useDebouncedValue(searchInput, 300);

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  return (
    <div className={classes.filters}>
      <div className={classes.search}>
        <Input
          placeholder={t('pokemonFilters.searchPlaceholder')}
          leadingIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <SelectPokemonType
        multiple
        value={filters?.type}
        onChange={(next) => setTypes(next as PokemonType[])}
      />
      <SelectPokemonGeneration
        multiple
        value={filters?.generation}
        onChange={(next) => setGenerations(next as PokemonGeneration[])}
      />
    </div>
  );
};

export default PokemonFilters;
