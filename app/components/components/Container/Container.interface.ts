import type { HTMLAttributes, ReactNode } from 'react';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  center?: boolean;
  maxWidth?: number;
  children?: ReactNode;
};
