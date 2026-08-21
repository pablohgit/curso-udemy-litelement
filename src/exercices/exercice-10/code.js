import { html, LitElement } from "lit";

class Exercice10 extends LitElement {
  // Event @change
  handlerChange(e) {
    let valueInput = e.target.value;

    let lengthInput = valueInput.length;

    console.log(`Event value: ${valueInput}`);
    console.log(`Event value: ${lengthInput}`);
  }

  // Event @keyup
  handlerKeyUp(e) {
    if (e.target.value.length === 4) {
      this.shadowRoot.getElementById("input-three").disabled = false;
    } else {
      this.shadowRoot.getElementById("input-three").disabled = true;
    }
  }

  // Event @input
  handlerInput(e) {
    if (e.target.value.length === 4) {
      console.log("Longitud del input 3 es menor que 4");
    } else {
      console.log("Longitud del input 3 es mayor que 4");
    }
  }

  render() {
    return html`
      <h1>Controlar eventos en litelement</h1>

      <input
        type="text"
        id="input-one"
        placeholder="input one"
        @change="${this.handlerChange}"
      />

      <input
        type="text"
        id="input-two"
        placeholder="input two"
        @change="${this.handlerChange}"
        @keyup="${this.handlerKeyUp}"
      />

      <input
        type="text"
        id="input-three"
        placeholder="input three"
        disabled
        @input="${this.handlerInput}"
      />
    `;
  }
}

customElements.define("exercice-10", Exercice10);
