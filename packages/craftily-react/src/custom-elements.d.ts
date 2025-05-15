declare namespace JSX {
  interface IntrinsicElements {
    'craftily-alert': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        variant?: 'info' | 'success' | 'warning' | 'error';
        class?: string;
      },
      HTMLElement
    >;
    'craftily-avatar': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        shape?: 'circle' | 'square';
        class?: string;
      },
      HTMLElement
    >;
    'craftily-badge': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
        dot?: boolean;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-button': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
        size?: 'sm' | 'md' | 'lg';
        disabled?: boolean;
        loading?: boolean;
        'icon-position'?: 'left' | 'right';
        class?: string;
      },
      HTMLElement
    >;
    'craftily-card': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-card-title': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-card-body': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-card-actions': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-card-header': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-card-footer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-checkbox': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        checked?: boolean;
        disabled?: boolean;
        name?: string;
        value?: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-footer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-header': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-image-editor': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        controls?: import('@craftily/image').ControlProps;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-input': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        value?: string;
        placeholder?: string;
        disabled?: boolean;
        type?: string;
        name?: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-modal': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        open?: boolean;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-radio': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        checked?: boolean;
        disabled?: boolean;
        name?: string;
        value?: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-radio-group': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        value?: string;
        name?: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-select': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        value?: string;
        placeholder?: string;
        disabled?: boolean;
        name?: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-spinner': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        size?: 'sm' | 'md' | 'lg';
        variant?: 'primary' | 'secondary' | 'accent';
        class?: string;
      },
      HTMLElement
    >;
    'craftily-switch': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        checked?: boolean;
        disabled?: boolean;
        name?: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-tabs': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        value?: string;
        'default-value'?: string;
        variant?: 'default' | 'pills' | 'underline';
        size?: 'sm' | 'md' | 'lg';
        class?: string;
      },
      HTMLElement
    >;
    'craftily-tabs-list': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
    'craftily-tabs-trigger': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        value: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-tabs-content': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        value: string;
        class?: string;
      },
      HTMLElement
    >;
    'craftily-tooltip': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        content?: string;
        placement?: 'top' | 'right' | 'bottom' | 'left';
        class?: string;
      },
      HTMLElement
    >;
    'craftily-tooltip-trigger': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        class?: string;
      },
      HTMLElement
    >;
  }
}
