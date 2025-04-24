export class CraftilyButton extends HTMLButtonElement {
  constructor() {
    super();
    this.innerHTML = `
        <button class="btn"/>
      `;
  }
  disconnectedCallback() {
    this.innerHTML = "";
  }
}
customElements.define("craftily-button", CraftilyButton, { extends: "button" });
