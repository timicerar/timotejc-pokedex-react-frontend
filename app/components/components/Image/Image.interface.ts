import type { ImgHTMLAttributes } from 'react';

export type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> & {
  alt: string;
  wrapperClassName?: string;
  borderRadius?: string | number;
};
