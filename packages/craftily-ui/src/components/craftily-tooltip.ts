import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilyTooltip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .tooltip-container {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }

    .tooltip-text {
      visibility: hidden;
      width: max-content;
      max-width: var(--tooltip-max-width, 200px);
      background-color: var(--tooltip-bg, var(--color-neutral, #333333));
      color: var(--tooltip-content, var(--color-neutral-content, #ffffff));
      text-align: center;
      border-radius: var(--tooltip-border-radius, var(--radius-sm, 0.1rem));
      padding: var(--tooltip-padding, 0.5rem);
      position: absolute;
      z-index: var(--z-tooltip, 1010);
      opacity: 0;
      transition:
        opacity 0.3s,
        visibility 0.3s;
      font-size: var(--tooltip-font-size, var(--text-sm));
      box-shadow: var(--tooltip-shadow, var(--shadow-md));
    }

    .tooltip-text::after {
      content: '';
      position: absolute;
      border-width: 5px;
      border-style: solid;
    }

    /* Position variants */
    :host([position='top']) .tooltip-text {
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
    }

    :host([position='top']) .tooltip-text::after {
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: var(--tooltip-bg, var(--color-neutral, #333333)) transparent transparent
        transparent;
    }

    :host([position='right']) .tooltip-text {
      top: 50%;
      left: 105%;
      transform: translateY(-50%);
    }

    :host([position='right']) .tooltip-text::after {
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-color: transparent var(--tooltip-bg, var(--color-neutral, #333333)) transparent
        transparent;
    }

    :host([position='left']) .tooltip-text {
      top: 50%;
      right: 105%;
      transform: translateY(-50%);
    }

    :host([position='left']) .tooltip-text::after {
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-color: transparent transparent transparent
        var(--tooltip-bg, var(--color-neutral, #333333));
    }

    :host([position='bottom']) .tooltip-text {
      top: 125%;
      left: 50%;
      transform: translateX(-50%);
    }

    :host([position='bottom']) .tooltip-text::after {
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: transparent transparent var(--tooltip-bg, var(--color-neutral, #333333))
        transparent;
    }

    /* Show tooltip on hover */
    .tooltip-container:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }

    /* Show tooltip when trigger is focus */
    :host([trigger='focus']) .tooltip-container:focus-within .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
  `;

  @property({ type: String, reflect: true })
  position: 'top' | 'right' | 'left' | 'bottom' = 'top';

  @property({ type: String })
  content = '';

  @property({ type: String, reflect: true })
  trigger: 'hover' | 'focus' = 'hover';

  render() {
    return html`
      <div class="tooltip-container" tabindex="${this.trigger === 'focus' ? '0' : '-1'}">
        <slot></slot>
        <div class="tooltip-text">
          ${this.content ? this.content : html`<slot name="content"></slot>`}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-tooltip': CraftilyTooltip;
  }
}
if (!customElements.get('craftily-tooltip')) {
  customElements.define('craftily-tooltip', CraftilyTooltip);
}
