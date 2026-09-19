import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { SelectOptionData } from '~/components/components/Select/Select.interface';
import type { SelectOptionProps } from '~/components/components/Select/SelectOption/SelectOption.interface';
import Typography from '~/components/components/Typography/Typography';
import classes from './SelectOption.module.scss';

const SelectOption = <T extends SelectOptionData = SelectOptionData>({
  option,
  selected,
  renderOption,
  onSelect,
  onKeyDown,
}: SelectOptionProps<T>) => {
  return (
    <div
      role="option"
      aria-selected={selected}
      tabIndex={-1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={classNames(classes.option, { [classes.selected]: selected })}
    >
      {renderOption ? (
        renderOption(option, { selected })
      ) : (
        <>
          <FontAwesomeIcon
            icon={faCheck}
            className={classNames(classes.check, {
              [classes.visible]: selected,
            })}
          />
          {option.leadingIcon && (
            <span className={classes.optionIcon}>{option.leadingIcon}</span>
          )}
          <Typography as="span" type="body-sm">
            {option.label}
          </Typography>
        </>
      )}
    </div>
  );
};

export default SelectOption;
