import { html, LitElement } from "lit";

class Exercice03 extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      id: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Pablo Hernández Soto";
    this.id = "div-id";
  }

  render() {
    return html`
      <h1>properties en litelement por enlaces</h1>

      <!-- Bind por enlace de texto -->
      <p>Nombre: ${this.name}</p>

      <!-- Bind por enlace de atributo -->
      <div id="${this.id}">Enlace de atributo</div>

      <!-- Bind por enlace de evento -->
      <button @click="${this.clickHandler}">Click me</button>
    `;
  }

  clickHandler() {
    console.log("Has hecho click");
  }
}

customElements.define("exercice-03", Exercice03);
