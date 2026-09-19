import classNames from 'classnames';
import { useCallback, useId, useMemo, useState } from 'react';
import type { TabsProps } from '~/components/components/Tabs/Tabs.interface';
import { TabsContext } from '~/components/components/Tabs/TabsContext';
import classes from './Tabs.module.scss';

const Tabs = ({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) => {
  const idBase = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);

  const activeValue = useMemo(
    () => value ?? internalValue,
    [value, internalValue],
  );

  const setValue = useCallback(
    (next: string) => {
      if (value === undefined) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    },
    [value, onValueChange],
  );

  const context = useMemo(
    () => ({ value: activeValue, setValue, idBase }),
    [activeValue, setValue, idBase],
  );

  return (
    <TabsContext.Provider value={context}>
      <div className={classNames(classes.tabs, className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export default Tabs;
