import { LitElement, html, css } from 'lit';

export class HolaLit extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      soy el componente hola-lit
    `;
  }
}
customElements.define('hola-lit', HolaLit);
