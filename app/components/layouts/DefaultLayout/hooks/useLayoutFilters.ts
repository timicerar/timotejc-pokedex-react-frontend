import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import type { DefaultLayoutContext } from '~/components/layouts/DefaultLayout/DefaultLayout.interface';

export const useLayoutFilters = (filters: ReactNode) => {
  const { setFilters } = useOutletContext<DefaultLayoutContext>();

  useEffect(() => {
    setFilters(filters);

    return () => setFilters(null);
  }, [filters, setFilters]);
};
