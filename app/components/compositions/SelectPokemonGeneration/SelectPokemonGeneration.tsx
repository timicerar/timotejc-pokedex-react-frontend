import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '~/components/components/Select/Select';
import PokemonGenerationOption from '~/components/compositions/SelectPokemonGeneration/PokemonGenerationOption/PokemonGenerationOption';
import type { SelectPokemonGenerationProps } from '~/components/compositions/SelectPokemonGeneration/SelectPokemonGeneration.interface';
import { getPokemonGenerationOptions } from '~/utils/pokemonGenerationUtils';

const SelectPokemonGeneration = ({
  label,
  placeholder,
  resetLabel,
  ...props
}: SelectPokemonGenerationProps) => {
  const { t } = useTranslation();

  const options = useMemo(() => getPokemonGenerationOptions(t), [t]);
  const allGenerationsLabel = t('selectPokemonGeneration.allGenerations');

  return (
    <Select
      label={label ?? t('selectPokemonGeneration.label')}
      placeholder={placeholder ?? allGenerationsLabel}
      resetLabel={resetLabel ?? allGenerationsLabel}
      {...props}
      options={options}
      renderOption={(option, { selected }) => (
        <PokemonGenerationOption option={option} selected={selected} />
      )}
    />
  );
};

export default SelectPokemonGeneration;
