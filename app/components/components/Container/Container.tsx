import classNames from 'classnames';
import type { ContainerProps } from '~/components/components/Container/Container.interface';
import classes from '~/components/components/Container/Container.module.scss';

const Container = ({
  center,
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={classNames(
        classes.container,
        { [classes.center]: center },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
