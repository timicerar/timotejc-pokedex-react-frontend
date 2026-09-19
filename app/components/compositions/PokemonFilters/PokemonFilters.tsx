import {
  faFilterCircleXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import Input from '~/components/components/Input/Input';
import { usePokemonSearchInput } from '~/components/compositions/PokemonFilters/hooks/usePokemonSearchInput';
import SelectPokemonGeneration from '~/components/compositions/SelectPokemonGeneration/SelectPokemonGeneration';
import SelectPokemonType from '~/components/compositions/SelectPokemonType/SelectPokemonType';
import { ButtonVariants } from '~/constants/button';
import type { PokemonGeneration } from '~/constants/pokemon-generations';
import type { PokemonType } from '~/constants/pokemon-types';
import { usePokemonFilters } from '~/hooks/usePokemonFilters';
import classes from './PokemonFilters.module.scss';

const PokemonFilters = () => {
  const { t } = useTranslation();
  const { filters, setSearch, setTypes, setGenerations, clearFilters } =
    usePokemonFilters();

  const { searchInput, setSearchInput, resetSearchInput } =
    usePokemonSearchInput({ search: filters?.search ?? '', setSearch });

  const hasActiveFilters = Boolean(
    filters?.search || filters?.type?.length || filters?.generation?.length,
  );

  const handleClear = () => {
    resetSearchInput();
    clearFilters();
  };

  return (
    <div className={classes.filters}>
      <div className={classes.search}>
        <Input
          placeholder={t('pokemonFilters.searchPlaceholder')}
          leadingIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          onBlur={() => setSearchInput((prev) => prev.trim())}
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
      {hasActiveFilters && (
        <Button
          variant={ButtonVariants.ROUNDED}
          ariaLabel={t('pokemonFilters.clearFilters')}
          leadingIcon={<FontAwesomeIcon icon={faFilterCircleXmark} />}
          onClick={handleClear}
          className={classes.clear}
        />
      )}
    </div>
  );
};

export default PokemonFilters;
