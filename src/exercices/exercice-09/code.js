import { html, LitElement } from "lit";

class Exercice09 extends LitElement {
  handlerClick() {
    console.log("click");
  }

  render() {
    return html`
      <h1>Controlar eventos en litelement</h1>

      <button @click="${this.handlerClick}">Click</button>
    `;
  }
}

customElements.define("exercice-09", Exercice09);
