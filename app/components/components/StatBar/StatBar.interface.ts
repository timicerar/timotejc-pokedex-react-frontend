import type { HTMLAttributes } from 'react';
import type { StatColor } from '~/constants/stat-bar';

export type StatBarProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  label: string;
  color: StatColor;
  value: number;
  maxValue?: number;
  maxWidth?: string | number;
  minWidth?: string | number;
  shimmer?: boolean;
};
