import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import '../../src/home/homeView.js';

describe('TestBBVAMole - Home - HomeView', () => {
  let homeView;

  beforeEach(async () => {
    homeView = await fixture(html`<home-view></home-view>`);
  });

  it('should display the home icon', async () => {
    await nextFrame();
    const icon = homeView.shadowRoot.querySelector('.icon');
    expect(icon).to.exist;
    expect(icon.src).to.include('computer-mouse-solid.svg');
  });

  it('should display the input field and button', async () => {
    await nextFrame();
    const inputField = homeView.shadowRoot.querySelector('input-field');
    const buttonView = homeView.shadowRoot.querySelector('button-view');
    expect(inputField).to.exist;
    expect(buttonView).to.exist;
  });

  it('should show an error toast when the name field is empty', async () => {
    await nextFrame();
    const buttonView = homeView.shadowRoot.querySelector('button-view');
    const toastView = homeView.shadowRoot.querySelector('toast-view');

    buttonView.click();
    await nextFrame();

    expect(toastView.show).to.be.true;
    expect(toastView.message).to.equal('The name field must not be empty.');
    expect(toastView.type).to.equal('error');
  });

  it('should show an error toast when the name contains invalid characters', async () => {
    await nextFrame();
    const inputField = homeView.shadowRoot.querySelector('input-field');
    const buttonView = homeView.shadowRoot.querySelector('button-view');
    const toastView = homeView.shadowRoot.querySelector('toast-view');

    inputField.value = '!@#$';
    buttonView.click();
    await nextFrame();

    expect(toastView.show).to.be.true;
    expect(toastView.message).to.equal(
      'Username should only contain letters and numbers.'
    );
    expect(toastView.type).to.equal('error');
  });

  it('should dispatch a user event and navigate to the game view when a valid name is entered', async () => {
    await nextFrame();
    const inputField = homeView.shadowRoot.querySelector('input-field');
    const buttonView = homeView.shadowRoot.querySelector('button-view');

    const eventPromise = new Promise(resolve => {
      homeView.addEventListener('user', resolve);
    });

    inputField.value = 'John';
    buttonView.click();
    await nextFrame();

    const event = await eventPromise;
    expect(event.detail.userName).to.equal('John');

    const location = homeView.selectedViewId;
    expect(location).to.equal('/game');
  });
});
