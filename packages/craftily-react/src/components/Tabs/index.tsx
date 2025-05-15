import React, { useRef, useEffect } from 'react';
import '@craftily/ui/tabs';

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}

export interface TabsListProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface TabsTriggerProps extends React.HTMLAttributes<HTMLElement> {
  value: string;
  children?: React.ReactNode;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLElement> {
  value: string;
  children?: React.ReactNode;
}

const TabsRoot = React.forwardRef<Element, TabsProps>((props, ref) => {
  const { value, defaultValue, variant, size, onChange, children, className, ...rest } = props;
  const elementRef = useRef<Element | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (value !== undefined) {
      (element as any).value = value;
    }
  }, [value]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleChange = (e: Event) => {
      // The craftily-tabs emits a CustomEvent with detail: { value: string }
      if (e instanceof CustomEvent && e.detail && typeof e.detail.value === 'string') {
        onChange?.(e.detail.value);
      }
    };

    element.addEventListener('change', handleChange);
    return () => element.removeEventListener('change', handleChange);
  }, [onChange]);

  return React.createElement(
    'craftily-tabs',
    {
      ref: (el) => {
        elementRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      },
      value,
      defaultValue,
      variant,
      size,
      class: className,
      ...rest,
    },
    children
  );
});

const TabsList = React.forwardRef<Element, TabsListProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const elementRef = useRef<Element | null>(null);

  return React.createElement(
    'craftily-tabs-list',
    {
      ref: (el) => {
        elementRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      },
      class: className,
      part: 'list',
      ...rest,
    },
    children
  );
});

const TabsTrigger = React.forwardRef<Element, TabsTriggerProps>((props, ref) => {
  const { value, children, className, ...rest } = props;
  const elementRef = useRef<Element | null>(null);

  return React.createElement(
    'craftily-tabs-trigger',
    {
      ref: (el) => {
        elementRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      },
      value,
      class: className,
      part: 'trigger',
      ...rest,
    },
    children
  );
});

const TabsContent = React.forwardRef<Element, TabsContentProps>((props, ref) => {
  const { value, children, className, ...rest } = props;
  const elementRef = useRef<Element | null>(null);

  return React.createElement(
    'craftily-tabs-content',
    {
      ref: (el) => {
        elementRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      },
      value,
      class: className,
      part: 'content',
      ...rest,
    },
    children
  );
});

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { Tabs };
export default Tabs;
