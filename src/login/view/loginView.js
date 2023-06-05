import { html, css, LitElement } from 'lit';
import { AppRouter } from '../../shared/helpers/router.js';
import { View } from '../../shared/constants/views.js';
import '../../shared/components/buttonView.js';
import '../../shared/components/inputField.js';

const loginHeaderIcon = new URL(
  '../../../assets/icons/computer-mouse-solid.svg',
  import.meta.url
).href;
export class LoginView extends LitElement {
  static properties = {
    userName: { type: String },
    loginInformationText: { type: String },
    buttonName: { type: String },
  };

  static styles = css`
    h1 {
      color: white;
    }
    .login {
      width: 343px;
    }
    .login--section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .login--icon {
      width: 50px;
      height: 50px;
      border-radius: 3rem;
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
    this.loginInformationText = 'Create new player';
    this.buttonName = 'join';
  }

  render() {
    return html`
      <section class="login login--section">
        <div class="login--icon">
          <img src="${loginHeaderIcon}" class="icon" alt="login-icon" />
        </div>
        <h1>${this.loginInformationText}</h1>
        <input-field label="Name*" type="text"></input-field>
        <button-view
          buttonLabel="${this.buttonName}"
          @click=${() => {
            this.__goToHomeView(View.Home.id);
          }}
        ></button-view>
      </section>
    `;
  }

  __goToHomeView(viewId) {
    if (viewId) {
      this.__handleRegister();
      AppRouter.go({ pathname: viewId });
      this.selectedViewId = AppRouter.getRootPath();
    }
  }

  __handleRegister() {
    const userName = this.shadowRoot.querySelector('input-field').value;
    this.dispatchEvent(new CustomEvent('user', { detail: { userName } }));
  }
}
window.customElements.define('login-view', LoginView);
