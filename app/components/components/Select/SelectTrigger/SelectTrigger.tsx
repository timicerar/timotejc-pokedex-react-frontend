import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { SelectTriggerProps } from '~/components/components/Select/SelectTrigger/SelectTrigger.interface';
import Typography from '~/components/components/Typography/Typography';
import classes from './SelectTrigger.module.scss';

const SelectTrigger = ({
  ref,
  id,
  listboxId,
  label,
  open,
  triggerLabel,
  leadingIcon,
  disabled,
  onToggle,
  onTriggerKeyDown,
  className,
  ...props
}: SelectTriggerProps) => {
  return (
    <button
      {...props}
      ref={ref}
      type="button"
      id={id}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls={listboxId}
      aria-label={label}
      disabled={disabled}
      onClick={onToggle}
      onKeyDown={onTriggerKeyDown}
      className={classNames(
        classes.trigger,
        { [classes.open]: open },
        className,
      )}
    >
      {leadingIcon && (
        <span className={classes.leadingIcon}>{leadingIcon}</span>
      )}
      <Typography as="span" type="body-sm" className={classes.value}>
        {triggerLabel}
      </Typography>
      <FontAwesomeIcon icon={faChevronDown} className={classes.chevron} />
    </button>
  );
};

export default SelectTrigger;
