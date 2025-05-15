import React, { forwardRef } from 'react';
import '@craftily/ui/badge';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  dot?: boolean;
  children?: React.ReactNode;
}

export const Badge = forwardRef<HTMLElement, BadgeProps>((props, ref) => {
  const { variant, dot, className, children, ...rest } = props;

  return React.createElement(
    'craftily-badge',
    {
      ref,
      variant,
      dot,
      class: className,
      ...rest,
    },
    children
  );
});

Badge.displayName = 'Badge';
export default Badge;
