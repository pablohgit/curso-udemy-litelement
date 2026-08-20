import { html, LitElement } from "lit";

class Exercice01 extends LitElement {
  render() {
    return html` <h1>Conectar primer componente de litElement</h1> `;
  }
}

customElements.define("exercice-01", Exercice01);
