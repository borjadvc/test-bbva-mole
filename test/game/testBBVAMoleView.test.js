import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { HomeView } from '../../src/home/homeView.js';
import { View } from '../../src/shared/constants/views.js';
import '../../src/shared/components/buttonView.js';
import '../../src/shared/components/inputField.js';

describe('HandGameBbva - Home View Elements Cheking', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<login-view></login-view>`);
  });

  it('should render input field with label', async () => {
    document.body.appendChild(element);
    await element.updateComplete;

    const inputField = element.shadowRoot.querySelector('input-field');
    expect(inputField).to.exist;
    expect(inputField.getAttribute('label')).to.equal('Name*');
  });

  it('should....', async () => {});
});
