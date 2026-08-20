import { css, html, LitElement } from "lit";

class Exercice06 extends LitElement {
  static get styles() {
    return css`
      p {
        color: red;
      }
    `;
  }

  render() {
    return html`
      <h1>Estilos en litelement</h1>

      <p>mostrando estilos de manera estatica</p>
    `;
  }
}

customElements.define("exercice-06", Exercice06);
