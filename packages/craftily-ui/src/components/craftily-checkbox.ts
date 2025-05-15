import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilyCheckbox extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .checkbox {
      appearance: none;
      width: var(--checkbox-size, 1.25em);
      height: var(--checkbox-size, 1.25em);
      border: var(--checkbox-border, 2px solid var(--color-base, #e0e0e0));
      border-radius: var(--checkbox-border-radius, var(--radius-xs, 0.05rem));
      background-color: var(--checkbox-bg, var(--color-base, #ffffff));
      position: relative;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
    }

    .checkbox:checked {
      background-color: var(--checkbox-checked-bg, var(--color-primary));
      border-color: var(--checkbox-checked-border-color, var(--color-primary));
    }

    .checkbox:checked::before {
      content: '\\2713';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: var(--checkbox-checkmark-size, 0.8em);
      color: var(--checkbox-checkmark-color, var(--color-primary-content, #ffffff));
    }

    .checkbox:disabled {
      background-color: var(--checkbox-disabled-bg, var(--color-base, #f0f0f0));
      border-color: var(--checkbox-disabled-border-color, var(--color-base, #e0e0e0));
      cursor: not-allowed;
      opacity: 0.7;
    }

    .checkbox:disabled::before {
      color: var(--checkbox-disabled-checkmark-color, var(--color-base, #e0e0e0));
    }

    .checkbox-label {
      margin-left: var(--spacing-xs, 0.25rem);
      cursor: pointer;
      user-select: none;
    }

    :host([disabled]) .checkbox-label {
      cursor: not-allowed;
      opacity: 0.7;
    }
  `;

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = '';

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          checked: this.checked,
          value: this.value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <label class="checkbox-wrapper">
        <input
          type="checkbox"
          class="checkbox"
          .checked=${this.checked}
          .disabled=${this.disabled}
          .name=${this.name}
          .value=${this.value}
          @change=${this.handleChange}
        />
        <span class="checkbox-label">
          <slot></slot>
        </span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-checkbox': CraftilyCheckbox;
  }
}
if (!customElements.get('craftily-checkbox')) {
  customElements.define('craftily-checkbox', CraftilyCheckbox);
}
