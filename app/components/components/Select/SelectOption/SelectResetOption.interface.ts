import type { KeyboardEvent } from 'react';

export type SelectResetOptionProps = {
  label: string;
  onSelect: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
};
