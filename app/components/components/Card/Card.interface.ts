import type { HTMLAttributes, ReactNode } from 'react';
import type { CardPadding } from '~/constants/card';

export type CardProps = HTMLAttributes<HTMLElement> & {
  padding?: CardPadding;
  fullWidth?: boolean;
  noShadow?: boolean;
  active?: boolean;
  children?: ReactNode;
};
