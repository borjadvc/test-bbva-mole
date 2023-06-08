import { html, css, LitElement } from 'lit';

class ToastView extends LitElement {
  static properties = {
    type: { type: String },
    message: { type: String },
    duration: { type: Number },
  };

  static styles = css`
    .toast {
      position: fixed;
      top: 115%;
      bottom: 0;
      right: 10%;
      left: 10%;
      padding: 1.25rem 1.25rem;
      color: white;
      font-size: 0.875rem;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 0.25rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .success {
      background-color: black;
    }

    .error {
      background-color: red;
    }

    @media (max-width: 768px) {
      .toast {
        top: 110%;
      }
    }
  `;

  constructor() {
    super();
    this.type = 'success';
    this.message = '';
    this.duration = 3000;
  }

  connectedCallback() {
    super.connectedCallback();
    this._startTimer();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._clearTimer();
  }

  render() {
    return html`
      ${this.message
        ? html`
            <div class="toast ${this.type}">
              <span>${this.message}</span>
            </div>
          `
        : ''}
    `;
  }

  _startTimer() {
    this._timer = setTimeout(() => {
      this.close();
    }, this.duration);
  }

  _clearTimer() {
    clearTimeout(this._timer);
  }

  close() {
    this.dispatchEvent(new CustomEvent('close'));
  }
}

customElements.define('toast-view', ToastView);
