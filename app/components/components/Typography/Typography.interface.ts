import type { HTMLAttributes } from 'react';
import type { ColorToken } from '~/constants/colors';
import type { TypographyElement, TypographyType } from '~/constants/typography';

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: TypographyElement;
  type?: TypographyType;
  color?: ColorToken;
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
  uppercase?: boolean;
};
