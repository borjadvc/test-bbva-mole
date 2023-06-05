import { html, css, LitElement } from 'lit';
import { AppRouter } from './shared/helpers/router.js';
import './shared/components/headerView.js';
import './login/view/loginView.js';

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
    this.__observeRouterElement();
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

  __observeRouterElement() {
    const navbar = this.shadowRoot.querySelector('navbar-view');
    this.routerOutlet = this.shadowRoot.querySelector('#router-outlet');
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        const addedNode = mutation.addedNodes[0];
        if (
          addedNode instanceof HTMLElement &&
          addedNode instanceof customElements.get('home-view')
        ) {
          navbar.style.display = 'block';
        } else if (addedNode instanceof customElements.get('login-view')) {
          navbar.style.display = 'none';
          this.shadowRoot
            .querySelector('login-view')
            .addEventListener('user', e => {
              this.userName = e.detail.userName;
              navbar.userName = this.userName;
            });
        }
      });
    });
    this.observer.observe(this.routerOutlet, {
      childList: true,
      subtree: true,
    });
  }
}
window.customElements.define('hand-game-bbva', HandGameBBVA);
