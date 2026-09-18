import type {
  ButtonHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  Ref,
} from 'react';

export type SelectTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: Ref<HTMLButtonElement>;
  id: string;
  listboxId: string;
  label: string;
  open: boolean;
  triggerLabel: string;
  leadingIcon?: ReactNode;
  onToggle: () => void;
  onTriggerKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
};
