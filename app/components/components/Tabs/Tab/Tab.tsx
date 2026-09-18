import classNames from 'classnames';
import type { KeyboardEvent } from 'react';
import { useTabsContext } from '~/components/components/Tabs/hooks/useTabsContext';
import type { TabProps } from '~/components/components/Tabs/Tab/Tab.interface';
import classes from '~/components/components/Tabs/Tab/Tab.module.scss';
import { focusTabAt } from '~/utils/tabsUtils';

const Tab = ({
  value,
  disabled,
  uppercase,
  className,
  children,
  onClick,
  onKeyDown,
  ...props
}: TabProps) => {
  const { value: activeValue, setValue, idBase } = useTabsContext();
  const active = value === activeValue;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    const list = event.currentTarget.closest('[role="tablist"]');

    if (!list) {
      return;
    }

    const tabs = Array.from(
      list.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)'),
    );
    const currentIndex = tabs.indexOf(event.currentTarget);

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        focusTabAt(list, currentIndex + 1);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        focusTabAt(list, currentIndex - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusTabAt(list, 0);
        break;
      case 'End':
        event.preventDefault();
        focusTabAt(list, tabs.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        setValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <button
      type="button"
      role="tab"
      id={`${idBase}-tab-${value}`}
      aria-controls={`${idBase}-panel-${value}`}
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      disabled={disabled}
      onClick={(event) => {
        onClick?.(event);
        setValue(value);
      }}
      onKeyDown={handleKeyDown}
      className={classNames(
        classes.tab,
        { [classes.active]: active, [classes.uppercase]: uppercase },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Tab;
