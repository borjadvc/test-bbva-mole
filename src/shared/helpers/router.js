import { Router } from '@vaadin/router';
import { View, Route } from '../constants/views.js';

let router;
let location;

const LOCAL_STORAGE_KEY = 'appRouterLocation';

const checkPath = ({ pathname }) => Route[pathname] ?? View.Home.id;

function initRouter() {
  const routeViewEl = this.shadowRoot.querySelector('#router-outlet');
  router = new Router(routeViewEl, {
    baseUrl: '/',
  });

  router.setRoutes([
    { path: View.Home.id, component: View.Home.component },
    { path: View.Game.id, component: View.Game.component },
    { path: '(.*)', redirect: View.Home.id },
  ]);

  const storedLocation = localStorage.getItem(LOCAL_STORAGE_KEY);
  location =
    storedLocation ?? checkPath({ pathname: window.location.pathname });

  localStorage.setItem(LOCAL_STORAGE_KEY, location);

  return router;
}

export const AppRouter = {
  getRouter() {
    return router ?? initRouter.call(this);
  },

  go({ pathname }) {
    location = this.checkPath({ pathname });
    Router.go({ pathname: location });
    localStorage.setItem(LOCAL_STORAGE_KEY, location);
    return this.getLocation();
  },

  checkPath,

  getLocation() {
    return location;
  },

  getRootPath() {
    const spliterRoute = location.split('/');
    return spliterRoute.length ? `/${spliterRoute[1]}` : location;
  },
};
