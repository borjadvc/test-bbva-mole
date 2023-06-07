import { html, css, LitElement } from 'lit';
import { AppRouter } from '../shared/helpers/router.js';
import { View } from '../shared/constants/views.js';
import '../shared/components/buttonView.js';
import '../shared/components/inputField.js';

const homeHeaderIcon = new URL(
  '../../assets/icons/computer-mouse-solid.svg',
  import.meta.url
).href;

const REGULAR_EXPRESSIONS = /^[a-zA-Z0-9]+$/;

const ERROR_EMPTY_FIELD_MESSAGE = 'The name field must not be empty.';

const ERROR_REGEX_MESSAGE = 'Username should only contain letters and numbers.';

export class HomeView extends LitElement {
  static properties = {
    userName: { type: String },
    buttonName: { type: String },
  };

  static styles = css`
    .home {
      width: 21.4375rem;
    }
    .home--section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .home--icon {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 3rem;
      margin-bottom: 2em;
    }
    .icon {
      width: 50%;
      height: 100%;
    }
    button-view {
      margin-top: 2.25rem;
    }
  `;

  constructor() {
    super();
    this.userName = '';
    this.buttonName = 'join';
  }

  render() {
    return html`
      <section class="home home--section">
        <div class="home--icon">
          <img src="${homeHeaderIcon}" class="icon" alt="home-icon" />
        </div>
        <input-field label="Name" type="text"></input-field>
        <button-view
          buttonLabel="${this.buttonName}"
          @click=${() => {
            this.__handleRegister();
          }}
        ></button-view>
      </section>
    `;
  }

  /**
   *  Gets the value of the input-field and checks the field then sends you to the Game view
   */
  __handleRegister() {
    const userName = this.shadowRoot.querySelector('input-field').value;
    if (!userName.length) {
      alert(ERROR_EMPTY_FIELD_MESSAGE);
      return;
    }

    if (!REGULAR_EXPRESSIONS.test(userName)) {
      alert(ERROR_REGEX_MESSAGE);
      return;
    }

    this.dispatchEvent(new CustomEvent('user', { detail: { userName } }));
    this.__goToGameView();
  }

  __goToGameView() {
    AppRouter.go({ pathname: View.Game.id });
    this.selectedViewId = AppRouter.getRootPath();
  }
}
window.customElements.define('home-view', HomeView);
