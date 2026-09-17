import type { HTMLAttributes } from 'react';

export type ProgressBarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  value: number;
  maxValue?: number;
  color: string;
  maxWidth?: string | number;
  shimmer?: boolean;
};
