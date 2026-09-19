import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { SelectResetOptionProps } from '~/components/components/Select/SelectOption/SelectResetOption.interface';
import Typography from '~/components/components/Typography/Typography';
import classes from './SelectOption.module.scss';

const SelectResetOption = ({
  label,
  onSelect,
  onKeyDown,
}: SelectResetOptionProps) => {
  return (
    <div
      role="option"
      aria-selected={false}
      tabIndex={-1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={classNames(classes.option, classes.reset)}
    >
      <FontAwesomeIcon icon={faXmark} className={classes.optionIcon} />
      <Typography as="span" type="body-sm">
        {label}
      </Typography>
    </div>
  );
};

export default SelectResetOption;
