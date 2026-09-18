import { useContext } from 'react';
import { TabsContext } from '~/components/components/Tabs/TabsContext';

export const useTabsContext = () => {
  return useContext(TabsContext);
};
