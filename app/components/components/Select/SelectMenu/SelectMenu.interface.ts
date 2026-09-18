import type { KeyboardEvent, Ref } from 'react';
import type {
  RenderSelectOption,
  SelectOptionData,
} from '~/components/components/Select/Select.interface';

export type SelectMenuProps<T extends SelectOptionData = SelectOptionData> = {
  ref?: Ref<HTMLDivElement>;
  id: string;
  label: string;
  multiple: boolean;
  options: T[];
  selectedValues: string[];
  hasSelection: boolean;
  resetLabel: string;
  renderOption?: RenderSelectOption<T>;
  onSelectOption: (value: string) => void;
  onReset: () => void;
  onOptionKeyDown: (
    event: KeyboardEvent<HTMLDivElement>,
    onActivate: () => void,
  ) => void;
};
