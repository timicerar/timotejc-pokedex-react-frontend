import type { MouseEvent, PointerEvent } from 'react';
import { useRef } from 'react';

const DRAG_THRESHOLD = 3;

type DragState = {
  active: boolean;
  captured: boolean;
  startX: number;
  startScrollLeft: number;
  moved: boolean;
};

// Mouse/pen drag-to-scroll for a horizontally-scrolling element. Touch
// already scrolls natively via overflow-x, so it's left alone here.
export const useDragScroll = (enabled: boolean) => {
  const drag = useRef<DragState>({
    active: false,
    captured: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const onPointerDown = (
    event: PointerEvent<HTMLDivElement>,
    handler?: (event: PointerEvent<HTMLDivElement>) => void,
  ) => {
    handler?.(event);

    if (!enabled || event.pointerType === 'touch') {
      return;
    }

    // Pointer capture is deferred to onPointerMove: capturing here would
    // retarget the click that follows a plain (non-drag) press to this
    // element instead of the button underneath, so the button's onClick
    // would never fire.
    drag.current = {
      active: true,
      captured: false,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (
    event: PointerEvent<HTMLDivElement>,
    handler?: (event: PointerEvent<HTMLDivElement>) => void,
  ) => {
    handler?.(event);

    if (!drag.current.active) {
      return;
    }

    const delta = event.clientX - drag.current.startX;

    if (!drag.current.moved && Math.abs(delta) > DRAG_THRESHOLD) {
      drag.current.moved = true;
      drag.current.captured = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (drag.current.moved) {
      event.currentTarget.scrollLeft = drag.current.startScrollLeft - delta;
    }
  };

  const endDrag = (
    event: PointerEvent<HTMLDivElement>,
    handler?: (event: PointerEvent<HTMLDivElement>) => void,
  ) => {
    handler?.(event);

    if (!drag.current.active) {
      return;
    }

    drag.current.active = false;

    if (drag.current.captured) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onClickCapture = (
    event: MouseEvent<HTMLDivElement>,
    handler?: (event: MouseEvent<HTMLDivElement>) => void,
  ) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    handler?.(event);
  };

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    onPointerLeave: endDrag,
    onClickCapture,
  };
};
