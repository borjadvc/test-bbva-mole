import { html, css, LitElement } from 'lit';
import { AppRouter } from '../shared/helpers/router.js';
import { View } from '../shared/constants/views.js';
import '../shared/components/buttonView.js';
import '../shared/components/inputField.js';
import '../shared/components/toastView.js';

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
    showToast: { type: Boolean },
    toastMessage: { type: String },
    toastType: { type: String },
    toastTimeout: { type: Number },
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
    this.showToast = false;
    this.toastMessage = '';
    this.toastType = '';
    this.toastTimeout = null;
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
      <toast-view
        .show=${this.showToast}
        .message=${this.toastMessage}
        .type=${this.toastType}
      ></toast-view>
    `;
  }

  __handleRegister() {
    const userName = this.shadowRoot.querySelector('input-field').value;
    if (!userName.length) {
      this.showToast = true;
      this.toastMessage = ERROR_EMPTY_FIELD_MESSAGE;
      this.toastType = 'error';
      this._startToastTimer();
      return;
    }

    if (!REGULAR_EXPRESSIONS.test(userName)) {
      this.showToast = true;
      this.toastMessage = ERROR_REGEX_MESSAGE;
      this.toastType = 'error';
      this._startToastTimer();
      return;
    }

    this.dispatchEvent(new CustomEvent('user', { detail: { userName } }));
    this.__goToGameView();
  }

  __goToGameView() {
    AppRouter.go({ pathname: View.Game.id });
    this.selectedViewId = AppRouter.getRootPath();
  }

  _startToastTimer() {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = setTimeout(() => {
      this.showToast = false;
      this.toastMessage = '';
      this.toastType = '';
      this.toastTimeout = null;
    }, 3000);
  }
}

window.customElements.define('home-view', HomeView);
