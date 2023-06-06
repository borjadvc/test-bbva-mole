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
    .header--first-container {
      display: flex;
      flex: 1;
      align-items: start;
      justify-content: start;
      font-size: 1.5rem;
    }
    .header--second-container {
      display: flex;
      flex: 1;
      align-items: end;
      justify-content: end;
      padding: 0 30px;
      font-size: 1.5rem;
    }
    .header--second-container--select {
      background-color: #1262a8;
      border: none;
      color: white;
      font-size: 1.65rem;
    }
    .header--text {
      margin: 0;
      padding: 0 30px;
      font-size: 2rem;
    }
    .header--level-text {
      margin: 0;
      padding: 0 30px;
      font-size: 1rem;
    }
    .header--icon {
      height: 40px;
      padding-left: 15px;
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(48deg)
        brightness(107%) contrast(105%);
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
      <div class="header--first-container ">
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
