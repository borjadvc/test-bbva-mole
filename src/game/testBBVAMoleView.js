import { html, css, LitElement } from 'lit';
import '../shared/components/toastView.js';

export class TestBBVAMoleView extends LitElement {
  static properties = {
    score: { type: Number },
    cells: { type: Array },
    playing: { type: Boolean },
    intervalId: { type: Number },
    buttonName: { type: String },
    showToast: { type: Boolean },
    toastMessage: { type: String },
    toastType: { type: String },
    toastTimeout: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
      text-align: center;
      --mole-image-url: url('../../assets/images/mole-image.png');
    }
    .game,
    .game--section {
      display: flex;
      flex-direction: column;
      font-size: 1.5em;
    }
    .game__score {
      display: flex;
      flex-direction: column;
      text-align: end;
      align-items: end;
    }
    .game__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
      justify-items: center;
    }
    .game__cell {
      display: inline-block;
      width: 8rem;
      height: 8rem;
      border: 0.2rem solid black;
      cursor: pointer;
    }
    .game__mole {
      display: none;
      width: 6.4rem;
      height: 6.4rem;
      background-image: var(--mole-image-url);
      background-size: cover;
      border-radius: 50%;
      margin: 1rem auto;
    }
    .game__mole--show {
      display: block;
    }
    .game__buttons {
      margin-top: 0.5em;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .game__button {
      display: inline-block;
      width: 8rem;
      height: 8rem;
      border: 0.2rem solid black;
      cursor: pointer;
      background-color: transparent;
      padding: 0;
    }
    .game__mole--hidden {
      display: none;
    }

    @media (max-width: 768px) {
      .game__cell {
        width: 6rem;
        height: 6rem;
      }
      .game__buttons {
        margin-top: 1em;
      }
      .game__mole {
        width: 4.3rem;
        height: 4.3rem;
      }
      p {
        margin: 0.5rem;
      }
    }
  `;

  constructor() {
    super();
    this.score = 0;
    this.cells = Array(9).fill(false);
    this.playing = false;
    this.intervalId = null;
    this.buttonName = 'Play';
    this.notificationVisible = false;
    this.showToast = false;
    this.toastMessage = '';
    this.toastType = '';
    this.toastTimeout = null;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.__stopGameLoop();
  }

  render() {
    return html`
      <section class="game game--section">
        <div class="game__score"><p>Score: ${this.score}</p></div>
        <div class="game__grid">
          ${this.cells.map(
            (cell, index) => html`
              <button
                class="game__button game__cell"
                @click="${() => this.__handleCellClick(index)}"
                @keyup="${() => this.__handleCellClick(index)}"
              >
                <div
                  class="game__mole ${cell ? 'game__mole--show ' : ''} ${cell
                    ? ''
                    : 'game__mole--hidden'}"
                ></div>
              </button>
            `
          )}
        </div>
        <div class="game__buttons">
          ${this.playing
            ? html`
                <button-view
                  class="game__button-view"
                  buttonLabel="${this.buttonName}"
                  @click=${() => {
                    this.__handleStopClick();
                  }}
                ></button-view>
              `
            : html`
                <button-view
                  class="game__button-view"
                  buttonLabel="${this.buttonName}"
                  @click=${() => {
                    this.__handlePlayClick();
                  }}
                ></button-view>
              `}
        </div>
      </section>
      <toast-view
        .show=${this.showToast}
        .message=${this.toastMessage}
        .type=${this.toastType}
      ></toast-view>
    `;
  }

  __handlePlayClick() {
    this.playing = true;
    this.buttonName = 'Stop';
    this.score = 0;
    this.__startGameLoop();
  }

  __handleStopClick() {
    this.playing = false;
    this.buttonName = 'Play';
    this.__stopGameLoop();
    this.cells = Array(9).fill(false);
  }

  __startGameLoop() {
    this.intervalId = setInterval(() => {
      this.__showRandomMole();
    }, 1000);
  }

  __stopGameLoop() {
    clearInterval(this.intervalId);
  }

  __showRandomMole() {
    this.cells = this.cells.map(() => Math.random() < 0.5);
  }

  __handleCellClick(index) {
    if (this.cells[index]) {
      navigator.vibrate(200);
      this.score += 1;
      this.cells[index] = false;
      this.showToast = true;
      this.toastMessage = 'Good Job!';
      this.toastType = 'success';
      this.__startToastTimer();
    }
  }

  __startToastTimer() {
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
window.customElements.define('test-bbva-mole-view', TestBBVAMoleView);
