import React from 'react';
import { mergeClassNames } from '@craftily/ui';

type AsProp<C extends React.ElementType> = { as?: C };

type PropsToOmit<C extends React.ElementType, P> = P &
  Omit<React.ComponentPropsWithRef<C>, keyof P>;

type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = PropsToOmit<
  C,
  Props & AsProp<C>
>;

// custom props
interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
}

type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, BaseButtonProps>;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C> & { href?: string }
) => React.ReactElement | null;

function ButtonInner<C extends React.ElementType = 'button'>(
  {
    as,
    variant,
    size,
    isLoading,
    className,
    children,
    ...rest
  }: ButtonProps<C> & { href?: string },
  ref: React.ForwardedRef<any>
) {
  const Component = as || 'button';
  const baseClasses = 'btn';
  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  };
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    accent: 'btn-accent',
  };
  const classes = [
    baseClasses,
    size && sizeClasses[size],
    variant && variantClasses[variant],
    className,
  ];

  const loadingProps = isLoading
    ? { 'aria-busy': true, style: { pointerEvents: 'none', opacity: 0.7 } }
    : {};
  return (
    <Component ref={ref} className={mergeClassNames(classes)} {...loadingProps} {...(rest as any)}>
      {isLoading ? 'Loading...' : children}
    </Component>
  );
}

export const Button = React.forwardRef(ButtonInner) as ButtonComponent & {
  displayName?: string;
};
Button.displayName = 'Button';

export default Button;
