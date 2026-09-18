import type { InputHTMLAttributes, ReactNode, Ref } from 'react';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type?: 'text';
  ref?: Ref<HTMLInputElement>;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  maxWidth?: string | number;
};
