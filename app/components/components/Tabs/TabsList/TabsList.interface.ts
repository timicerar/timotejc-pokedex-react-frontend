import type { HTMLAttributes, ReactNode } from 'react';

export type TabsListProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  wrap?: boolean;
  maxWidth?: string | number;
  children?: ReactNode;
};
