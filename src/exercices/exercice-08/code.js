import { css, html, LitElement } from "lit";

class Exercice08 extends LitElement {
  static get styles() {
    return css`
      :host {
        --bg-color: black;
        --primary-color: orange;
      }

      .my-button {
        width: 100px;
        height: 50px;
        background-color: var(--bg-color);
        color: var(--primary-color);
      }
    `;
  }

  render() {
    return html`
      <h1>Importar estilos con varibales en litelement</h1>

      <button class="my-button">Click</button>
    `;
  }
}

customElements.define("exercice-08", Exercice08);
