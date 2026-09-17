import classNames from 'classnames';
import type { BadgeProps } from '~/components/components/Badge/Badge.interface';
import classes from '~/components/components/Badge/Badge.module.scss';
import { BadgeVariants } from '~/constants/badge';

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
