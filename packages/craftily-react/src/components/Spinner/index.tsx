import React, { forwardRef } from 'react';
import '@craftily/ui/spinner';

export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  label?: string;
  className?: string;
}

export const Spinner = forwardRef<HTMLElement, SpinnerProps>((props, ref) => {
  const { size = 'md', color, label, className, ...rest } = props;

  return React.createElement('craftily-spinner', {
    ref,
    size,
    color,
    label,
    class: className,
    ...rest,
  });
});

Spinner.displayName = 'Spinner';
export default Spinner;
