import classNames from 'classnames';
import type { ButtonProps } from '~/components/components/Button/Button.interface';
import classes from '~/components/components/Button/Button.module.scss';
import { ButtonSizes, ButtonVariants } from '~/constants/button';

const Button = ({
  type = 'button',
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.DEFAULT,
  ariaLabel,
  disabled,
  leadingIcon,
  trailingIcon,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classNames(
        classes.button,
        classes[variant],
        classes[size],
        { [classes.fullWidth]: fullWidth },
        className,
      )}
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
};

export default Button;
