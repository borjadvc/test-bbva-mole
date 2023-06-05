import { LitElement, html, css } from 'lit';
import { AppRouter } from '../helpers/router.js';
import { View } from '../constants/views.js';

const arrowIcon = new URL(
  '../../../assets/icons/arrow-right-from-bracket-solid.svg',
  import.meta.url
).href;

const rankingIcon = new URL(
  '../../../assets/icons/ranking-star-solid.svg',
  import.meta.url
).href;

class HeaderView extends LitElement {
  static properties = {
    userName: { type: String },
  };

  static styles = css`
    img {
      flex: 1;
    }

    .header {
      display: flex;
      height: 4rem;
      align-items: center;
    }

    .header--nav {
      background-color: #222222;
      color: white;
    }

    .header--text {
      flex: 1;
      font-size: 1.5rem;
    }

    .header--icon {
      height: 50%;
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(48deg)
        brightness(107%) contrast(105%);
    }

    .header--icon:after {
      content: '';
      background: #0d79c7;
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -20px !important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s;
    }

    @media (min-width: 768px) {
      .header {
        height: 4.25rem;
      }
      .header--text {
        font-size: 2rem;
      }
    }
  `;

  constructor() {
    super();
    this.userName = '';
  }

  render() {
    return html`<nav class="header header--nav">
      <p class="header--text">Hi ${this.userName}</p>
      <img
        class="header--icon"
        alt="arrow-icon"
        src=${rankingIcon}
        @click=${() => {
          this.__goToView(View.Ranking.id);
        }}
        @keyup="${() => {
          this.__goToView(View.Ranking.id);
        }}"
        tabindex="0"
      />
      <img
        class="header--icon"
        alt="arrow-icon"
        src=${arrowIcon}
        @click=${() => {
          this.__goToView(View.Login.id);
        }}
        @keyup="${() => {
          this.__goToView(View.Login.id);
        }}"
        tabindex="0"
      />
    </nav> `;
  }

  __goToView(viewId) {
    if (viewId) {
      AppRouter.go({ pathname: viewId });
      this.selectedViewId = AppRouter.getRootPath();
    }
  }
}

customElements.define('navbar-view', HeaderView);
