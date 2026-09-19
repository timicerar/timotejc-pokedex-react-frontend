import classNames from 'classnames';
import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { ModalProps } from '~/components/components/Modal/Modal.interface';
import classes from '~/components/components/Modal/Modal.module.scss';
import { useMountTransition } from '~/hooks/useMountTransition';
import { getModalId } from '~/utils/modalProviderUtils';

const Modal = ({
  type,
  children,
  closeOnBackdropClick = true,
  transitionDuration = 200,
  classes: styles,
}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const hasTransitionedIn = useMountTransition(isOpen, transitionDuration);
  const shouldRenderContent = isOpen || hasTransitionedIn;

  useEffect(() => {
    const dialog = dialogRef.current;

    const handleToggle = (event: ToggleEvent) => {
      setIsOpen(event.newState === 'open');
    };

    dialog?.addEventListener('toggle', handleToggle);

    return () => dialog?.removeEventListener('toggle', handleToggle);
  }, []);

  return (
    <dialog
      id={getModalId(type)}
      ref={dialogRef}
      className={classNames(classes.dialog, styles?.dialog)}
      style={
        {
          '--modal-transition-duration': `${transitionDuration}ms`,
        } as CSSProperties
      }
      onClick={(event) => {
        if (
          closeOnBackdropClick &&
          !contentRef.current?.contains(event.target as Node)
        ) {
          dialogRef.current?.close();
        }
      }}
    >
      {shouldRenderContent && (
        <div className={classes.frame}>
          <div
            ref={contentRef}
            className={classNames(classes.content, styles?.content)}
          >
            {children}
          </div>
        </div>
      )}
    </dialog>
  );
};

export default Modal;
