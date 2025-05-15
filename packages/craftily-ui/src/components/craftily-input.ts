import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilyInput extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 100%;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      border: var(--input-border, 1px solid var(--color-base, #e0e0e0));
      border-radius: var(--input-border-radius, var(--radius-sm, 0.1rem));
      background-color: var(--input-bg, var(--color-base, #ffffff));
      transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;
      position: relative;
    }

    .input-wrapper:focus-within {
      outline: none;
      border-color: var(--input-focus-border-color, var(--color-primary));
      box-shadow: var(
        --input-focus-shadow,
        0 0 0 2px var(--color-primary, rgba(59, 130, 246, 0.5))
      );
    }

    .input-wrapper.disabled {
      background-color: var(--input-disabled-bg, var(--color-base, #f0f0f0));
      cursor: not-allowed;
    }

    .input-wrapper.error {
      border-color: var(--input-error-border-color, var(--color-error));
    }

    .input-wrapper.success {
      border-color: var(--input-success-border-color, var(--color-success));
    }

    .input {
      flex-grow: 1;
      width: 100%; /* Allow flex to control final width */
      height: var(--input-height, calc(var(--spacing, 0.25rem) * 10));
      padding: var(--input-padding, 0 0.75rem);
      font-size: var(--input-font-size, var(--text-base));
      border: none; /* Border is now on input-wrapper */
      color: var(--input-text-color, var(--color-base-content, #000000));
      outline: none; /* Focus outline handled by wrapper */
      position: relative;
      z-index: 2; /* Ensure input is above other elements */
    }

    /* .input:focus is handled by .input-wrapper:focus-within */

    .input:disabled {
      /* background-color: var(--input-disabled-bg, var(--color-base-200, #f0f0f0)); */ /* Handled by wrapper */
      cursor: not-allowed;
      opacity: 0.7;
    }

    /* .input.error styling is handled by .input-wrapper.error */

    /* .input.success styling is handled by .input-wrapper.success */

    .error-message {
      color: var(--input-error-text-color, var(--color-error));
      font-size: var(--input-error-font-size, var(--text-sm));
      margin-top: var(--spacing-xs, 0.25rem);
    }

    ::slotted([slot='suffix']) {
      margin-left: var(--spacing-xs, 0.25rem);
      position: relative;
      z-index: 1;
      pointer-events: none;
    }

    ::slotted([slot='prefix']) {
      position: relative;
      z-index: 1;
      pointer-events: none;
    }

    ::slotted(span[slot='prefix']),
    ::slotted(span[slot='suffix']) {
      display: inline-flex;
      align-items: center;
      padding: 0 var(--spacing-sm, 0.5rem);
      color: var(--input-text-color, var(--color-base-content, #000000));
      opacity: 0.7;
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: String })
  type = 'text';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  name = '';

  @property({ type: String })
  error = '';

  @property({ type: Boolean })
  success = false;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    // Ensure the input event is properly dispatched
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );

    // Request an update to ensure the component re-renders
    this.requestUpdate();
  }

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    // Ensure the change event is properly dispatched
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );

    // Request an update to ensure the component re-renders
    this.requestUpdate();
  }

  private handleWrapperClick(e: MouseEvent) {
    if (this.disabled) return;

    // Find the input element and focus it
    const input = this.shadowRoot?.querySelector('input');
    if (input) {
      input.focus();
    }
  }

  render() {
    const classes = ['input', this.error ? 'error' : '', this.success ? 'success' : '']
      .filter(Boolean)
      .join(' ');

    const wrapperClasses = [
      'input-wrapper',
      this.error ? 'error' : '',
      this.success ? 'success' : '',
      this.disabled ? 'disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div>
        <div class="${wrapperClasses}" @click=${this.handleWrapperClick}>
          <slot name="prefix"></slot>
          <input
            class="input"
            value=${this.value}
            placeholder=${this.placeholder}
            type=${this.type}
            ?disabled=${this.disabled}
            name=${this.name}
            @input=${this.handleInput}
            @change=${this.handleChange}
            part="input"
          />
          <slot name="suffix"></slot>
        </div>
        ${this.error ? html`<div class="error-message">${this.error}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-input': CraftilyInput;
  }
}
if (!customElements.get('craftily-input')) {
  customElements.define('craftily-input', CraftilyInput);
}
