import React, { forwardRef, useCallback } from 'react';
import '@craftily/ui/input';

// Create a type without prefix/suffix to avoid conflicts with HTMLAttributes
type BaseInputProps = {
  value?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  name?: string;
  error?: string;
  success?: boolean;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onInput?: (event: CustomEvent<{ value: string }>) => void;
  onChange?: (event: CustomEvent<{ value: string }>) => void;
};

export interface InputProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'onInput' | 'prefix'>, BaseInputProps {}


export const Input = forwardRef<HTMLElement, InputProps>((props, ref) => {
  const {
    value,
    placeholder,
    type = 'text',
    disabled,
    name,
    error,
    success,
    className,
    prefix,
    suffix,
    onInput,
    onChange,
    children,
    ...rest
  } = props;

  const handleInput = useCallback(
    (event: Event) => {
      if (onInput && event instanceof CustomEvent) {
        onInput(event);
      }
    },
    [onInput]
  );

  const handleChange = useCallback(
    (event: Event) => {
      if (onChange && event instanceof CustomEvent) {
        onChange(event);
      }
    },
    [onChange]
  );

  const childElements = [];
  
  if (prefix) {
    childElements.push(React.createElement('div', { key: 'prefix', slot: 'prefix' }, prefix));
  }
  
  if (suffix) {
    childElements.push(React.createElement('div', { key: 'suffix', slot: 'suffix' }, suffix));
  }
  
  if (children) {
    childElements.push(children);
  }

  return React.createElement(
    'craftily-input',
    {
      ref,
      value,
      placeholder,
      type,
      disabled,
      name,
      error,
      success,
      class: className,
      onInput: handleInput,
      onChange: handleChange,
      ...rest,
    },
    childElements
  );
});

Input.displayName = 'Input';
export default Input;
