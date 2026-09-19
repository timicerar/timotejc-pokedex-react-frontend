import classNames from 'classnames';
import { useTabsContext } from '~/components/components/Tabs/hooks/useTabsContext';
import type { TabContentProps } from '~/components/components/Tabs/TabContent/TabContent.interface';
import classes from './TabContent.module.scss';

const TabContent = ({
  value,
  className,
  hideOutline = false,
  children,
  ...props
}: TabContentProps) => {
  const { value: activeValue, idBase } = useTabsContext();

  if (value !== activeValue) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      tabIndex={0}
      id={`${idBase}-panel-${value}`}
      aria-labelledby={`${idBase}-tab-${value}`}
      className={classNames(
        classes.tabContent,
        { [classes.hideOutline]: hideOutline },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TabContent;
