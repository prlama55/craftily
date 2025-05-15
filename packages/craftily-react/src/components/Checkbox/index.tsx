import React, { forwardRef, useCallback } from 'react';
import '@craftily/ui/checkbox';

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: (event: CustomEvent<{ checked: boolean; value: string }>) => void;
}

export const Checkbox = forwardRef<HTMLElement, CheckboxProps>((props, ref) => {
  const { checked, disabled, name, value, className, children, onChange, ...rest } = props;

  const handleChange = useCallback(
    (event: Event) => {
      if (onChange && event instanceof CustomEvent) {
        // The craftily-checkbox emits a CustomEvent with detail: { checked: boolean; value: string }
        onChange(event);
      }
    },
    [onChange]
  );

  return React.createElement(
    'craftily-checkbox',
    {
      ref,
      checked,
      disabled,
      name,
      value,
      class: className,
      onChange: handleChange,
      ...rest,
    },
    children
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
