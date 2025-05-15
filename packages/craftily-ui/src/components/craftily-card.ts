import { LitElement, html, css } from 'lit';

export class CraftilyCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      padding: var(--card-padding, 1rem);
      border-radius: var(--card-border-radius, var(--radius-md, 0.2rem));
      background-color: var(--card-bg, var(--color-base-100, #ffffff));
      box-shadow: var(--card-shadow, var(--shadow-md));
      border: var(--card-border, 1px solid var(--color-base-300, #e0e0e0));
    }
  `;

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

export class CraftilyCardTitle extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-size: var(--card-title-font-size, var(--text-lg));
      font-weight: var(--font-weight-semibold, 600);
      margin-bottom: var(--spacing-sm, 0.5rem);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

export class CraftilyCardBody extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-size: var(--card-body-font-size, var(--text-base));
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

export class CraftilyCardActions extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: var(--spacing-md, 1rem);
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: var(--spacing-sm, 0.5rem);
    }
  `;

  render() {
    return html`
      <div class="actions">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-card': CraftilyCard;
    'craftily-card-title': CraftilyCardTitle;
    'craftily-card-body': CraftilyCardBody;
    'craftily-card-actions': CraftilyCardActions;
  }
}
if (!customElements.get('craftily-card')) {
  customElements.define('craftily-card', CraftilyCard);
}
if (!customElements.get('craftily-card-title')) {
  customElements.define('craftily-card-title', CraftilyCardTitle);
}
if (!customElements.get('craftily-card-body')) {
  customElements.define('craftily-card-body', CraftilyCardBody);
}
if (!customElements.get('craftily-card-actions')) {
  customElements.define('craftily-card-actions', CraftilyCardActions);
}
