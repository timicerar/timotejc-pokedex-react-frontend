import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '~/components/components/Input/Input';
import classes from '~/components/compositions/PokemonFilters/PokemonFilters.module.scss';
import SelectPokemonGeneration from '~/components/compositions/SelectPokemonGeneration/SelectPokemonGeneration';
import SelectPokemonType from '~/components/compositions/SelectPokemonType/SelectPokemonType';

const PokemonFilters = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGeneration, setSelectedGeneration] = useState('');

  return (
    <div className={classes.filters}>
      <div className={classes.search}>
        <Input
          placeholder={t('pokemonFilters.searchPlaceholder')}
          leadingIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
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
    </div>
  );
};

export default PokemonFilters;
