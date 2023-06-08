import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import '../../../src/shared/components/inputField.js';

describe('TestBBVAMole - Components - InputField', () => {
  it('renders an input field with the provided label', async () => {
    const label = 'Username';
    const el = await fixture(
      html`<input-field label="${label}"></input-field>`
    );
    const input = el.shadowRoot.querySelector('input');
    const labelElement = el.shadowRoot.querySelector('label');

    expect(input).to.exist;
    expect(labelElement).to.exist;
    expect(labelElement.innerText).to.equal(label);
  });

  it('updates the value when the input is changed', async () => {
    const el = await fixture(html`<input-field></input-field>`);
    const input = el.shadowRoot.querySelector('input');
    const newValue = 'New Value';

    input.value = newValue;
    input.dispatchEvent(new Event('change'));

    expect(el.value).to.equal(newValue);
  });

  it('emits an "updateValue" event when the input is changed', async () => {
    const el = await fixture(html`<input-field></input-field>`);
    const input = el.shadowRoot.querySelector('input');
    const newValue = 'New Value';

    const updateValueEventPromise = new Promise(resolve => {
      el.addEventListener('updateValue', event => resolve(event.detail.value));
    });

    input.value = newValue;
    input.dispatchEvent(new Event('change'));

    const updatedValue = await updateValueEventPromise;
    expect(updatedValue).to.equal(newValue);
  });
});
