import { html, css, LitElement } from 'lit';

const moleImage = new URL(
  '../../../assets/images/mole-image.png',
  import.meta.url
).href;

export class GameView extends LitElement {
  static properties = {};

  static styles = css``;

  constructor() {
    super();
    this.userName = '';
    this.buttonName = 'join';
  }

  render() {
    return html` <section class=""></section> `;
  }
}
window.customElements.define('game-view', GameView);
