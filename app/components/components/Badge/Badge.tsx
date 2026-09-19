import classNames from 'classnames';
import type { BadgeProps } from '~/components/components/Badge/Badge.interface';
import { BadgeSizes, BadgeVariants } from '~/constants/badge';
import classes from './Badge.module.scss';

const Badge = ({
  variant = BadgeVariants.DEFAULT,
  size = BadgeSizes.DEFAULT,
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={classNames(
        classes.badge,
        classes[variant],
        { [classes.sm]: size === BadgeSizes.SM },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
