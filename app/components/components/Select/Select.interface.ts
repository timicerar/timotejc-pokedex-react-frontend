import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type SelectOptionData = {
  value: string;
  label: string;
  leadingIcon?: ReactNode;
};

export type RenderSelectOption<T extends SelectOptionData> = (
  option: T,
  state: { selected: boolean },
) => ReactNode;

export type SelectProps<T extends SelectOptionData = SelectOptionData> = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'value' | 'defaultValue' | 'onChange' | 'children'
> & {
  options: T[];
  renderOption?: RenderSelectOption<T>;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  label: string;
  placeholder?: string;
  resetLabel?: string;
  leadingIcon?: ReactNode;
  maxWidth?: string | number;
};
