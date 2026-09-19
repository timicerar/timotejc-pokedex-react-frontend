import classNames from 'classnames';
import ProgressBar from '~/components/components/ProgressBar/ProgressBar';
import type { StatBarProps } from '~/components/components/StatBar/StatBar.interface';
import Typography from '~/components/components/Typography/Typography';
import { DEFAULT_STAT_MAX_VALUE } from '~/constants/stat-bar';
import classes from './StatBar.module.scss';

const StatBar = ({
  label,
  color,
  value,
  maxValue = DEFAULT_STAT_MAX_VALUE,
  maxWidth,
  minWidth,
  shimmer = false,
  className,
  style,
  ...props
}: StatBarProps) => {
  return (
    <div
      className={classNames(classes.stat, className)}
      style={{
        ...(maxWidth !== undefined && { maxWidth }),
        ...(minWidth !== undefined && { minWidth }),
        ...style,
      }}
      {...props}
    >
      <Typography
        as="span"
        type="label"
        uppercase
        color="muted-foreground"
        className={classes.label}
      >
        {label}
      </Typography>
      <ProgressBar
        className={classes.progress}
        value={value}
        maxValue={maxValue}
        color={color}
        shimmer={shimmer}
      />
      <Typography
        as="span"
        type="stat-value"
        align="right"
        className={classes.value}
      >
        {value}
      </Typography>
    </div>
  );
};

export default StatBar;
