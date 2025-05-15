import React, { forwardRef } from 'react';
import '@craftily/ui/header';

import type {
  HeaderProps,
  HeaderBrandProps,
  HeaderNavProps,
  HeaderNavItemProps,
  HeaderActionsProps,
  HeaderMobileMenuProps,
  HeaderSearchProps,
} from '@craftily/ui';

const HeaderBrand = forwardRef<HTMLElement, HeaderBrandProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-header-brand',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const HeaderNav = forwardRef<HTMLElement, HeaderNavProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-header-nav',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const HeaderNavItem = forwardRef<HTMLElement, HeaderNavItemProps>((props, ref) => {
  const { className, active, children, ...rest } = props;
  return React.createElement(
    'craftily-header-nav-item',
    {
      ref,
      class: className,
      active,
      ...rest,
    },
    children
  );
});

const HeaderActions = forwardRef<HTMLElement, HeaderActionsProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-header-actions',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const HeaderSearch = forwardRef<HTMLElement, HeaderSearchProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-header-search',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const HeaderComponent = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-header',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

const HeaderMobileMenu = forwardRef<HTMLElement, HeaderMobileMenuProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return React.createElement(
    'craftily-header-mobile-menu',
    {
      ref,
      class: className,
      ...rest,
    },
    children
  );
});

export interface HeaderComponentType
  extends React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>> {
  Brand: typeof HeaderBrand;
  Nav: typeof HeaderNav;
  NavItem: typeof HeaderNavItem;
  Actions: typeof HeaderActions;
  Search: typeof HeaderSearch;
  MobileMenu: typeof HeaderMobileMenu;
}

export const Header: HeaderComponentType = Object.assign(HeaderComponent, {
  Brand: HeaderBrand,
  Nav: HeaderNav,
  NavItem: HeaderNavItem,
  Actions: HeaderActions,
  Search: HeaderSearch,
  MobileMenu: HeaderMobileMenu,
});

export default Header;

export const HeaderComponents = {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderNavItem,
  HeaderActions,
  HeaderSearch,
  HeaderMobileMenu,
};
