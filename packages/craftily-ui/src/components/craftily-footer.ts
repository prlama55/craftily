import { LitElement, html, css } from 'lit';

export class CraftilyFooterBrand extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm, 0.5rem);
    }
  `;

  render() {
    return html`
      <div class="brand">
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .footer {
      background-color: var(--footer-bg, var(--color-base, #f1f5f9));
      color: var(--footer-content, var(--color-base-content, #1e293b));
      padding: var(--footer-padding, var(--spacing-lg, 1.5rem) var(--spacing-md, 1rem));
      text-align: var(--footer-text-align, left);
      margin-top: var(--footer-margin-top, auto);
    }

    .footer-content {
      max-width: var(--footer-content-max-width, 1200px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg, 1.5rem);
    }
  `;

  render() {
    return html`
      <footer class="footer">
        <div class="footer-content">
          <slot></slot>
        </div>
      </footer>
    `;
  }
}

export class CraftilyFooterNavigation extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .navigation {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg, 1.5rem);
    }
  `;

  render() {
    return html`
      <nav class="navigation">
        <slot></slot>
      </nav>
    `;
  }
}

export class CraftilyFooterNavGroup extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .nav-group {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm, 0.5rem);
    }

    .title {
      font-weight: var(--font-weight-medium, 500);
      font-size: var(--text-sm, 0.875rem);
      text-transform: uppercase;
      color: var(--footer-nav-title-color, var(--color-base-content, #1e293b));
      margin-bottom: var(--spacing-xs, 0.25rem);
    }
  `;

  render() {
    return html`
      <div class="nav-group">
        <h3 class="title">${this.getAttribute('title')}</h3>
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyFooterLink extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .link {
      color: var(--footer-link-color, var(--color-base-content-secondary, #64748b));
      text-decoration: none;
      font-size: var(--text-sm, 0.875rem);
      transition: color 0.2s ease;
    }

    .link:hover {
      color: var(--footer-link-hover-color, var(--color-primary, #2563eb));
    }
  `;

  render() {
    return html`
      <a class="link" href="${this.getAttribute('href')}">
        <slot></slot>
      </a>
    `;
  }
}

export class CraftilyFooterCopyright extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      text-align: center;
    }

    .copyright {
      color: var(--footer-copyright-color, var(--color-base-content-secondary, #64748b));
      font-size: var(--text-sm, 0.875rem);
    }
  `;

  render() {
    return html`
      <div class="copyright">
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyFooterSocial extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .social {
      display: flex;
      justify-content: center;
      gap: var(--spacing-md, 1rem);
    }
  `;

  render() {
    return html`
      <div class="social">
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyFooterSocialLink extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--footer-social-link-color, var(--color-base-content-secondary, #64748b));
      font-size: var(--text-lg, 1.125rem);
      transition: color 0.2s ease;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
      background-color: var(--footer-social-link-bg, var(--color-base-300, #e2e8f0));
    }

    .social-link:hover {
      color: var(--footer-social-link-hover-color, var(--color-primary, #2563eb));
      background-color: var(--footer-social-link-hover-bg, var(--color-base-200, #f1f5f9));
    }
  `;

  render() {
    const icon = this.getAttribute('icon');
    const label = this.getAttribute('aria-label');
    return html`
      <a class="social-link" href="${this.getAttribute('href')}" aria-label="${label}">
        <i class="fa fa-${icon}"></i>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-footer': CraftilyFooter;
    'craftily-footer-navigation': CraftilyFooterNavigation;
    'craftily-footer-nav-group': CraftilyFooterNavGroup;
    'craftily-footer-link': CraftilyFooterLink;
    'craftily-footer-copyright': CraftilyFooterCopyright;
    'craftily-footer-social': CraftilyFooterSocial;
    'craftily-footer-social-link': CraftilyFooterSocialLink;
    'craftily-footer-brand': CraftilyFooterBrand;
  }
}

if (!customElements.get('craftily-footer')) {
  customElements.define('craftily-footer', CraftilyFooter);
}
if (!customElements.get('craftily-footer-navigation')) {
  customElements.define('craftily-footer-navigation', CraftilyFooterNavigation);
}
if (!customElements.get('craftily-footer-nav-group')) {
  customElements.define('craftily-footer-nav-group', CraftilyFooterNavGroup);
}
if (!customElements.get('craftily-footer-link')) {
  customElements.define('craftily-footer-link', CraftilyFooterLink);
}
if (!customElements.get('craftily-footer-copyright')) {
  customElements.define('craftily-footer-copyright', CraftilyFooterCopyright);
}
if (!customElements.get('craftily-footer-social')) {
  customElements.define('craftily-footer-social', CraftilyFooterSocial);
}
if (!customElements.get('craftily-footer-social-link')) {
  customElements.define('craftily-footer-social-link', CraftilyFooterSocialLink);
}
if (!customElements.get('craftily-footer-brand')) {
  customElements.define('craftily-footer-brand', CraftilyFooterBrand);
}
