import classNames from 'classnames';
import { useDragScroll } from '~/components/components/Tabs/hooks/useDragScroll';
import type { TabsListProps } from '~/components/components/Tabs/TabsList/TabsList.interface';
import classes from './TabsList.module.scss';

const TabsList = ({
  wrap = true,
  maxWidth,
  className,
  style,
  children,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onPointerLeave,
  onClickCapture,
  ...props
}: TabsListProps) => {
  const dragScroll = useDragScroll(!wrap);

  return (
    <div
      role="tablist"
      className={classNames(
        classes.tabsList,
        wrap ? classes.equalWidth : classes.scrollable,
        className,
      )}
      style={{
        ...(maxWidth !== undefined && { maxWidth }),
        ...style,
      }}
      onPointerDown={(event) => dragScroll.onPointerDown(event, onPointerDown)}
      onPointerMove={(event) => dragScroll.onPointerMove(event, onPointerMove)}
      onPointerUp={(event) => dragScroll.onPointerUp(event, onPointerUp)}
      onPointerCancel={(event) =>
        dragScroll.onPointerCancel(event, onPointerCancel)
      }
      onPointerLeave={(event) =>
        dragScroll.onPointerLeave(event, onPointerLeave)
      }
      onClickCapture={(event) =>
        dragScroll.onClickCapture(event, onClickCapture)
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default TabsList;
