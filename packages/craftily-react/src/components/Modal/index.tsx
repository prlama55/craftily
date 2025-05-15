import React, { forwardRef } from 'react';
import '@craftily/ui/modal';
import { BaseProps, BooleanAttributes, ChildrenProps } from '../../types/common';
import { useEventCallback } from '../../hooks/useEventCallback';
import { useControlled } from '../../hooks/useControlled';
import { classNames } from '../../utils/classNames';

export interface ModalCloseConfig {
  closeOnBackdrop?: boolean;
  hideCloseButton?: boolean;
  closeButtonLabel?: string;
}

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>,
    BaseProps,
    BooleanAttributes,
    ChildrenProps,
    ModalCloseConfig {
  open?: boolean;
  defaultOpen?: boolean;
  title?: string;
  footer?: React.ReactNode;
  onClose?: () => void;
}

export const Modal = forwardRef<HTMLElement, ModalProps>((props, ref) => {
  const {
    open: controlledOpen,
    defaultOpen = false,
    title,
    closeOnBackdrop = true,
    hideCloseButton = false,
    closeButtonLabel = '×',
    className,
    children,
    footer,
    onClose,
    ...rest
  } = props;

  const [open, setOpen] = useControlled(controlledOpen, defaultOpen, (value) => {
    if (!value) {
      onClose?.();
    }
  });

  const handleClose = useEventCallback<Event>((event: Event) => {
    // Check if the click was on the backdrop
    const target = event.target as HTMLElement;
    const isBackdropClick = target.classList.contains('modal');
    
    // If it's a backdrop click and closeOnBackdrop is false, don't close
    if (isBackdropClick && !closeOnBackdrop) {
      return;
    }
    
    setOpen(false);
    onClose?.();
  });

  const rootClassName = classNames(className, {
    'modal-open': open,
    'modal-hide-close': hideCloseButton,
  });

  // Set data attributes for custom behavior
  const dataAttributes = {
    'data-close-on-backdrop': closeOnBackdrop,
    'data-hide-close-button': hideCloseButton,
    'data-close-button-label': closeButtonLabel,
  };

  return React.createElement(
    'craftily-modal',
    {
      ref,
      open: open,
      title: title,
      class: classNames('craftily-modal', className),
      onClose: handleClose, // Always attach the handler, we'll control behavior in the handler
      ...dataAttributes,
      ...rest,
    },
    [
      children,
      footer && React.createElement('div', { key: 'footer', slot: 'footer' }, footer),
    ].filter(Boolean)
  );
});

Modal.displayName = 'Modal';
export default Modal;
