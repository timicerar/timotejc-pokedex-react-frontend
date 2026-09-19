import classNames from 'classnames';
import type { DividerProps } from '~/components/components/Divider/Divider.interface';
import classes from './Divider.module.scss';

const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={classNames(classes.divider, className)}
      {...props}
    />
  );
};

export default Divider;
