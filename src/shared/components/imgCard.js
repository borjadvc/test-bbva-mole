import { LitElement, html, css } from 'lit';
import { Size, SizeMap } from '../constants/helper.js';

const profilePng = new URL(
  '../../../../assets/icons/computer-mouse-solid.svg',
  import.meta.url
).href;

class ImgCard extends LitElement {
  static properties = {
    size: { type: String },
  };

  static styles = css`
    .small-size {
      width: 60px;
    }

    .medium-size {
      width: 80px;
    }

    .long-size {
      width: 100px;
    }

    img {
      width: 100%;
      border-radius: 50%;
    }
  `;

  getSizeClass() {
    if (this.size && SizeMap[this.size]) {
      return SizeMap[this.size];
    }
    return SizeMap[Size.S];
  }

  render() {
    return html`<img
      class=${this.getSizeClass()}
      alt="profile img"
      src=${profilePng}
    />`;
  }
}

customElements.define('img-card', ImgCard);
