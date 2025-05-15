import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class Tabs extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .tabs {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md, 1rem);
    }

    :host([variant='pills']) ::slotted(craftily-tabs-list) {
      --tabs-list-border: none;
      --tabs-trigger-border-radius: var(--radius-md, 0.375rem);
      --tabs-trigger-active-bg: var(--color-primary);
      --tabs-trigger-active-color: var(--color-primary-content);
    }

    :host([variant='underline']) ::slotted(craftily-tabs-list) {
      --tabs-list-border: none;
      --tabs-trigger-border-bottom: 2px solid transparent;
      --tabs-trigger-active-border-color: var(--color-primary);
      --tabs-trigger-hover-border-color: var(--color-primary-focus);
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String })
  defaultValue = '';

  @property({ type: String })
  variant = 'default'; // 'default' | 'pills' | 'underline'

  @property({ type: String })
  size = 'md'; // 'sm' | 'md' | 'lg'

  private _value: string = '';

  connectedCallback() {
    super.connectedCallback();
    this._value = this.value || this.defaultValue;
    this.updateTabStates();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('value')) {
      this._value = this.value;
      this.updateTabStates();
    }
  }

  private updateTabStates() {
    const triggers = this.querySelectorAll('craftily-tabs-trigger');
    const contents = this.querySelectorAll('craftily-tabs-content');

    triggers.forEach((trigger: any) => {
      trigger.selected = trigger.value === this._value;
    });

    contents.forEach((content: any) => {
      content.hidden = content.value !== this._value;
    });
  }

  handleTabChange(newValue: string) {
    this._value = newValue;
    this.updateTabStates();
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: newValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="tabs" part="tabs">
        <slot></slot>
      </div>
    `;
  }
}

export class TabsList extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .tabs-list {
      display: flex;
      gap: var(--spacing-md, 1rem);
      border-bottom: var(--tabs-list-border, 1px solid var(--color-border, #e2e8f0));
      padding-bottom: var(--spacing-sm, 0.5rem);
    }
  `;

  render() {
    return html`
      <div class="tabs-list" part="list">
        <slot></slot>
      </div>
    `;
  }
}

export class TabsTrigger extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--tabs-trigger-padding, 0.5rem 1rem);
      border: none;
      background: var(--tabs-trigger-bg, transparent);
      cursor: pointer;
      font-size: var(--tabs-trigger-font-size, 1rem);
      color: var(--tabs-trigger-color, var(--color-base-content, #4a5568));
      border-radius: var(--tabs-trigger-border-radius, 0);
      border-bottom: var(--tabs-trigger-border-bottom, none);
      transition: all 0.2s ease;
      gap: var(--spacing-xs, 0.25rem);
    }

    .trigger:hover {
      background: var(--tabs-trigger-hover-bg, var(--color-base-200, #edf2f7));
      border-color: var(--tabs-trigger-hover-border-color, transparent);
      color: var(--tabs-trigger-hover-color, var(--color-primary, #2b6cb0));
    }

    .trigger[aria-selected='true'] {
      background: var(--tabs-trigger-active-bg, transparent);
      color: var(--tabs-trigger-active-color, var(--color-primary, #2b6cb0));
      font-weight: var(--tabs-trigger-active-font-weight, 500);
      border-color: var(--tabs-trigger-active-border-color, transparent);
    }

    :host([variant='pills']) .trigger[aria-selected='true'] {
      background-color: #2b6cb0;
      color: white;
    }

    :host([variant='underline']) .trigger[aria-selected='true'] {
      border-bottom: 2px solid #2b6cb0;
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: Boolean, reflect: true })
  selected = false;

  private handleClick() {
    const tabs = this.closest('craftily-tabs');
    if (tabs) {
      (tabs as Tabs).handleTabChange(this.value);
    }
  }

  render() {
    return html`
      <button class="trigger" role="tab" aria-selected=${this.selected} @click=${this.handleClick}>
        <slot></slot>
      </button>
    `;
  }
}

export class TabsContent extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .content {
      padding: var(--tabs-content-padding, 1rem 0);
      animation: fadeIn 0.2s ease;
    }

    :host([hidden]) {
      display: none;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(2px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  @property({ type: String })
  value = '';

  render() {
    return html`
      <div class="content" role="tabpanel">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-tabs': Tabs;
    'craftily-tabs-list': TabsList;
    'craftily-tabs-trigger': TabsTrigger;
    'craftily-tabs-content': TabsContent;
  }
}

if (!customElements.get('craftily-tabs')) {
  customElements.define('craftily-tabs', Tabs);
}

if (!customElements.get('craftily-tabs-list')) {
  customElements.define('craftily-tabs-list', TabsList);
}

if (!customElements.get('craftily-tabs-trigger')) {
  customElements.define('craftily-tabs-trigger', TabsTrigger);
}

if (!customElements.get('craftily-tabs-content')) {
  customElements.define('craftily-tabs-content', TabsContent);
}
