import React, { forwardRef } from 'react';
import '@craftily/ui/tooltip';

export interface TooltipProps extends React.HTMLAttributes<HTMLElement> {
  content?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  children?: React.ReactNode;
}

export interface TooltipTriggerProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const TooltipTrigger = forwardRef<HTMLElement, TooltipTriggerProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return React.createElement(
    'craftily-tooltip-trigger',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

TooltipTrigger.displayName = 'TooltipTrigger';

const TooltipRoot = forwardRef<HTMLElement, TooltipProps>((props, ref) => {
  const { content, placement = 'top', className, children, ...rest } = props;

  return React.createElement(
    'craftily-tooltip',
    {
      ref,
      content,
      placement,
      class: className,
      ...rest,
    },
    children
  );
});

TooltipRoot.displayName = 'Tooltip';

type TooltipComponent = typeof TooltipRoot & {
  Trigger: typeof TooltipTrigger;
};

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
}) as TooltipComponent;

export default Tooltip;
