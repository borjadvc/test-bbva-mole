import { html } from 'lit';
import { fixture, expect, waitUntil } from '@open-wc/testing';
import '../../../src/shared/components/toastView.js';
import sinon from 'sinon';

describe('TestBBVAMole - Components - ToastView', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<toast-view></toast-view>`);
  });

  it('should render a toast', async () => {
    expect(element).to.exist;
  });

  it('should render a toast with error type', async () => {
    element.type = 'error';
    await element.updateComplete;

    expect(element.type).to.equal('error');
  });

  it('should render a toast with success type', async () => {
    element.type = 'success';
    await element.updateComplete;

    expect(element.type).to.equal('success');
  });

  it('should render a toast with the specified message', async () => {
    const message = 'Toast message';
    element.message = message;
    await element.updateComplete;

    expect(element.message).to.equal(message);
  });

  it('should close the toast when the close event is dispatched', async () => {
    const closeEvent = new Event('close');
    const dispatchStub = sinon.stub(element, 'dispatchEvent');
    element.dispatchEvent(closeEvent);

    await waitUntil(() => dispatchStub.calledOnce);

    expect(dispatchStub).to.have.been.calledWith(closeEvent);
  });
});
