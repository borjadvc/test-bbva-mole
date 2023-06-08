import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import '../../src/game/testBBVAMoleView.js';

describe('TestBBVAMole - Game - TestBBVAMoleView', () => {
  let moleView;

  beforeEach(async () => {
    moleView = await fixture(html`<test-bbva-mole-view></test-bbva-mole-view>`);
  });

  it('should display the score and grid', async () => {
    await nextFrame();
    const scoreElement = moleView.shadowRoot.querySelector('.game__score');
    const gridElement = moleView.shadowRoot.querySelector('.game__grid');

    expect(scoreElement).to.exist;
    expect(gridElement).to.exist;
  });

  it('should start the game when the play button is clicked', async () => {
    await nextFrame();
    const playButton = moleView.shadowRoot.querySelector('.game__button-view');

    playButton.click();
    await nextFrame();

    expect(moleView.playing).to.be.true;
    expect(moleView.buttonName).to.equal('Stop');
    expect(moleView.score).to.equal(0);
  });

  it('should stop the game when the stop button is clicked', async () => {
    await nextFrame();
    moleView.playing = true;
    moleView.buttonName = 'Stop';

    const stopButton = moleView.shadowRoot.querySelector('.game__button-view');

    stopButton.click();
    await nextFrame();

    expect(moleView.playing).to.be.false;
    expect(moleView.buttonName).to.equal('Play');
    expect(moleView.cells).to.deep.equal(Array(9).fill(false));
  });

  it('should show a random mole in a cell', async () => {
    await nextFrame();
    moleView.playing = true;

    const cellButtons = moleView.shadowRoot.querySelectorAll('.game__button');
    const initialCells = moleView.cells.slice();

    await nextFrame();

    const updatedCells = moleView.cells.slice();
    const hasDifferentCells = updatedCells.some(
      (cell, index) => cell !== initialCells[index]
    );

    expect(hasDifferentCells).to.be.true;
    expect(cellButtons.length).to.equal(updatedCells.length);
  });

  it('should increase the score and show a toast when a mole is clicked', async () => {
    await nextFrame();
    moleView.playing = true;

    const cellButton = moleView.shadowRoot.querySelector('.game__button');
    const toastView = moleView.shadowRoot.querySelector('toast-view');

    cellButton.click();
    await nextFrame();

    expect(moleView.score).to.equal(1);
    expect(toastView.show).to.be.true;
    expect(toastView.message).to.equal('Good Job!');
    expect(toastView.type).to.equal('success');
  });
});
