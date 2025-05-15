// Type definitions for Craftily UI Vue components
import { Component } from 'vue';

// Badge component props
export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  dot?: boolean;
  size?: 'sm' | 'md' | 'lg' | string;
  className?: string;
}

export interface Badge extends Component {
  $props: BadgeProps;
}

// Checkbox component props
export interface CheckboxProps {
  modelValue?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface Checkbox extends Component {
  $props: CheckboxProps;
}
