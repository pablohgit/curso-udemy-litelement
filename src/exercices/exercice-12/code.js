import { html, LitElement } from "lit";

class Exercice12 extends LitElement {
  static get properties() {
    return {
      clicks: { type: Number },
    };
  }

  constructor() {
    super();

    this.clicks = 0;
  }

  render() {
    return html`
      <h1>Contador con eventos en litelement</h1>

      <button @click=${this.handlerIncrementClick}>Incremantar</button>

      <button @click=${this.handlerDecrementClick}>Decrementar</button>

      <span>Contador de clicks: ${this.clicks}</span>
    `;
  }

  handlerIncrementClick() {
    this.clicks++;

    console.log(this.clicks);
  }

  handlerDecrementClick() {
    if (this.clicks === 0) {
      return;
    } else {
      this.clicks--;
    }

    console.log(this.clicks);
  }
}

customElements.define("exercice-12", Exercice12);
