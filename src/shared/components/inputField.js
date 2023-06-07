import { LitElement, html, css } from 'lit';

class InputField extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    type: { type: String },
    isFocus: { type: Boolean },
    isFirstTime: { type: Boolean },
  };

  static styles = css`
    #input-field {
      height: 100%;
      align-items: center;
      gap: 0 1em;
    }
    input {
      height: 2.4375rem;
      max-width: 18.875rem;
      min-width: 16.125rem;
      font-size: 1rem;
      padding-left: 0.4375em;
      padding-right: 0.0625em;
      outline: 0;
      border: none;
      border-bottom: 0.0625rem solid rgb(63, 63, 63);
    }
    input:focus {
      border: none;
      border-bottom: 0.0625rem solid rgb(133, 194, 248);
    }
    span label {
      position: absolute;
      padding: 0 0.125em 0 0.125em;
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
        margin-top: -0.75em;
        margin-left: 0.4375em;
      }
      to {
        margin-top: 0.625em;
        margin-left: 0.4375em;
      }
    }
    @keyframes outAnimation {
      to {
        font-size: 0.75em;
        margin-top: -0.75em;
        margin-left: 0.4375em;
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

  getLabelClass() {
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
    return html`
      <span id="input-field">
        <span>
          <label class="${this.getLabelClass()}">${this.label}</label>
          <input
            .value="${this.value}"
            .type="${this.type}"
            @change="${e => this.setValue(e.target.value)}"
            @focusin="${() => {
              this.isFocus = true;
            }}"
            @focusout="${() => {
              this.isFocus = false;
            }}"
          />
        </span>
      </span>
    `;
  }
}

customElements.define('input-field', InputField);
