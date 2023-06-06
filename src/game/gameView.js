import { html, css, LitElement } from 'lit';

export class GameView extends LitElement {
  static properties = {
    score: { type: Number },
    cells: { type: Array },
    playing: { type: Boolean },
    intervalId: { type: Number },
    buttonName: { type: String },
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
      grid-gap: 10px;
      justify-items: center;
    }
    .game__cell {
      display: inline-block;
      width: 100px;
      height: 100px;
      border: 2px solid black;
      cursor: pointer;
    }
    .game__mole {
      display: none;
      width: 80px;
      height: 80px;
      background-image: var(--mole-image-url);
      background-size: cover;
      border-radius: 50%;
      margin: 10px auto;
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
    .game__notification {
      position: fixed;
      bottom: -73px;
      left: 36px;
      width: 75%;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.8);
      color: rgb(255, 255, 255);
      text-align: center;
      font-size: 0.75em;
      display: none;
    }

    .game__notification.visible {
      display: block;
    }
  `;

  constructor() {
    super();
    this.score = 0;
    this.cells = Array(9).fill(false);
    this.playing = false;
    this.intervalId = null;
    this.buttonName = 'Play';
  }

  render() {
    return html`
      <section class="game game--section">
        <div class="game__score"><p>Score: ${this.score}</p></div>
        <div class="game__grid">
          ${this.cells.map(
            (cell, index) => html`
              <div
                class="game__cell"
                @click="${() => this._handleCellClick(index)}"
                @keyup="${() => this._handleCellClick(index)}"
              >
                <div
                  class="game__mole ${cell ? 'game__mole--show ' : ''}"
                ></div>
              </div>
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
                    this._handleStopClick();
                  }}
                ></button-view>
              `
            : html`
                <button-view
                  class="game__button-view"
                  buttonLabel="${this.buttonName}"
                  @click=${() => {
                    this._handlePlayClick();
                  }}
                ></button-view>
              `}
        </div>
        <div
          class="game__notification ${this.notificationVisible
            ? 'visible'
            : ''}"
        >
          Good Job!
        </div>
      </section>
    `;
  }

  _handlePlayClick() {
    this.playing = true;
    this.buttonName = 'Stop';
    this.score = 0;
    this._startGameLoop();
  }

  _handleStopClick() {
    this.playing = false;
    this.buttonName = 'Play';
    this._stopGameLoop();
    this.cells = Array(9).fill(false);
  }

  _startGameLoop() {
    this.intervalId = setInterval(() => {
      this._showRandomMole();
    }, 1000);
  }

  _stopGameLoop() {
    clearInterval(this.intervalId);
  }

  _showRandomMole() {
    this.cells = this.cells.map(() => Math.random() < 0.5);
  }

  _handleCellClick(index) {
    if (this.cells[index]) {
      navigator.vibrate(200);
      this.score += 1;
      this.notificationVisible = true;

      setTimeout(() => {
        this.notificationVisible = false;
      }, 2000);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopGameLoop();
  }
}
window.customElements.define('game-view', GameView);
