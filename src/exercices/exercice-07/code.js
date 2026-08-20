import { html, LitElement } from "lit";

import { styleModule } from "./css/style";

class Exercice07 extends LitElement {
  static get styles() {
    return styleModule;
  }

  render() {
    return html`
      <h1>Importar estilos en litelement</h1>

      <button class="my-button">Click</button>
    `;
  }
}

customElements.define("exercice-07", Exercice07);
