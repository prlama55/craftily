import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilySelect extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 100%;
    }

    .select {
      width: 100%;
      appearance: none;
      height: var(--select-height, calc(var(--spacing, 0.25rem) * 10));
      padding: var(--select-padding, 0 2.5rem 0 0.75rem);
      font-size: var(--select-font-size, var(--text-base));
      border-radius: var(--select-border-radius, var(--radius-sm, 0.1rem));
      border: var(--select-border, 1px solid var(--color-base-300, #e0e0e0));
      background-color: var(--select-bg, var(--color-base-100, #ffffff));
      color: var(--select-text-color, var(--color-base-content, #000000));
      background-image: var(
        --select-arrow-icon,
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")
      );
      background-repeat: no-repeat;
      background-position: right var(--spacing-sm, 0.5rem) center;
      background-size: var(--select-arrow-size, 1.25em);
      cursor: pointer;
      transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;
    }

    .select:focus {
      outline: none;
      border-color: var(--select-focus-border-color, var(--color-primary));
      box-shadow: var(
        --select-focus-shadow,
        0 0 0 2px var(--color-primary-focus, rgba(59, 130, 246, 0.5))
      );
    }

    .select:disabled {
      background-color: var(--select-disabled-bg, var(--color-base-200, #f0f0f0));
      border-color: var(--select-disabled-border-color, var(--color-base-300, #e0e0e0));
      cursor: not-allowed;
      opacity: 0.7;
      background-image: var(
        --select-disabled-arrow-icon,
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%239ca3af'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")
      );
    }

    .error-message {
      color: var(--select-error-text-color, var(--color-error));
      font-size: var(--select-error-font-size, var(--text-sm));
      margin-top: var(--spacing-xs, 0.25rem);
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  name = '';

  @property({ type: String })
  error = '';

  @property({ type: Array })
  options: Array<{ value: string; label: string }> = [];

  private handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div>
        <select
          class="select"
          .value=${this.value}
          ?disabled=${this.disabled}
          .name=${this.name}
          @change=${this.handleChange}
        >
          <slot></slot>
          ${this.placeholder
            ? html`<option value="" disabled selected>${this.placeholder}</option>`
            : ''}
          ${this.options.map(
            (option) => html` <option value=${option.value}>${option.label}</option> `
          )}
          <slot></slot>
        </select>
        ${this.error ? html`<div class="error-message">${this.error}</div>` : ''}
      </div>
    `;
  }
}

export class CraftilyOption extends LitElement {
  @property({ type: String })
  value = '';

  render() {
    return html`
      <option value=${this.value}>
        <slot></slot>
      </option>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-select': CraftilySelect;
    'craftily-option': CraftilyOption;
  }
}
if (!customElements.get('craftily-select')) {
  customElements.define('craftily-select', CraftilySelect);
}
if (!customElements.get('craftily-option')) {
  customElements.define('craftily-option', CraftilyOption);
}
