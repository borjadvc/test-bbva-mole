import { html, css, LitElement } from 'lit';
import { AppRouter } from './shared/helpers/router.js';
import './home/homeView.js';

export class HandGameBBVA extends LitElement {
  static properties = {
    userName: { type: String },
  };

  static styles = css`
    #main_view {
      position: absolute;
      top: 30%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }

    navbar-view {
      display: none;
    }
  `;

  constructor() {
    super();
    this.userName = '';
  }

  firstUpdated() {
    AppRouter.getRouter.call(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
  }

  render() {
    return html`<navbar-view></navbar-view>
      <main id="main_view"><div id="router-outlet"></div></main>`;
  }
}
window.customElements.define('hand-game-bbva', HandGameBBVA);
