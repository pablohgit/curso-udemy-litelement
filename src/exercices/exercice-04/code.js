import { html, LitElement } from "lit";

class Exercice04 extends LitElement {
  static get props() {
    return {
      name: { type: String },
      age: { type: Number },
      job: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Pablo Hernández Soto";
    this.age = 25;
    this.job = "Desarrollador web";
  }

  render() {
    return html`
      <h1>Slots en litelement</h1>

      <div>
        Hola usuario
        <slot name="name">desconocido</slot>
        <slot name="age">desconocido</slot>
        <slot name="job">desconocido</slot>
      </div>
    `;
  }
}

customElements.define("exercice-04", Exercice04);
