export interface LoadingProps {
  loading?: boolean;
  loadingText?: string;
}

export interface DisabledProps {
  disabled?: boolean;
}

export interface ErrorProps {
  error?: string;
}

export interface NameProps {
  name?: string;
}

export interface ValueProps<T> {
  modelValue?: T;
}

export interface PlaceholderProps {
  placeholder?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type Position = 'top' | 'right' | 'left' | 'bottom';
export type Trigger = 'hover' | 'focus';

export interface OptionProps {
  value: string;
  disabled?: boolean;
}
