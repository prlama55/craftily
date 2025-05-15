import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilyAvatar extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .avatar {
      display: inline-block;
      object-fit: cover;
      width: var(--avatar-size, 2.5rem);
      height: var(--avatar-size, 2.5rem);
      background-color: var(--avatar-bg);
      color: var(--avatar-color);
      border: var(--avatar-border);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      border-radius: var(--avatar-border-radius, 50%);
      aspect-ratio: 1/1;
    }

    .avatar.primary {
      --avatar-bg: var(--color-primary);
      --avatar-color: var(--color-primary-content);
      --avatar-border: 2px solid var(--color-primary);
    }

    .avatar.secondary {
      --avatar-bg: var(--color-secondary);
      --avatar-color: var(--color-secondary-content);
      --avatar-border: 2px solid var(--color-secondary);
    }

    .avatar.danger {
      --avatar-bg: var(--color-danger);
      --avatar-color: var(--color-danger-content);
      --avatar-border: 2px solid var(--color-danger);
    }

    .avatar.square {
      --avatar-border-radius: 2rem;
    }

    .avatar.circle {
      --avatar-border-radius: 100%;
    }
  `;

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @property({ type: String })
  shape: 'square' | 'circle' = 'circle';

  @property({ type: String })
  src?: string;

  @property({ type: String })
  alt = '';

  @property({ type: String })
  size?: string;

  render() {
    const classes = ['avatar', this.variant, this.shape].filter(Boolean).join(' ');
    const style = this.size ? `--avatar-size: ${this.size};` : '';

    return html`
      ${this.src
        ? html`<img class="${classes}" src="${this.src}" alt="${this.alt}" style="${style}" />`
        : html`<div class="${classes}" style="${style}"><slot></slot></div>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-avatar': CraftilyAvatar;
  }
}

if (!customElements.get('craftily-avatar')) {
  customElements.define('craftily-avatar', CraftilyAvatar);
}
