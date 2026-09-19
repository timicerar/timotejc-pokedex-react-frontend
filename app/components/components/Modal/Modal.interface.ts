import type { ReactNode } from 'react';
import type { ModalType } from '~/constants/modal-provider';

export type ModalClasses = {
  dialog?: string;
  content?: string;
};

export type ModalProps = {
  type: ModalType;
  children: ReactNode;
  closeOnBackdropClick?: boolean;
  transitionDuration?: number;
  classes?: ModalClasses;
};
