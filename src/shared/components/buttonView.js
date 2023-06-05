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
    }
    .button--view {
      background-color: #85c2f8;
      color: #000;
      font-weight: bolder;
      text-transform: uppercase;
    }

    .button--view:hover {
      background-color: #61b1f7;
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
    return html`<span
      class="button button--view ${this.getButtonClass()}"
      @click=${this.emitClick}
      >${this.buttonLabel}</span
    >`;
  }
}

customElements.define('button-view', ButtonView);
