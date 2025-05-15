export interface BaseProps {
  className?: string;
}

export interface BooleanAttributes {
  'data-close-on-backdrop'?: 'true' | 'false';
  'data-hide-close-button'?: 'true' | 'false';
  'data-loading'?: 'true' | 'false';
  'data-multiple'?: 'true' | 'false';
  'data-disabled'?: 'true' | 'false';
  'data-open'?: 'true' | 'false';
}

export interface ChildrenProps {
  children?: React.ReactNode;
}

export interface DisabledProps {
  disabled?: boolean;
}

export interface ErrorProps {
  error?: string;
}

export interface LoadingProps {
  loading?: boolean;
  loadingText?: string;
}

export interface NameProps {
  name?: string;
}

export interface PlaceholderProps {
  placeholder?: string;
}

export interface ValueProps<T> {
  value?: T;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type Position = 'top' | 'right' | 'bottom' | 'left';
export type Trigger = 'hover' | 'focus' | 'click' | 'none';
