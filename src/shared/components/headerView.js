import { LitElement, html, css } from 'lit';

const userIcon = new URL(
  '../../../assets/icons/circle-user-solid.svg',
  import.meta.url
).href;

class HeaderView extends LitElement {
  static properties = {
    userName: { type: String },
  };

  static styles = css`
    .header {
      display: flex;
      height: 4rem;
      align-items: center;
    }
    .header--nav {
      background-color: #1262a8;
      color: white;
    }
    .header--container {
      display: flex;
      flex: 1;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 1.5rem;
    }
    .header__text {
      margin: 0;
      padding: 0 1.875rem;
      font-size: 2rem;
    }
    .header__level-text {
      margin: 0;
      padding: 0 1.875rem;
      font-size: 1rem;
    }
    .header__icon {
      height: 2.5rem;
      padding-left: 0.9375rem;
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(48deg)
        brightness(107%) contrast(105%);
    }

    @media (min-width: 48em) {
      .header {
        height: 4.25rem;
      }
      .header__text {
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
      <div class="header--container ">
        <img
          class="header--icon"
          alt="user-icon"
          src=${userIcon}
          tabindex="0"
        />
        <p class="header--text">${this.userName}</p>
      </div>
    </nav> `;
  }
}

customElements.define('header-view', HeaderView);
