import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import NavBar from '~/components/compositions/NavBar/NavBar';
import type { DefaultLayoutContext } from '~/components/layouts/DefaultLayout/DefaultLayout.interface';
import classes from './DefaultLayout.module.scss';

const DefaultLayout = () => {
  const [filters, setFilters] = useState<ReactNode>(null);
  const context = useMemo<DefaultLayoutContext>(() => ({ setFilters }), []);

  return (
    <div
      className={classNames(classes.layout, { [classes.noFilters]: !filters })}
    >
      <NavBar />
      {filters && <div className={classes.filters}>{filters}</div>}
      <main>
        <Outlet context={context} />
      </main>
    </div>
  );
};

export default DefaultLayout;
