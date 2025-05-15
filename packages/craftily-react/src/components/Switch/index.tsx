import React, { useRef, useEffect, useCallback } from 'react';
import '@craftily/ui/switch';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Switch = React.forwardRef<HTMLElement, SwitchProps>((props, ref) => {
  const { checked, disabled, name, onChange, className } = props;
  const elementRef = useRef<HTMLElement | null>(null);

  const handleChange = useCallback(
    (e: Event) => {
      // The craftily-switch emits a CustomEvent with detail: { checked: boolean }
      if (e instanceof CustomEvent && e.detail && typeof e.detail.checked === 'boolean') {
        onChange?.(e.detail.checked);
      }
    },
    [onChange]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('change', handleChange);
    return () => element.removeEventListener('change', handleChange);
  }, [handleChange]);

  return React.createElement(
    'craftily-switch',
    {
      ref,
      checked,
      disabled,
      name,
      class: className,
      onChange: handleChange,
    },
    null
  );
});
