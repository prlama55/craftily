import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export class CraftilyRadio extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .radio-wrapper {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .radio {
      appearance: none;
      width: var(--radio-size, 1.25em);
      height: var(--radio-size, 1.25em);
      border: var(--radio-border, 2px solid var(--color-base-300, #e0e0e0));
      border-radius: var(--radio-border-radius, 50%);
      background-color: var(--radio-bg, var(--color-base-100, #ffffff));
      position: relative;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
    }

    .radio:checked {
      border-color: var(--radio-checked-border-color, var(--color-primary));
      background-color: var(--radio-checked-bg, var(--color-primary));
    }

    .radio:checked::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--radio-dot-size, 0.5em);
      height: var(--radio-dot-size, 0.5em);
      border-radius: 50%;
      background-color: var(--radio-dot-color, var(--color-primary-content, #ffffff));
    }

    .radio:disabled {
      background-color: var(--radio-disabled-bg, var(--color-base-200, #f0f0f0));
      border-color: var(--radio-disabled-border-color, var(--color-base-300, #e0e0e0));
      cursor: not-allowed;
      opacity: 0.7;
    }

    .radio:disabled::before {
      background-color: var(--radio-disabled-dot-color, var(--color-base-300, #e0e0e0));
    }

    .radio-label {
      margin-left: var(--spacing-xs, 0.25rem);
      cursor: pointer;
      user-select: none;
    }

    :host([disabled]) .radio-label {
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
      <label class="radio-wrapper">
        <input
          type="radio"
          class="radio"
          .checked=${this.checked}
          .disabled=${this.disabled}
          .name=${this.name}
          .value=${this.value}
          @change=${this.handleChange}
        />
        <span class="radio-label">
          <slot></slot>
        </span>
      </label>
    `;
  }
}

export class CraftilyRadioGroup extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm, 0.5rem);
    }

    :host([horizontal]) .radio-group {
      flex-direction: row;
      gap: var(--spacing-md, 1rem);
    }
  `;

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = '';

  @property({ type: Boolean, reflect: true })
  horizontal = false;

  private updateRadioStates() {
    const radios = this.querySelectorAll('craftily-radio');
    radios.forEach((radio: any) => {
      radio.checked = radio.value === this.value;
    });
  }

  private handleRadioChange(e: Event) {
    const radio = e.target as any;
    if (radio.tagName.toLowerCase() === 'craftily-radio') {
      this.value = radio.value;
      this.updateRadioStates();
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('value')) {
      this.updateRadioStates();
    }
  }

  render() {
    return html`
      <div class="radio-group" @change=${this.handleRadioChange}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-radio': CraftilyRadio;
    'craftily-radio-group': CraftilyRadioGroup;
  }
}
if (!customElements.get('craftily-radio')) {
  customElements.define('craftily-radio', CraftilyRadio);
}
if (!customElements.get('craftily-radio-group')) {
  customElements.define('craftily-radio-group', CraftilyRadioGroup);
}
