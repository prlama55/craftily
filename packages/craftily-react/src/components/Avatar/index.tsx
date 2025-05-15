import React, { forwardRef } from 'react';
import '@craftily/ui/avatar';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  shape?: 'square' | 'circle';
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

export const Avatar = forwardRef<HTMLElement, AvatarProps>((props, ref) => {
  const { shape, src, alt, size, className, children, ...rest } = props;

  return React.createElement(
    'craftily-avatar',
    {
      ref,
      shape,
      src,
      alt,
      size,
      class: className,
      ...rest,
    },
    children
  );
});

Avatar.displayName = 'Avatar';
export default Avatar;
