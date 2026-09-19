import classNames from 'classnames';
import type { SkeletonProps } from '~/components/components/Skeleton/Skeleton.interface';
import classes from './Skeleton.module.scss';

const Skeleton = ({
  borderRadius,
  maxWidth,
  minHeight,
  className,
  style,
  ...props
}: SkeletonProps) => {
  return (
    <div
      aria-hidden="true"
      className={classNames(classes.skeleton, className)}
      style={{
        ...(borderRadius !== undefined && { borderRadius }),
        ...(maxWidth !== undefined && { maxWidth }),
        ...(minHeight !== undefined && { minHeight }),
        ...style,
      }}
      {...props}
    />
  );
};

export default Skeleton;
