import type { HTMLAttributes, ReactNode } from 'react';
import type { BadgeSize, BadgeVariant } from '~/constants/badge';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children?: ReactNode;
};
