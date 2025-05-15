import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'accent'
  | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl';
type IconPosition = 'left' | 'right';

export class CraftilyButton extends LitElement {
  @property({ type: String }) variant: ButtonVariant = 'primary';
  @property({ type: String }) size: ButtonSize = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, attribute: 'icon-position' }) iconPosition: IconPosition = 'left';
  @property({ type: String }) label?: string;

  static styles = css`
    :host {
      display: inline-block;
    }
    .btn {
      background: var(--btn-bg, var(--color-base));
      color: var(--btn-content, var(--color-base-content));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--btn-border-radius, var(--radius-sm, 0.1rem));
      font-weight: var(--font-weight-normal, 500);
      cursor: pointer;
      transition:
        background 0.4s ease,
        color 0.4s ease;
      border: var(--btn-border, none);
      box-shadow: var(--btn-box-shadow, none);
      padding: var(--btn-padding, 0.5rem);
      font-size: var(--btn-font-size, var(--text-md, 1rem));
      height: var(--btn-height, calc(var(--spacing, 0.25rem) * 8));
      outline-style: var(--btn-outline-style, none);
      gap: var(--spacing, 0.25rem);
      white-space: nowrap;
      opacity: 0.9;
    }
    .btn:hover {
      opacity: 0.8;
      --btn-box-shadow: none;
    }
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      --btn-box-shadow: none;
    }
    .btn:active {
      opacity: 1;
    }
    .btn-xs {
      --btn-border-radius: 2px;
      --btn-height: calc(var(--spacing, 0.25rem) * 4);
      --btn-font-size: var(--text-xs, 0.75rem);
    }
    .btn-sm {
      --btn-border-radius: var(--spacing, 0.25rem);
      --btn-height: calc(var(--spacing, 0.25rem) * 6);
      --btn-font-size: var(--text-sm, 0.875rem);
    }
    .btn-md {
      --btn-border-radius: var(--radius-xs, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 8);
      --btn-font-size: var(--text-md, 1rem);
    }
    .btn-lg {
      --btn-border-radius: var(--radius-sm, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 10);
      --btn-font-size: var(--text-lg, 1.125rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 2);
    }
    .btn-xl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 12);
      --btn-font-size: var(--text-xl, 1.25rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 4);
    }
    .btn-xxl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 14);
      --btn-font-size: var(--text-xxl, 1.5rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 6);
    }
    .btn-3xl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 16);
      --btn-font-size: var(--text-3xl, 1.75rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 8);
    }
    .btn-4xl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 16);
      --btn-font-size: var(--text-4xl, 2rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 10);
    }
    .btn-primary {
      --btn-bg: var(--color-primary);
      --btn-content: var(--color-primary-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-secondary {
      --btn-bg: var(--color-secondary);
      --btn-content: var(--color-secondary-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-outline {
      --btn-bg: transparent;
      --btn-content: var(--color-primary);
      --btn-outline-style: solid;
      outline-width: 1px;
    }
    .btn-success {
      --btn-bg: var(--color-success);
      --btn-content: var(--color-success-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-error {
      --btn-bg: var(--color-error);
      --btn-content: var(--color-error-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-warning {
      --btn-bg: var(--color-warning);
      --btn-content: var(--color-warning-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-info {
      --btn-bg: var(--color-info);
      --btn-content: var(--color-info-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-accent {
      --btn-bg: var(--color-accent);
      --btn-content: var(--color-accent-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-ghost {
      --btn-bg: transparent;
      --btn-content: var(--color-primary);
      --btn-outline-style: none;
    }
    .icon,
    .icon * {
      width: var(--btn-font-size);
      height: var(--btn-font-size);
    }
  `;

  private renderIcon() {
    return html`<slot name="icon" class="icon"></slot>`;
  }

  private renderLabel() {
    return html`<slot name="label">${this.label}</slot>`;
  }

  private handleClick(e: Event) {
    this.dispatchEvent(
      new CustomEvent('click', {
        detail: { originalEvent: e },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const iconSlot = this.renderIcon();
    const labelSlot = this.renderLabel();

    return html`
      <button
        class="btn btn-${this.variant} btn-${this.size}"
        ?disabled=${this.disabled}
        part="button"
        @click=${this.handleClick}
      >
        ${this.iconPosition === 'left'
          ? html`${iconSlot}${labelSlot}`
          : html`${labelSlot}${iconSlot}`}
      </button>
    `;
  }
}
if (!customElements.get('craftily-button')) {
  customElements.define('craftily-button', CraftilyButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-button': CraftilyButton;
  }
}
