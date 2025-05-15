import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CraftilyModal extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 10;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .modal.open {
      display: block;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background-color: white;
      margin: 5% auto;
      padding: 2rem;
      border-radius: var(--radius-md, 0.2rem);
      width: 90%;
      max-width: var(--modal-max-width, 600px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      position: relative;
      animation: slideIn 0.3s ease;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .modal-header h2 {
      margin: 0;
      font-size: var(--modal-title-size, 1.5rem);
      color: var(--modal-title-color, inherit);
    }

    .close {
      font-size: 1.5rem;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0.5rem;
      line-height: 1;
      color: var(--modal-close-color, #666);
      transition: color 0.2s ease;
    }

    .close:hover {
      color: var(--modal-close-hover-color, #000);
    }

    .modal-body {
      margin-bottom: 1rem;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('open')) {
      if (this.open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  @property({ type: String })
  title = '';

  private handleClose() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('close', { composed: true, bubbles: true }));
  }

  private handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this.handleClose();
    }
    e.stopPropagation();
  }

  render() {
    return html`
      <div class="modal ${this.open ? 'open' : ''}" @click=${this.handleBackdropClick}>
        <div class="modal-content">
          <div class="modal-header">
            <h2>${this.title}</h2>
            <button class="close" @click=${this.handleClose}>&times;</button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'craftily-modal': CraftilyModal;
  }
}
if (!customElements.get('craftily-modal')) {
  customElements.define('craftily-modal', CraftilyModal);
}
