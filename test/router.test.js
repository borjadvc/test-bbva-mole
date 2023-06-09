import { expect, fixture } from '@open-wc/testing';
import { AppRouter } from '../src/shared/helpers/router.js';
import '../src/mainView.js';

describe('TestBBVAMole - Helpers - Router', () => {
  let router;
  let mainView;

  beforeEach(async () => {
    mainView = await fixture('<main-view></main-view>');
    router = AppRouter.getRouter.call(mainView);
  });

  it('should initialize the router correctly', () => {
    expect(router).to.exist;
  });

  it('should return the current location', () => {
    const location = AppRouter.getLocation.call(mainView);
    expect(location).to.exist;
  });
});
