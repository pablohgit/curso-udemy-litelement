import { html, LitElement } from "lit";

class Exercice11 extends LitElement {
  static get props() {
    return {
      countries: { type: Array },
    };
  }

  constructor() {
    super();
    this.countries = [
      { name: "Argentina", value: "arg" },
      { name: "Brasil", value: "bra" },
      { name: "Chile", value: "chi" },
      { name: "Uruguay", value: "uru" },
      { name: "Republica Independite del Congo", value: "ric" },
    ];
  }

  render() {
    return html`
      <h1>Selects y retornar su valor en litelement</h1>

      <select @change=${(e) => console.log(e.target.value)}>
        <option selected>--</option>
        ${this.countries.map(
          (country) =>
            html`<option value="${country.value}">${country.name}</option>`,
        )}
      </select>
    `;
  }
}

customElements.define("exercice-11", Exercice11);
