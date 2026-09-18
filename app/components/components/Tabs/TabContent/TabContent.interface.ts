import type { HTMLAttributes, ReactNode } from 'react';

export type TabContentProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  value: string;
  hideOutline?: boolean;
  children?: ReactNode;
};
