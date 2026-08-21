import { html, LitElement } from "lit";

class Exercice05 extends LitElement {
  static get properties() {
    return {
      article: { type: Object },
      prop1: { type: String },
      prop2: { type: String },
    };
  }

  constructor() {
    super();

    this.article = {
      title: "Blog en litelement",
      description: "description en litelement",
      content: "content en litelement",
    };

    this.prop1 = "Propiedad 1";
    this.prop2 = "Propiedad 2";
  }

  render() {
    return html`
      <h1>Plantillas en litelement</h1>

      ${this.showTextOne()}
      <hr />
      ${this.showTextTwo()}
    `;
  }

  showTextOne() {
    return html`<h2>${this.article.title}</h2>
      <p>${this.article.description}</p>
      <p>${this.article.content}</p>`;
  }

  showTextTwo() {
    return html` <span>${this.prop1} ${this.prop2}</span> `;
  }
}

customElements.define("exercice-05", Exercice05);
