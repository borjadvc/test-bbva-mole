import { LitElement, html, css } from 'lit';
import { ButtonTypes } from '../constants/helper.js';

class ButtonView extends LitElement {
  static properties = {
    buttonLabel: { type: String },
    type: { type: String },
  };

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      height: fit-content;
      border-radius: 1.25rem;
    }

    .button {
      display: flex;
      width: 16.875rem;
      height: 2.8125rem;
      justify-content: center;
      align-items: center;
      padding: 0.625em 0.9375em;
      border-radius: 0.375em;
      cursor: pointer;
      border: none;
    }

    .button--view {
      background-color: #1262a8;
      color: #fff;
      text-transform: uppercase;
    }
  `;

  getButtonClass() {
    if (ButtonTypes[this.type]) {
      return ButtonTypes[this.type].class;
    }

    return ButtonTypes.default.class;
  }

  emitClick() {
    this.dispatchEvent(new CustomEvent('btnClick'));
  }

  render() {
    return html`<button
      class="button button--view ${this.getButtonClass()}"
      @click=${this.emitClick}
    >
      ${this.buttonLabel}
    </button>`;
  }
}

customElements.define('button-view', ButtonView);
