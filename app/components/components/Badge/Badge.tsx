import classNames from 'classnames';
import type { BadgeProps } from '~/components/components/Badge/Badge.interface';
import { BadgeVariants } from '~/constants/badge';
import classes from './Badge.module.scss';

const Badge = ({
  variant = BadgeVariants.DEFAULT,
  className,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={classNames(classes.badge, classes[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
