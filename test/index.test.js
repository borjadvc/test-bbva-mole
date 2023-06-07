import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/index.js';

describe('HandGameBbva - Elements cheking', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<hand-game-bbva></hand-game-bbva>`);
  });

  it('should renders a router container', () => {
    const routerContainer = element.shadowRoot.querySelector('#router-outlet');
    expect(routerContainer).to.exist;
  });

  it('should renders header component', () => {
    const navbarView = element.shadowRoot.querySelector('navbar-view');
    expect(navbarView).to.exist;
  });
});
