import { createContext } from 'react';

export type TabsContextType = {
  value: string;
  setValue: (value: string) => void;
  idBase: string;
};

export const TabsContext = createContext<TabsContextType>({
  value: '',
  setValue: async () => {
    return;
  },
  idBase: '',
});
