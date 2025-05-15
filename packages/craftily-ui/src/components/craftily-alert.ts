// src/components/alert-box.ts
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class AlertBox extends LitElement {
  @property({ type: String }) type: 'info' | 'success' | 'warning' | 'danger' = 'info';
  @property({ type: String }) title = '';
  @property({ type: Boolean }) dismissible = true;

  static styles = css`
    .alert {
      padding: var(--alert-padding, var(--spacing-sm, 0.25rem));
      border-radius: var(--alert-border-radius, var(--radius-sm, 0.25rem));
      font-size: var(--alert-font-size, var(--text-md, 1rem));
      display: flex;
      align-items: center;
      gap: var(--alert-spacing, var(--spacing-sm, 0.25rem));
      border: 1px solid;
    }

    .alert .icon {
      font-size: var(--alert-icon-size, var(--text-md, 1rem));
    }

    .close {
      margin-left: auto;
      background: transparent;
      border: none;
      font-size: var(--alert-close-size, var(--text-lg, 1.8rem));
      cursor: pointer;
      color: var(--color-base-content, #fff);
    }

    .close:hover {
      opacity: 0.8;
    }
    /* Variants */
    .info {
      background: var(--alert-info-bg, var(--color-info));
      color: var(--alert-info-content, var(--color-info-content));
      border-color: var(--alert-info-border, var(--color-info-content));
    }

    .success {
      background: var(--alert-success-bg, var(--color-success));
      color: var(--alert-success-content, var(--color-success-content));
      border-color: var(--alert-success-border, var(--color-success-content));
    }

    .warning {
      background: var(--alert-warning-bg, var(--color-warning));
      color: var(--alert-warning-content, var(--color-warning-content));
      border-color: var(--alert-warning-border, var(--color-warning-content));
    }

    .danger {
      background: var(--alert-danger-bg, var(--color-error));
      color: var(--alert-danger-content, var(--color-error-content));
      border-color: var(--alert-danger-border, var(--color-error-content));
    }
  `;

  render() {
    return html`
      <div part="alert" class="alert ${this.type} ${this.className}">
        <span part="icon" class="icon">
          <slot name="icon"></slot>
        </span>
        ${this.title ? html`<strong part="title">${this.title}</strong>` : ''}
        <slot part="content"></slot>
        ${this.dismissible
          ? html`<button part="close" class="close" @click=${() => this.remove()}>&times;</button>`
          : ''}
      </div>
    `;
  }
}

if (!customElements.get('craftily-alert')) {
  customElements.define('craftily-alert', AlertBox);
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-alert': AlertBox;
  }
}
