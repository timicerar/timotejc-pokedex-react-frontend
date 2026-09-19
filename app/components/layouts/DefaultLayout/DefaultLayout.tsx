import classNames from 'classnames';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import NavBar from '~/components/compositions/NavBar/NavBar';
import type { DefaultLayoutContext } from '~/components/layouts/DefaultLayout/DefaultLayout.interface';
import { ElementIds } from '~/constants/element-ids';
import classes from './DefaultLayout.module.scss';

const DefaultLayout = () => {
  const [filters, setFilters] = useState<ReactNode>(null);
  const context = useMemo<DefaultLayoutContext>(() => ({ setFilters }), []);

  return (
    <div
      id={ElementIds.MAIN_CONTENT}
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
