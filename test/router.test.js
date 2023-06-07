import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { View } from '../src/shared/constants/views.js';
import '../src/index.js';
import '../src/login/view/loginView.js';

describe('HandGame - Router checking', () => {
  it('should renders login view', async () => {
    const element = await fixture(html`<hand-game-bbva></hand-game-bbva>`);

    const routerOutletContainer =
      element.shadowRoot.querySelector('#router-outlet');
    expect(routerOutletContainer).to.exist;
    expect(View.Login.component).to.exist;
  });
});
