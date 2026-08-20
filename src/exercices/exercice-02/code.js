import { html, LitElement } from "lit";

class Exercice02 extends LitElement {
  static get props() {
    return {
      name: { type: String },
      email: { type: String },
      age: { type: Number },
      isActive: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.name = "Pablo Hernández Soto";
    this.email = "pablohernandezsoto.28@outlook.com";
    this.age = 25;
  }

  render() {
    return html`
      <h1>Props en litelement</h1>

      <p>Nombre: ${this.name}</p>
      <p>Email: ${this.email}</p>
      <p>Edad: ${this.age}</p>
    `;
  }
}

customElements.define("exercice-02", Exercice02);
