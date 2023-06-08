import { expect, fixture, html } from '@open-wc/testing';
import { Router } from '@vaadin/router';
import sinon from 'sinon';
import { AppRouter } from '../src/shared/helpers/router.js';

describe('AppRouter', () => {
  let routerStub;
  let getItemStub;
  let setItemStub;

  beforeEach(() => {
    getItemStub = sinon.stub(localStorage, 'getItem');
    setItemStub = sinon.stub(localStorage, 'setItem');
    routerStub = {
      setRoutes: sinon.stub(),
    };
  });

  afterEach(() => {
    getItemStub.restore();
    setItemStub.restore();
  });

  it('should initialize router and set routes', async () => {
    const shadowRoot = await fixture(html`<div id="router-outlet"></div>`);
    const querySelectorStub = sinon
      .stub(shadowRoot, 'querySelector')
      .returns(shadowRoot);

    const initRouterResult = AppRouter.getRouter.call(
      { shadowRoot, checkPath: () => 'home' },
      routerStub
    );

    expect(initRouterResult).to.equal(routerStub);
    expect(querySelectorStub.calledOnceWith('#router-outlet')).to.be.true;
    expect(routerStub.setRoutes.calledOnce).to.be.true;
    expect(getItemStub.calledOnceWith('appRouterLocation')).to.be.true;
    expect(setItemStub.calledOnceWith('appRouterLocation', 'home')).to.be.true;

    querySelectorStub.restore();
  });

  it('should navigate to the specified pathname and update the location', () => {
    const checkPathStub = sinon.stub(AppRouter, 'checkPath').returns('game');
    const goSpy = sinon.spy(Router, 'go');
    const getLocationStub = sinon
      .stub(AppRouter, 'getLocation')
      .returns('game');

    const result = AppRouter.go.call({}, { pathname: '/game' });

    expect(goSpy.calledOnceWith({ pathname: 'game' })).to.be.true;
    expect(getLocationStub.calledOnce).to.be.true;
    expect(getItemStub.calledOnceWith('appRouterLocation')).to.be.true;
    expect(checkPathStub.calledOnceWith({ pathname: '/game' })).to.be.true;
    expect(setItemStub.calledOnceWith('appRouterLocation', 'game')).to.be.true;
    expect(result).to.equal('game');

    checkPathStub.restore();
    goSpy.restore();
    getLocationStub.restore();
  });

  it('should return the current location', () => {
    const getLocationStub = sinon
      .stub(AppRouter, 'getLocation')
      .returns('home');

    const result = AppRouter.getLocation();

    expect(result).to.equal('home');
    expect(getLocationStub.calledOnce).to.be.true;

    getLocationStub.restore();
  });

  it('should return the root path', () => {
    const getLocationStub = sinon
      .stub(AppRouter, 'getLocation')
      .returns('/game');

    const result = AppRouter.getRootPath();

    expect(result).to.equal('/game');
    expect(getLocationStub.calledOnce).to.be.true;

    getLocationStub.restore();
  });
});
