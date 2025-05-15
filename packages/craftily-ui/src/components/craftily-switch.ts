import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class Switch extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 36px;
      height: 20px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 20px;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:disabled + .slider {
      opacity: 0.5;
      cursor: not-allowed;
    }

    input:checked + .slider:before {
      transform: translateX(16px);
    }
  `;

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  name = '';

  private handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <label class="switch">
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          name=${this.name}
          @change=${this.handleChange}
        />
        <span class="slider"></span>
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-switch': Switch;
  }
}
if (!customElements.get('craftily-switch')) {
  customElements.define('craftily-switch', Switch);
}
