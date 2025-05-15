import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export interface HeaderProps {
  className?: string;
  children?: any;
}

export interface HeaderBrandProps {
  className?: string;
  children?: any;
}

export interface HeaderNavProps {
  className?: string;
  children?: any;
}

export interface HeaderNavItemProps {
  className?: string;
  active?: boolean;
  href?: string;
  children?: any;
}

export interface HeaderActionsProps {
  className?: string;
  children?: any;
}

export interface HeaderSearchProps {
  className?: string;
  children?: any;
}

export interface HeaderMobileMenuProps {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  children?: any;
}

export class CraftilyHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header {
      height: var(--header-height, 60px);
      background-color: var(--header-bg, var(--color-base-100, #ffffff));
      padding: var(--header-padding, 0 var(--spacing-md, 1rem));
      box-shadow: var(--header-shadow, var(--shadow-md));
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: var(--header-position, sticky);
      top: var(--header-top, 0);
      left: var(--header-left, 0);
      right: var(--header-right, 0);
      z-index: var(--z-header, 950);
    }
  `;

  render() {
    return html`
      <header class="header">
        <slot></slot>
      </header>
    `;
  }
}

export class CraftilyHeaderBrand extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header-brand {
      font-size: var(--header-brand-font-size, var(--text-xl));
      font-weight: var(--font-weight-bold, 700);
      color: var(--header-brand-color, var(--color-primary));
      text-decoration: none;
    }
  `;

  render() {
    return html`
      <div class="header-brand">
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyHeaderNav extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header-nav {
      display: flex;
      gap: var(--header-nav-gap, var(--spacing-md, 1rem));
    }
  `;

  render() {
    return html`
      <nav class="header-nav">
        <slot></slot>
      </nav>
    `;
  }
}

export class CraftilyHeaderNavItem extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header-nav-item {
      color: var(--header-nav-item-color, var(--color-base-content));
      text-decoration: none;
      padding: var(--header-nav-item-padding, 0.5rem 0.75rem);
      border-radius: var(--header-nav-item-radius, var(--radius-sm, 0.1rem));
      transition:
        background-color 0.2s ease,
        color 0.2s ease;
    }

    .header-nav-item:hover {
      background-color: var(--header-nav-item-hover-bg, var(--color-base-200, #f0f0f0));
      color: var(--header-nav-item-hover-color, var(--color-primary));
    }

    .header-nav-item.active {
      color: var(--header-nav-item-active-color, var(--color-primary));
      font-weight: var(--font-weight-semibold, 600);
      border-bottom: var(--header-nav-item-active-border, 2px solid var(--color-primary));
    }
  `;

  @property({ type: Boolean, reflect: true })
  active = false;

  render() {
    return html`
      <a class="header-nav-item ${this.active ? 'active' : ''}">
        <slot></slot>
      </a>
    `;
  }
}

export class CraftilyHeaderActions extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: var(--header-actions-gap, var(--spacing-sm, 0.5rem));
    }
  `;

  render() {
    return html`
      <div class="header-actions">
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyHeaderSearch extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header-search {
      display: flex;
      align-items: center;
      gap: var(--header-search-gap, var(--spacing-sm, 0.5rem));
    }
  `;

  render() {
    return html`
      <div class="header-search">
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyHeaderMobileMenu extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .header-mobile-menu {
      position: fixed;
      top: var(--header-height, 60px);
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--header-mobile-menu-bg, var(--color-base-100, #ffffff));
      padding: var(--header-mobile-menu-padding, var(--spacing-md, 1rem));
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: var(--z-header-mobile-menu, 940);
      overflow-y: auto;
    }

    .header-mobile-menu.open {
      transform: translateX(0);
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  render() {
    return html`
      <div class="header-mobile-menu ${this.open ? 'open' : ''}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-header': CraftilyHeader;
    'craftily-header-brand': CraftilyHeaderBrand;
    'craftily-header-nav': CraftilyHeaderNav;
    'craftily-header-nav-item': CraftilyHeaderNavItem;
    'craftily-header-actions': CraftilyHeaderActions;
    'craftily-header-search': CraftilyHeaderSearch;
    'craftily-header-mobile-menu': CraftilyHeaderMobileMenu;
  }
}
if (!customElements.get('craftily-header')) {
  customElements.define('craftily-header', CraftilyHeader);
}
if (!customElements.get('craftily-header-brand')) {
  customElements.define('craftily-header-brand', CraftilyHeaderBrand);
}
if (!customElements.get('craftily-header-nav')) {
  customElements.define('craftily-header-nav', CraftilyHeaderNav);
}
if (!customElements.get('craftily-header-nav-item')) {
  customElements.define('craftily-header-nav-item', CraftilyHeaderNavItem);
}
if (!customElements.get('craftily-header-actions')) {
  customElements.define('craftily-header-actions', CraftilyHeaderActions);
}
if (!customElements.get('craftily-header-search')) {
  customElements.define('craftily-header-search', CraftilyHeaderSearch);
}

if (!customElements.get('craftily-header-mobile-menu')) {
  customElements.define('craftily-header-mobile-menu', CraftilyHeaderMobileMenu);
}
