import classNames from 'classnames';
import type { ContainerProps } from '~/components/components/Container/Container.interface';
import classes from './Container.module.scss';

const Container = ({
  center,
  maxWidth,
  className,
  style,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={classNames(
        classes.container,
        { [classes.center]: center, [classes.hasMaxWidth]: maxWidth },
        className,
      )}
      style={{ ...(maxWidth !== undefined && { maxWidth }), ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
