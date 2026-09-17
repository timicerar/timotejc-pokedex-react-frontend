import type { HTMLAttributes } from 'react';
import type { ColorToken } from '~/constants/colors';
import type { TypographyElement, TypographyType } from '~/constants/typography';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyElement;
  type?: TypographyType;
  color?: ColorToken;
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
}
