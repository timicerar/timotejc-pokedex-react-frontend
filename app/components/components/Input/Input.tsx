import classNames from 'classnames';
import type { InputProps } from '~/components/components/Input/Input.interface';
import classes from './Input.module.scss';

const Input = ({
  type = 'text',
  leadingIcon,
  trailingIcon,
  disabled,
  maxWidth,
  className,
  ref,
  ...props
}: InputProps) => {
  return (
    <div
      className={classNames(classes.wrapper, {
        [classes.disabled]: disabled,
      })}
      style={maxWidth !== undefined ? { maxWidth } : undefined}
    >
      {leadingIcon && (
        <span className={classes.leadingIcon}>{leadingIcon}</span>
      )}
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={classNames(
          classes.input,
          {
            [classes.withLeadingIcon]: Boolean(leadingIcon),
            [classes.withTrailingIcon]: Boolean(trailingIcon),
          },
          className,
        )}
        {...props}
      />
      {trailingIcon && (
        <span className={classes.trailingIcon}>{trailingIcon}</span>
      )}
    </div>
  );
};

export default Input;
