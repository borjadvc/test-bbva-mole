import { html, css, LitElement } from 'lit';

export class GameView extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      --mole-image-url: url('../../../assets/images/mole-image.png');
    }

    .cell {
      display: inline-block;
      width: 100px;
      height: 100px;
      border: 2px solid black;
      cursor: pointer;
    }

    .mole {
      display: none;
      width: 80px;
      height: 80px;
      background-image: var(--mole-image-url);
      background-size: cover;
      border-radius: 50%;
      margin: 10px auto;
    }

    .show {
      display: block;
    }

    .score {
      font-size: 24px;
      margin-top: 20px;
    }
  `;

  static properties = {
    score: { type: Number },
    cells: { type: Array },
    playing: { type: Boolean },
    intervalId: { type: Number },
  };

  constructor() {
    super();
    this.score = 0;
    this.cells = Array(9).fill(false);
    this.playing = false;
    this.intervalId = null;
  }

  render() {
    return html`
      <div>
        ${this.cells.map(
          (cell, index) => html`
            <div class="cell" @click="${() => this._handleCellClick(index)}">
              <div class="mole ${cell ? 'show' : ''}"></div>
            </div>
          `
        )}
      </div>
      ${this.playing
        ? html` <button @click="${this._handleStopClick}">Stop</button> `
        : html` <button @click="${this._handlePlayClick}">Play</button> `}
      <div class="score">Score: ${this.score}</div>
    `;
  }

  _handlePlayClick() {
    this.playing = true;
    this.score = 0;
    this._startGameLoop();
  }

  _handleStopClick() {
    this.playing = false;
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
      this.score++;
      alert('¡Felicidades! Has golpeado al topo.');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopGameLoop();
  }
}
window.customElements.define('game-view', GameView);
