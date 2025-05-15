import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilySpinner extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .spinner {
      width: var(--spinner-size, 2rem);
      height: var(--spinner-size, 2rem);
      border-width: var(--spinner-border-width, 3px);
      border-style: solid;
      border-color: var(--spinner-color, var(--color-primary));
      border-top-color: transparent;
      border-radius: 50%;
      display: inline-block;
      animation: spin 1s linear infinite;
    }

    :host([size='sm']) .spinner {
      --spinner-size: 1rem;
      --spinner-border-width: 2px;
    }

    :host([size='md']) .spinner {
      --spinner-size: 2rem;
      --spinner-border-width: 3px;
    }

    :host([size='lg']) .spinner {
      --spinner-size: 3rem;
      --spinner-border-width: 4px;
    }

    :host([size='xl']) .spinner {
      --spinner-size: 4rem;
      --spinner-border-width: 4px;
    }

    .spinner-container {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm, 0.5rem);
    }

    .spinner-text {
      color: var(--spinner-text-color, inherit);
      font-size: var(--spinner-text-size, inherit);
    }
  `;

  @property({ type: String, reflect: true })
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @property({ type: String })
  color = '';

  @property({ type: String })
  label = '';

  render() {
    const spinnerStyle = this.color ? `--spinner-color: ${this.color};` : '';

    return html`
      <div class="spinner-container">
        <div class="spinner" style="${spinnerStyle}"></div>
        ${this.label ? html`<span class="spinner-text">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-spinner': CraftilySpinner;
  }
}
if (!customElements.get('craftily-spinner')) {
  customElements.define('craftily-spinner', CraftilySpinner);
}
