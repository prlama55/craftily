import React, { forwardRef } from 'react';
import '@craftily/ui/footer';
import { classNames } from '../../utils/classNames';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

interface NavGroupProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  title: string;
}

interface LinkProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  href: string;
}

interface SocialLinkProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  href: string;
  icon: string;
  label: string;
}

type SubComponent = React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement>>;

interface FooterComponent extends React.ForwardRefExoticComponent<FooterProps> {
  Copyright: SubComponent;
  Navigation: SubComponent;
  Social: SubComponent;
  Brand: SubComponent;
  NavGroup: React.ForwardRefExoticComponent<NavGroupProps>;
  Link: React.ForwardRefExoticComponent<LinkProps>;
  SocialLink: React.ForwardRefExoticComponent<SocialLinkProps>;
}

// Create the base Footer component
const FooterBase = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const rootClassName = classNames(className, {
    footer: true,
  });

  return React.createElement(
    'craftily-footer',
    {
      ref,
      class: rootClassName || '',
      ...rest,
    },
    children
  );
});

// Create subcomponents
const FooterCopyright = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-footer-copyright',
    {
      ref,
      class: className || '',
      ...rest,
    },
    children
  );
});

const FooterNavigation = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    const { className, children, ...rest } = props;
    return React.createElement(
      'craftily-footer-navigation',
      {
        ref,
        class: className || '',
        ...rest,
      },
      children
    );
  }
);

const FooterSocial = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-footer-social',
    {
      ref,
      class: className || '',
      ...rest,
    },
    children
  );
});

const FooterBrand = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-footer-brand',
    {
      ref,
      class: className || '',
      ...rest,
    },
    children
  );
});

const FooterNavGroup = forwardRef<HTMLElement, NavGroupProps>((props, ref) => {
  const { className, children, title, ...rest } = props;
  return React.createElement(
    'craftily-footer-nav-group',
    {
      ref,
      class: className || '',
      title,
      ...rest,
    },
    children
  );
});

const FooterLink = forwardRef<HTMLElement, LinkProps>((props, ref) => {
  const { className, children, href, ...rest } = props;
  return React.createElement(
    'craftily-footer-link',
    {
      ref,
      class: className || '',
      href,
      ...rest,
    },
    children
  );
});

const FooterSocialLink = forwardRef<HTMLElement, SocialLinkProps>((props, ref) => {
  const { className, href, icon, label, ...rest } = props;
  return React.createElement('craftily-footer-social-link', {
    ref,
    class: className || '',
    href,
    icon,
    'aria-label': label,
    ...rest,
  });
});

// Set display names for all components
FooterBase.displayName = 'Footer';
FooterCopyright.displayName = 'Footer.Copyright';
FooterNavigation.displayName = 'Footer.Navigation';
FooterSocial.displayName = 'Footer.Social';
FooterBrand.displayName = 'Footer.Brand';
FooterNavGroup.displayName = 'Footer.NavGroup';
FooterLink.displayName = 'Footer.Link';
FooterSocialLink.displayName = 'Footer.SocialLink';

// Create the Footer component with typed subcomponents
const Footer = Object.assign(FooterBase, {
  Copyright: FooterCopyright,
  Navigation: FooterNavigation,
  Social: FooterSocial,
  Brand: FooterBrand,
  NavGroup: FooterNavGroup,
  Link: FooterLink,
  SocialLink: FooterSocialLink,
}) as FooterComponent;

export { Footer };
