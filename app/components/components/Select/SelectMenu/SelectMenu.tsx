import Divider from '~/components/components/Divider/Divider';
import type { SelectOptionData } from '~/components/components/Select/Select.interface';
import type { SelectMenuProps } from '~/components/components/Select/SelectMenu/SelectMenu.interface';
import SelectOption from '~/components/components/Select/SelectOption/SelectOption';
import SelectResetOption from '~/components/components/Select/SelectOption/SelectResetOption';
import classes from './SelectMenu.module.scss';

const SelectMenu = <T extends SelectOptionData = SelectOptionData>({
  ref,
  id,
  label,
  multiple,
  options,
  selectedValues,
  hasSelection,
  resetLabel,
  renderOption,
  onSelectOption,
  onReset,
  onOptionKeyDown,
}: SelectMenuProps<T>) => {
  return (
    <div className={classes.menu}>
      <div
        ref={ref}
        role="listbox"
        id={id}
        aria-multiselectable={multiple || undefined}
        aria-label={label}
        className={classes.list}
      >
        {hasSelection && (
          <>
            <SelectResetOption
              label={resetLabel}
              onSelect={onReset}
              onKeyDown={(event) => onOptionKeyDown(event, onReset)}
            />
            <Divider />
          </>
        )}

        {options.map((option) => {
          const selected = selectedValues.includes(option.value);

          return (
            <SelectOption
              key={option.value}
              option={option}
              selected={selected}
              renderOption={renderOption}
              onSelect={() => onSelectOption(option.value)}
              onKeyDown={(event) =>
                onOptionKeyDown(event, () => onSelectOption(option.value))
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectMenu;
