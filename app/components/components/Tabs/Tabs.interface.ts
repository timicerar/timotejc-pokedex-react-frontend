import type { HTMLAttributes, ReactNode } from 'react';

export type TabsProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
};
