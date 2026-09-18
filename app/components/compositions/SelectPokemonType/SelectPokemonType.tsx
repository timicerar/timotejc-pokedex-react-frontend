import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '~/components/components/Select/Select';
import PokemonTypeOption from '~/components/compositions/SelectPokemonType/PokemonTypeOption/PokemonTypeOption';
import type { SelectPokemonTypeProps } from '~/components/compositions/SelectPokemonType/SelectPokemonType.interface';
import { getPokemonTypeOptions } from '~/utils/pokemonTypeUtils';

const SelectPokemonType = ({
  label,
  placeholder,
  resetLabel,
  ...props
}: SelectPokemonTypeProps) => {
  const { t } = useTranslation();

  const options = useMemo(() => getPokemonTypeOptions(t), [t]);
  const allTypesLabel = t('selectPokemonType.allTypes');

  return (
    <Select
      label={label ?? t('selectPokemonType.label')}
      placeholder={placeholder ?? allTypesLabel}
      resetLabel={resetLabel ?? allTypesLabel}
      {...props}
      options={options}
      renderOption={(option, { selected }) => (
        <PokemonTypeOption option={option} selected={selected} />
      )}
    />
  );
};

export default SelectPokemonType;
