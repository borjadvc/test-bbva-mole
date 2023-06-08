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
    moleView.__handlePlayClick();

    await nextFrame();

    expect(moleView.playing).to.be.true;
    expect(moleView.buttonName).to.equal('Stop');
    expect(moleView.score).to.equal(0);
  });

  it('should stop the game when the stop button is clicked', async () => {
    moleView.__handlePlayClick();

    await nextFrame();

    const stopButton = moleView.shadowRoot.querySelector('.game__button-view');

    stopButton.click();
    await nextFrame();

    expect(moleView.playing).to.be.false;
    expect(moleView.buttonName).to.equal('Play');
    expect(moleView.cells).to.deep.equal(Array(9).fill(false));
  });

  it('should show a random mole in a cell', async () => {
    moleView.__handlePlayClick();

    await nextFrame();

    const cellButtons = moleView.shadowRoot.querySelectorAll('.game__button');
    const initialCells = moleView.cells.slice();

    // eslint-disable-next-line no-promise-executor-return
    await new Promise(resolve => setTimeout(resolve, 1000));

    const updatedCells = moleView.cells.slice();
    const hasDifferentCells = updatedCells.some(
      (cell, index) => cell !== initialCells[index]
    );

    expect(hasDifferentCells).to.be.true;
    expect(cellButtons.length).to.equal(updatedCells.length);
  });
});
