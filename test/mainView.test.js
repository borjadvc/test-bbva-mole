import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import { AppRouter } from '../src/shared/helpers/router.js';
import { View } from '../src/shared/constants/views.js';
import '../src/mainView.js';
import '../src/shared/components/headerView.js';
import '../src/home/homeView.js';
import '../src/game/testBBVAMoleView.js';

describe('TestBBVAMole  - MainView', () => {
  let mainView;

  beforeEach(async () => {
    mainView = await fixture(html`<main-view></main-view>`);
  });

  it('should render the main view ', async () => {
    expect(mainView).to.exist;
  });

  it('should display the header when the route is TestBBVAMoleView', async () => {
    await nextFrame();
    const header = mainView.shadowRoot.querySelector('header-view');
    const routerOutlet = mainView.shadowRoot.querySelector('#router-outlet');

    const homeView = document.createElement('home-view');
    routerOutlet.appendChild(homeView);

    await nextFrame();
    homeView.dispatchEvent(
      new CustomEvent('user', { detail: { userName: 'John' } })
    );

    const testBBVAMoleView = document.createElement('test-bbva-mole-view');
    routerOutlet.innerHTML = '';
    routerOutlet.appendChild(testBBVAMoleView);

    await nextFrame();

    expect(header.style.display).to.equal('block');
  });

  it('should hide the header when the route is HomeView', async () => {
    const header = mainView.shadowRoot.querySelector('header-view');
    const routerOutlet = mainView.shadowRoot.querySelector('#router-outlet');

    const homeView = document.createElement('home-view');
    routerOutlet.appendChild(homeView);

    await mainView.updateComplete;

    expect(header.style.display).to.equal('none');
  });

  it('should update the userName in the header when the user event is triggered', async () => {
    const header = mainView.shadowRoot.querySelector('header-view');
    const routerOutlet = mainView.shadowRoot.querySelector('#router-outlet');

    const homeView = document.createElement('home-view');
    routerOutlet.appendChild(homeView);

    await mainView.updateComplete;

    homeView.dispatchEvent(
      new CustomEvent('user', {
        detail: {
          userName: 'John Doe',
        },
      })
    );

    await mainView.updateComplete;

    expect(header.userName).to.equal('John Doe');
  });

  it('should initialize the router on firstUpdated', async () => {
    const router = AppRouter.getRouter();
    expect(router).to.exist;
  });

  it('should set the location correctly when navigating to a route', async () => {
    const pathname = '/home';
    AppRouter.go({ pathname });
    const location = AppRouter.getLocation();
    expect(location).to.equal(View.Home.id);
  });

  it('should return the current location', async () => {
    const location = AppRouter.getLocation();
    expect(location).to.exist;
  });
});
