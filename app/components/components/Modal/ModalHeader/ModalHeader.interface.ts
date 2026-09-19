import type { HTMLAttributes, ReactNode } from 'react';

export type ModalHeaderProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  title?: ReactNode;
  onClose: () => void;
  closeLabel?: string;
  hideClose?: boolean;
};
