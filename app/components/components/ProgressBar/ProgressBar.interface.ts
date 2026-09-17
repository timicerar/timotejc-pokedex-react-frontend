import type { HTMLAttributes } from 'react';
import type { ColorValue } from '~/constants/colors';

export type ProgressBarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  value: number;
  maxValue?: number;
  color: ColorValue;
  maxWidth?: string | number;
  shimmer?: boolean;
};
