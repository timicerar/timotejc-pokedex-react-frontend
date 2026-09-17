import type { HTMLAttributes } from 'react';

export type SkeletonProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  borderRadius?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
};
