import classNames from 'classnames';
import { useEffect, useState } from 'react';
import type { ProgressBarProps } from '~/components/components/ProgressBar/ProgressBar.interface';
import classes from '~/components/components/ProgressBar/ProgressBar.module.scss';
import { DEFAULT_PROGRESS_MAX_VALUE } from '~/constants/progress-bar';

const ProgressBar = ({
  value,
  maxValue = DEFAULT_PROGRESS_MAX_VALUE,
  color,
  maxWidth,
  shimmer = true,
  className,
  style,
  ...props
}: ProgressBarProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimatedValue(value));
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const percentage = Math.min(
    100,
    Math.max(0, (animatedValue / maxValue) * 100),
  );

  return (
    <div
      className={classNames(classes.track, className)}
      style={{ ...(maxWidth !== undefined && { maxWidth }), ...style }}
      {...props}
    >
      <div
        className={classNames(classes.fill, { [classes.shimmer]: shimmer })}
        style={{ width: `${percentage}%`, background: color }}
      />
    </div>
  );
};

export default ProgressBar;
