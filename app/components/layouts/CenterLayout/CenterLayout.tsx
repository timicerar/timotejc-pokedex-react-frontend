import { Outlet } from 'react-router';
import classes from '~/components/layouts/CenterLayout/CenterLayout.module.scss';

const CenterLayout = () => {
  return (
    <div className={classes.layout}>
      <Outlet />
    </div>
  );
};

export default CenterLayout;
