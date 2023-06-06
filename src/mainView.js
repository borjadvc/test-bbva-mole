import { html, css, LitElement } from 'lit';
import { AppRouter } from './shared/helpers/router.js';
import './shared/components/headerView.js';
import './home/homeView.js';
import './game/gameView.js';

export class MainView extends LitElement {
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
    return html`<header-view></header-view>
      <main id="main_view"><div id="router-outlet"></div></main>`;
  }

  __observeRouterElement() {
    const headerView = this.shadowRoot.querySelector('header-view');
    this.routerOutlet = this.shadowRoot.querySelector('#router-outlet');
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        const addedNode = mutation.addedNodes[0];
        if (
          addedNode instanceof HTMLElement &&
          addedNode instanceof customElements.get('game-view')
        ) {
          headerView.style.display = 'block';
        } else if (addedNode instanceof customElements.get('home-view')) {
          headerView.style.display = 'none';
          this.shadowRoot
            .querySelector('home-view')
            .addEventListener('user', e => {
              this.userName = e.detail.userName;
              headerView.userName = this.userName;
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
window.customElements.define('main-view', MainView);
