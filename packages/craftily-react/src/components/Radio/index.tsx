import React, { forwardRef, useCallback } from 'react';
import '@craftily/ui/radio';

export interface RadioProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: (event: CustomEvent<{ checked: boolean; value: string }>) => void;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {
  name?: string;
  value?: string;
  defaultValue?: string;
  horizontal?: boolean;
  className?: string;
  children?: React.ReactNode;
  onChange?: (event: CustomEvent<{ value: string }>) => void;
}

export const Radio = forwardRef<HTMLElement, RadioProps>((props, ref) => {
  const { checked, disabled, name, value, className, children, onChange, ...rest } = props;

  const handleChange = useCallback(
    (event: Event) => {
      if (onChange && event instanceof CustomEvent) {
        onChange(event);
      }
    },
    [onChange]
  );

  return React.createElement(
    'craftily-radio',
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

export const RadioGroup = forwardRef<HTMLElement, RadioGroupProps>((props, ref) => {
  const { name, value, defaultValue, horizontal, className, children, onChange, ...rest } = props;
  const [currentValue, setCurrentValue] = React.useState(defaultValue || value);

  React.useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleChange = useCallback(
    (event: Event) => {
      if (event instanceof CustomEvent) {
        const newValue = event.detail.value;
        if (value === undefined) {
          setCurrentValue(newValue);
        }
        if (onChange) {
          onChange(event);
        }
      }
    },
    [onChange, value]
  );

  return React.createElement(
    'craftily-radio-group',
    {
      ref,
      name,
      value: currentValue,
      horizontal,
      class: className,
      onChange: handleChange,
      ...rest,
    },
    children
  );
});

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';

export default {
  Radio,
  RadioGroup,
};
