import { LitElement, html, css } from 'lit';

class InputField extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    type: { type: String },
    isFocus: { type: Boolean, sate: true },
    isFirstTime: { type: Boolean, sate: true },
  };

  static styles = css`
    #input-field {
      height: 100%;
      align-items: center;
      gap: 0 10px;
    }

    input {
      height: 39px;
      max-width: 350px;
      min-width: 290px;
      font-size: 1rem;
      padding-left: 7px;
      padding-right: 1px;
      outline: 0;
      border: none;
      border-bottom: 1px solid rgb(63, 63, 63);
    }

    input:focus {
      border: none;
      border-bottom: 1px solid rgb(133, 194, 248);
    }

    span label {
      position: absolute;
      margin-top: 10px;
      margin-left: 7px;
      padding: 0 2px 0 2px;
      animation-duration: 0.25s;
      animation-fill-mode: forwards;
      color: rgb(171, 171, 171);
    }

    .label-up {
      animation-name: outAnimation;
    }

    .label-center {
      animation-name: inAnimation;
    }

    @keyframes inAnimation {
      from {
        margin-top: -12px;
        margin-left: 7px;
      }
      to {
        margin-top: 10px;
        margin-left: 7px;
      }
    }

    @keyframes outAnimation {
      to {
        font-size: 0.75em;
        margin-top: -12px;
        margin-left: 7px;
        color: #a2b6d6;
      }
    }
  `;

  constructor() {
    super();
    this.value = '';
    this.isFocus = false;
    this.isFirstTime = true;
  }

  getLabelCalss() {
    if (this.value?.length > 0 || this.isFocus) {
      this.isFirstTime = false;
      return 'label-up';
    }

    if (this.isFirstTime) {
      return '';
    }

    return 'label-center';
  }

  setValue(value) {
    this.value = value;
    this.dispatchEvent(
      new CustomEvent('updateValue', { detail: { value: this.value } })
    );
  }

  render() {
    return html`<span id="input-field">
      <span>
        <label class=${this.getLabelCalss()}>${this.label}</label>
        <input
          .value=${this.value}
          .type=${this.type}
          @change=${e => this.setValue(e.target.value)}
          @focusin=${() => {
            this.isFocus = true;
          }}
          @focusout=${() => {
            this.isFocus = false;
          }}
        />
      </span>
    </span>`;
  }
}

customElements.define('input-field', InputField);
