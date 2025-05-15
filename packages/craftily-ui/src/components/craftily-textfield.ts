import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilyTextfield extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .textfield-container {
      position: relative;
      width: 100%;
    }

    .textfield {
      font-family: sans-serif;
      font-size: var(--textfield-font-size, var(--text-md));
      padding: var(--textfield-padding);
      border: var(--textfield-border, 1px solid var(--color-base-300));
      border-radius: var(--textfield-border-radius, var(--radius-sm));
      background: var(--textfield-bg, var(--color-base-100));
      color: var(--textfield-color, var(--color-base-content));
      outline: var(--textfield-outline, none);
      width: 100%;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
      resize: vertical;
    }

    .textfield:focus {
      border-color: var(--textfield-border-focus, var(--color-primary));
      outline: var(--textfield-outline, none);
    }

    /* Size variants */
    :host([size='xs']) .textfield {
      --textfield-font-size: var(--text-xs);
      --textfield-padding: var(--spacing, 0.25rem) 0.5rem;
    }

    :host([size='sm']) .textfield {
      --textfield-font-size: var(--text-sm);
      --textfield-padding: var(--spacing, 0.25rem) 0.75rem;
    }

    :host([size='md']) .textfield {
      --textfield-font-size: var(--text-md);
      --textfield-padding: var(--spacing, 0.25rem) 1rem;
    }

    :host([size='lg']) .textfield {
      --textfield-font-size: var(--text-lg);
      --textfield-padding: var(--spacing, 0.25rem) 1.25rem;
    }

    /* Color variants */
    :host([variant='primary']) .textfield {
      --textfield-border: 1px solid var(--color-primary);
      --textfield-border-focus: var(--color-primary);
    }

    :host([variant='error']) .textfield {
      --textfield-border: 1px solid var(--color-error);
      --textfield-border-focus: var(--color-error);
    }

    :host([variant='success']) .textfield {
      --textfield-border: 1px solid var(--color-success);
      --textfield-border-focus: var(--color-success);
    }

    .textfield:disabled {
      background-color: var(--textfield-disabled-bg, var(--color-base-200));
      cursor: not-allowed;
      opacity: 0.7;
    }

    .error-message {
      color: var(--textfield-error-text-color, var(--color-error));
      font-size: var(--textfield-error-font-size, var(--text-sm));
      margin-top: var(--spacing-xs, 0.25rem);
    }

    .label {
      display: block;
      margin-bottom: var(--spacing-xs, 0.25rem);
      font-size: var(--textfield-label-font-size, var(--text-sm));
      color: var(--textfield-label-color, var(--color-base-content));
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
  label = '';

  @property({ type: String })
  error = '';

  @property({ type: String, reflect: true })
  size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

  @property({ type: String, reflect: true })
  variant: 'primary' | 'error' | 'success' | '' = '';

  @property({ type: Boolean })
  multiline = false;

  @property({ type: Number })
  rows = 3;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
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
    const inputProps = {
      class: 'textfield',
      value: this.value,
      placeholder: this.placeholder,
      disabled: this.disabled,
      name: this.name,
      '@input': this.handleInput,
      '@change': this.handleChange,
    };

    return html`
      <div class="textfield-container">
        ${this.label ? html`<label class="label">${this.label}</label>` : ''}
        ${this.multiline
          ? html`<textarea rows=${this.rows} ...=${inputProps}></textarea>`
          : html`<input type=${this.type} ...=${inputProps} />`}
        ${this.error ? html`<div class="error-message">${this.error}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-textfield': CraftilyTextfield;
  }
}
if (!customElements.get('craftily-textfield')) {
  customElements.define('craftily-textfield', CraftilyTextfield);
}
