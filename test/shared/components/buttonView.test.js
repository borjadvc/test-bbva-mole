import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/shared/components/buttonView.js';

describe('TestBBVAMole - Components - buttonView', () => {
  let element;

  const buttonLabelTest = 'Example';

  it('should render a button', async () => {
    element = await fixture(html`<button-view></button-view>`);
    expect(element).to.exist;
    const buttonEl = element.shadowRoot.querySelector('button');
    expect(buttonEl).to.exist;
  });

  it('should render a button with the specified buttonLabel', async () => {
    element = await fixture(
      html`<button-view .buttonLabel=${buttonLabelTest}></button-view>`
    );
    expect(element).to.exist;
    const buttonEl = element.shadowRoot.querySelector('button');
    expect(buttonEl).to.exist;
    expect(buttonEl.textContent.trim()).to.equal(buttonLabelTest);
  });

  it('should have a emitClick function', () => {
    expect(element.emitClick).to.be.a('function');
  });
});
