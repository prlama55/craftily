import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilyBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--badge-padding, 0.25em 0.5em);
      font-size: var(--badge-font-size, var(--text-xs));
      font-weight: var(--badge-font-weight, var(--font-weight-semibold, 600));
      border-radius: var(--badge-border-radius, var(--radius-full));
      background-color: var(--badge-bg, var(--color-primary));
      color: var(--badge-content, var(--color-primary-content));
      line-height: 1;
      white-space: nowrap;
    }

    .badge.secondary {
      background-color: var(--badge-secondary-bg, var(--color-secondary));
      color: var(--badge-secondary-content, var(--color-secondary-content));
    }

    .badge.accent {
      background-color: var(--badge-accent-bg, var(--color-accent));
      color: var(--badge-accent-content, var(--color-accent-content));
    }

    .badge.ghost {
      background-color: var(--badge-ghost-bg, var(--color-base-200));
      color: var(--badge-ghost-content, var(--color-base-content));
      border: 1px solid var(--color-base-300);
    }

    .badge.outline {
      background-color: transparent;
      color: var(--badge-outline-content, var(--color-primary));
      border: 1px solid var(--badge-outline-border, var(--color-primary));
    }

    .badge.dot {
      padding-left: calc(var(--badge-dot-size, 0.5em) + var(--spacing-xs, 0.25rem) * 2);
      position: relative;
    }

    .badge.dot::before {
      content: '';
      position: absolute;
      left: var(--spacing-xs, 0.25rem);
      top: 50%;
      transform: translateY(-50%);
      width: var(--badge-dot-size, 0.5em);
      height: var(--badge-dot-size, 0.5em);
      border-radius: var(--radius-full);
      background-color: currentColor;
    }
  `;

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' = 'primary';

  @property({ type: Boolean })
  dot = false;

  render() {
    const classes = ['badge', this.variant !== 'primary' ? this.variant : '', this.dot ? 'dot' : '']
      .filter(Boolean)
      .join(' ');

    return html`
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-badge': CraftilyBadge;
  }
}
if (!customElements.get('craftily-badge')) {
  customElements.define('craftily-badge', CraftilyBadge);
}
