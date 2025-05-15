import React, { forwardRef } from 'react';
import '@craftily/ui/select';
import {
  BaseProps,
  BooleanAttributes,
  ChildrenProps,
  DisabledProps,
  ErrorProps,
  LoadingProps,
  NameProps,
  PlaceholderProps,
  SelectOption,
  ValueProps,
} from '../../types/common';
import { useEventCallback } from '../../hooks/useEventCallback';
import { useControlled } from '../../hooks/useControlled';
import { classNames } from '../../utils/classNames';

export interface SelectConfig {
  multiple?: boolean;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>,
    BaseProps,
    BooleanAttributes,
    ChildrenProps,
    DisabledProps,
    ErrorProps,
    LoadingProps,
    NameProps,
    PlaceholderProps,
    SelectConfig,
    ValueProps<string | string[]> {
  options?: SelectOption[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
}

export interface OptionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'value'>,
    ChildrenProps,
    DisabledProps,
    ValueProps<string> {}

export const Select = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    value: controlledValue,
    defaultValue = '',
    multiple = false,
    loading = false,
    loadingText = '',
    placeholder = '',
    disabled = false,
    name = '',
    error = '',
    options = [],
    className,
    children,
    onChange,
    ...rest
  } = props;

  const [value, setValue] = useControlled(
    controlledValue,
    defaultValue || (multiple ? [] : ''),
    (value) => {
      onChange?.({
        target: { value },
      } as any);
    }
  );

  const handleChange = useEventCallback<CustomEvent<{ value: string | string[] }>>((event) => {
    // The craftily-select emits a CustomEvent with detail: { value: string | string[] }
    if (event.detail && typeof event.detail.value !== 'undefined') {
      setValue(event.detail.value);
      onChange?.(event.detail.value);
    }
  });

  const handleClear = useEventCallback<Event>(() => {
    setValue(multiple ? [] : '');
  });

  const rootClassName = classNames(className, {
    'select-loading': loading,
    'select-disabled': disabled,
    'select-error': !!error,
    'select-multiple': multiple,
  });

  const elementProps = {
    ref,
    value: Array.isArray(value) ? value.join(',') : value || '',
    placeholder,
    'data-disabled': !!(disabled || loading),
    name,
    error,
    options,
    class: rootClassName || '',
    'data-loading': !!loading,
    'data-loading-text': loadingText,
    'data-multiple': !!multiple,
    onChange: handleChange,
    onClear: handleClear,
    ...rest,
  } as const;

  const renderOptions = () => {
    if (loading) {
      return [
        React.createElement('craftily-spinner', { key: 'spinner', size: 'sm' }),
        loadingText && React.createElement('span', { key: 'text' }, loadingText),
      ].filter(Boolean);
    }

    if (children) {
      return children;
    }

    return options.map((option) =>
      React.createElement('option', {
        key: option.value,
        value: option.value,
        disabled: option.disabled,
      }, option.label)
    );
  };

  return React.createElement('craftily-select', elementProps, renderOptions());
});

export const Option = forwardRef<HTMLElement, OptionProps>((props, ref) => {
  const { value, disabled = false, children, className, ...rest } = props;

  const rootClassName = classNames(className, {
    'option-disabled': disabled,
  });

  return React.createElement(
    'craftily-option',
    {
      ref,
      value: value || '',
      'data-disabled': !!disabled,
      class: rootClassName || '',
      ...rest,
    },
    children
  );
});

Select.displayName = 'Select';
Option.displayName = 'Option';

export default {
  Select,
  Option,
};
