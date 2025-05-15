import React, { forwardRef } from 'react';
import '@craftily/ui/alert';

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  children?: React.ReactNode;
  part?: string;
}

export const Alert = forwardRef<HTMLElement, AlertProps>((props, ref) => {
  const { variant, title, dismissible, children, className, part, ...rest } = props;

  return React.createElement(
    'craftily-alert',
    {
      ref,
      variant,
      title,
      dismissible,
      class: className,
      part,
      ...rest,
    },
    children
  );
});

Alert.displayName = 'Alert';
export default Alert;
