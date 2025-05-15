declare namespace JSX {
  interface IntrinsicElements {
    'craftily-image-editor': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { controls?: import('@craftily/image').ControlProps },
      HTMLElement
    >;
    'craftily-header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'craftily-header-brand': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    'craftily-header-nav': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'craftily-header-nav-item': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { active?: boolean },
      HTMLElement
    >;
    'craftily-header-actions': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    'craftily-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'craftily-footer-copyright': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'craftily-footer-navigation': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'craftily-footer-social': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'craftily-footer-brand': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'craftily-footer-nav-group': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { title: string },
      HTMLElement
    >;
    'craftily-footer-link': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { href: string },
      HTMLElement
    >;
    'craftily-footer-social-link': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { href: string; icon: string; label: string },
      HTMLElement
    >;
  }
}

declare module '@craftily/ui' {
  export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}
  export interface HeaderBrandProps extends HeaderProps {}
  export interface HeaderNavProps extends HeaderProps {}
  export interface HeaderNavItemProps extends HeaderProps {
    active?: boolean;
  }
  export interface HeaderActionsProps extends HeaderProps {}
  export interface HeaderMobileMenuProps extends HeaderProps {
    open?: boolean;
    onClose?: () => void;
  }
  export interface HeaderSearchProps extends HeaderProps {}

  export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}
  export interface FooterSubComponentProps extends FooterProps {}
  export interface FooterNavGroupProps extends FooterProps {
    title: string;
  }
  export interface FooterLinkProps extends FooterProps {
    href: string;
  }
  export interface FooterSocialLinkProps extends FooterLinkProps {
    icon: string;
    label: string;
  }

  export const Header: React.ForwardRefExoticComponent<
    HeaderProps & React.RefAttributes<HTMLElement>
  > & {
    Brand: React.ForwardRefExoticComponent<HeaderBrandProps & React.RefAttributes<HTMLElement>>;
    Nav: React.ForwardRefExoticComponent<HeaderNavProps & React.RefAttributes<HTMLElement>>;
    NavItem: React.ForwardRefExoticComponent<HeaderNavItemProps & React.RefAttributes<HTMLElement>>;
    Actions: React.ForwardRefExoticComponent<HeaderActionsProps & React.RefAttributes<HTMLElement>>;
    MobileMenu: React.ForwardRefExoticComponent<
      HeaderMobileMenuProps & React.RefAttributes<HTMLElement>
    >;
  };

  export const Footer: React.ForwardRefExoticComponent<
    FooterProps & React.RefAttributes<HTMLElement>
  > & {
    Copyright: React.ForwardRefExoticComponent<FooterSubComponentProps & React.RefAttributes<HTMLElement>>;
    Navigation: React.ForwardRefExoticComponent<FooterSubComponentProps & React.RefAttributes<HTMLElement>>;
    Social: React.ForwardRefExoticComponent<FooterSubComponentProps & React.RefAttributes<HTMLElement>>;
    Brand: React.ForwardRefExoticComponent<FooterSubComponentProps & React.RefAttributes<HTMLElement>>;
    NavGroup: React.ForwardRefExoticComponent<FooterNavGroupProps & React.RefAttributes<HTMLElement>>;
    Link: React.ForwardRefExoticComponent<FooterLinkProps & React.RefAttributes<HTMLElement>>;
    SocialLink: React.ForwardRefExoticComponent<FooterSocialLinkProps & React.RefAttributes<HTMLElement>>;
  };
}
