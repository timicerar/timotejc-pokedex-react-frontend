import type { HTMLAttributes, ReactNode } from 'react';
import type { BadgeVariant } from '~/constants/badge';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  children?: ReactNode;
};
