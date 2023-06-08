import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../../../src/shared/components/headerView.js';

describe('TestBBVAMole - Components - HeaderView', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<header-view></header-view>`);
  });

  it('should render a header', () => {
    const header = element.shadowRoot.querySelector('.header');
    expect(header).to.exist;
  });

  it('should render a user icon', () => {
    const userIcon = element.shadowRoot.querySelector('.header__icon');
    expect(userIcon).to.exist;
    expect(userIcon.getAttribute('src')).to.contain('circle-user-solid.svg');
  });

  it('should render the user name', async () => {
    const userName = 'Example User';
    element.userName = userName;
    await element.updateComplete;

    const headerText = element.shadowRoot.querySelector('.header__text');
    expect(headerText).to.exist;
    expect(headerText.textContent).to.equal(userName);
  });
});
