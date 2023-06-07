/* eslint-disable lit-a11y/click-events-have-key-events */
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
      border-radius: 20px;
    }

    .button {
      display: flex;
      width: 270px;
      height: 45px;
      justify-content: center;
      align-items: center;
      padding: 0px 15px;
      border-radius: 6px;
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
