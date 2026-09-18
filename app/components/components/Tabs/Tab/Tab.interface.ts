import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type TabProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'value'
> & {
  value: string;
  uppercase?: boolean;
  children?: ReactNode;
};
