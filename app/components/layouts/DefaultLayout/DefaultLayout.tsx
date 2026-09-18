import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import NavBar from '~/components/compositions/NavBar/NavBar';
import type { DefaultLayoutContext } from '~/components/layouts/DefaultLayout/DefaultLayout.interface';
import classes from '~/components/layouts/DefaultLayout/DefaultLayout.module.scss';

const DefaultLayout = () => {
  const [filters, setFilters] = useState<ReactNode>(null);
  const context = useMemo<DefaultLayoutContext>(() => ({ setFilters }), []);

  return (
    <div className={classes.layout}>
      <NavBar />

      {filters && <div className={classes.filters}>{filters}</div>}

      <main className={classes.content}>
        <Outlet context={context} />
      </main>
    </div>
  );
};

export default DefaultLayout;
