import type { HTMLAttributes } from 'react';
import type { Color } from '~/constants/colors';
import type { TypographyElement, TypographyType } from '~/constants/typography';

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: TypographyElement;
  type?: TypographyType;
  color?: Color;
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
  uppercase?: boolean;
};
