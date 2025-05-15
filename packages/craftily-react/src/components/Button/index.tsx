import React, { forwardRef, useCallback, useEffect } from 'react';
import '@craftily/ui/button';

export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, 'label' | 'onClick'> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  label?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (event: CustomEvent<{ originalEvent: Event }>) => void;
}

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const { variant, size, disabled, iconPosition, icon, label, className, children, onClick, ...rest } =
    props;

  const handleClick = useCallback(
    (e: Event) => {
      // The craftily-button emits a CustomEvent with detail: { originalEvent: Event }
      if (onClick && e instanceof CustomEvent) {
        onClick(e);
      }
    },
    [onClick]
  );

  useEffect(() => {
    // Using a local variable to store the element reference
    let element: HTMLElement | null = null;
    
    // Handle both RefObject and callback ref types
    if (ref) {
      if (typeof ref === 'function') {
        // We can't access the DOM element directly from a callback ref
        // The element will be handled through the ref prop on the component
      } else if (ref.current) {
        element = ref.current;
      }
    }
    
    if (!element) return;

    element.addEventListener('click', handleClick);
    return () => element?.removeEventListener('click', handleClick);
  }, [handleClick, ref]);

  return React.createElement(
    'craftily-button',
    {
      ref,
      variant,
      size,
      disabled,
      'icon-position': iconPosition,
      class: className,
      ...rest,
    },
    [
      icon && React.createElement('span', { key: 'icon', slot: 'icon' }, icon),
      label && React.createElement('span', { key: 'label', slot: 'label' }, label),
      children,
    ]
  );
});

Button.displayName = 'Button';
export default Button;
