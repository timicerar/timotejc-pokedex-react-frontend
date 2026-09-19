import { Outlet } from 'react-router';
import classes from './CenterLayout.module.scss';

const CenterLayout = () => {
  return (
    <div className={classes.layout}>
      <Outlet />
    </div>
  );
};

export default CenterLayout;
