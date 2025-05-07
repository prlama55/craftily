import { LitElement, html } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { imageUtils } from '../utils';
import {
  Property,
  SupportedFileFormat,
  MimeTypes,
  InputControlProps,
  DefaultControlProps,
  ImageEditorEventDetail,
} from '../types';
import {
  DEFAULT_CONTROL_OPTIONS,
  EVENT_TYPE_CONTROL_CHANGE,
  EVENT_TYPE_RESET,
  MIME_TYPES,
} from '../constants';
import editorStyles from './ImageEditorStyles';

class ImageEditor extends LitElement {
  static styles = editorStyles;

  @property({ type: String }) src = '';

  // Toggle which controls to display
  @property({ type: Object }) controls: Record<Property, InputControlProps> = undefined;

  /**
   * Dimensions (optional)
   */
  @property({ type: Number }) width?: number;
  @property({ type: Number }) height?: number;
  @property({ type: Boolean }) showUpload?: boolean;
  @property({ type: Boolean }) showDownload?: boolean;

  @state() defaultState: DefaultControlProps = DEFAULT_CONTROL_OPTIONS;

  @state() format: SupportedFileFormat = 'png';

  @query('canvas') canvas!: HTMLCanvasElement;
  @query('img') imgEl!: HTMLImageElement;

  @state() mimeTypes: MimeTypes = MIME_TYPES;

  connectedCallback() {
    super.connectedCallback();
    this.defaultState = Object.entries(DEFAULT_CONTROL_OPTIONS).reduce((acc, [key, control]) => {
      acc[key] = {
        defaultValue: this.controls?.[key]?.value || control.defaultValue,
        min: control?.min,
        max: control?.max,
      };
      return acc;
    }, {} as DefaultControlProps);
  }

  private showActions() {
    if (!this.src) return;
    return html`<div class="actions ${!this.showDownload ? 'hide-download' : ''}">
      <span class="divider"></span>
      ${this.showDownload
        ? html`<button @click=${this.download} title="Download">
            ${html`<span class="icon">⬇️</span>`}
          </button>`
        : ''}
      <button @click=${this.reset} title="Reset">${html`<span class="icon">🔄</span>`}</button>
    </div>`;
  }

  render() {
    return html`
      ${this.showUpload
        ? html`<div class="upload">
            <label>Select Image:</label>
            <input type="file" accept="image/*" @change=${this.onFileChange} />
          </div>`
        : ''}
      <canvas></canvas>
      <img src=${this.src} crossorigin="anonymous" @load=${this.draw} style="display:none;" />

      <div class="toolbar">
        ${this.showActions()}
        ${Object.entries(this.controls || {}).map(([key, control]) =>
          this.inputControl(key, control)
        )}
      </div>
    `;
  }

  private inputControl(key: string, control: InputControlProps) {
    if (!this.src) return;

    if (key === 'color') {
      return html`<div class="control">
        <label>${control.label}</label>
        <input
          name=${key}
          type="color"
          value="${control.value || this.defaultState[key].defaultValue}"
          @input=${(e: Event) => this.updateValue(key, (e.target as HTMLInputElement).value)}
        />
      </div>`;
    }
    return html`<div class="control">
      <label>${control.label}</label>
      <input
        name=${key}
        type="range"
        min="${this.defaultState[key].min}"
        max="${this.defaultState[key].max}"
        step="0.1"
        value="${control.value || this.defaultState[key].defaultValue}"
        @input=${(e: Event) => this.updateValue(key, (e.target as HTMLInputElement).value)}
      />
    </div>`;
  }

  private updateValue(key: string, value: number | string) {
    this.controls[key].value = value;
    this.draw();
    this.onControlChange(`${key}Changed`);
  }

  private draw() {
    const ctx = this.canvas.getContext('2d');
    const img = this.imgEl;
    if (!ctx || !img) return;

    const width = this.width || img.naturalWidth;
    const height = this.height || img.naturalHeight;
    this.canvas.width = width;
    this.canvas.height = height;

    imageUtils.applyImageFilters(ctx, img, this.canvas, {
      brightness: this.controls?.brightness?.value || this.defaultState.brightness.defaultValue,
      contrast: this.controls?.contrast?.value || this.defaultState.contrast.defaultValue,
      saturate: this.controls?.saturate?.value || this.defaultState.saturate.defaultValue,
      grayscale: this.controls?.grayscale?.value || this.defaultState.grayscale.defaultValue,
      opacity: this.controls?.opacity?.value || this.defaultState.opacity.defaultValue,
      sepia: this.controls?.sepia?.value || this.defaultState.sepia.defaultValue,
      hueRotate: this.controls?.hueRotate?.value || this.defaultState.hueRotate.defaultValue,
      blur: this.controls?.blur?.value || this.defaultState.blur.defaultValue,
      color: this.controls?.color?.value || this.defaultState.color.defaultValue,
    });
  }

  private download(event: Event) {
    event.preventDefault();
    imageUtils.download(this.format, 1.0);
  }
  private onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.src = URL.createObjectURL(file);
    }
  }

  /**
   * Reset all filters to default values and redraw image
   */
  private reset() {
    this.controls = Object.entries(this.controls || {}).reduce(
      (acc, [key, control]) => {
        const input: HTMLInputElement = this.renderRoot.querySelector(`input[name="${key}"]`);
        if (input && control.value !== this.defaultState[key].defaultValue) {
          input.value = this.defaultState[key]?.defaultValue;
        }
        acc[key] = {
          ...control,
          value: this.defaultState[key].defaultValue,
        };
        return acc;
      },
      {} as Record<Property, InputControlProps>
    );
    this.draw();
    this.onControlChange(EVENT_TYPE_RESET);
  }

  private onControlChange(type: string) {
    const event = new CustomEvent<ImageEditorEventDetail>(EVENT_TYPE_CONTROL_CHANGE, {
      detail: {
        toDataURL: (type: SupportedFileFormat = 'png', quality = 1.0) =>
          imageUtils.toDataURL(type, quality),
        toBlob: (type: SupportedFileFormat = 'png', quality = 1.0) =>
          imageUtils.toBlob(type, quality),
        download: (type: SupportedFileFormat = 'png', quality = 1.0) =>
          imageUtils.download(type, quality),
        metadata: {
          canvas: this.canvas,
          controls: this.controls,
          eventType: type,
        },
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

if (!customElements.get('craftily-image-editor')) {
  customElements.define('craftily-image-editor', ImageEditor);
}
